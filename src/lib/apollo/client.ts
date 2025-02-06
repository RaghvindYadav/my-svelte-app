import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { createHttpLink } from '@apollo/client/link/http';
import { setContext } from '@apollo/client/link/context';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { split } from '@apollo/client/link/core';
import { createClient } from 'graphql-ws';
import { v4 as uuidv4 } from 'uuid';

const GRAPHQL_ENDPOINT = "http://localhost:8090/fsdata/api/graphql";
const WS_ENDPOINT = "ws://localhost:8090/fsdata/api/graphql";

// Generate a device ID if it doesn't exist
const getDeviceId = () => {
  if (typeof window !== 'undefined') {
    let deviceId = localStorage.getItem('deviceId');
    if (!deviceId) {
      deviceId = uuidv4();
      localStorage.setItem('deviceId', deviceId);
    }
    return deviceId;
  }
  return uuidv4(); // Fallback for SSR
};

// Create the http link
const httpLink = createHttpLink({
  uri: GRAPHQL_ENDPOINT,
});

// Add the auth link
const authLink = setContext((_, { headers }) => {
  const deviceId = getDeviceId();

  // Get user data from localStorage
  const userDataStr = typeof window !== 'undefined' ? localStorage.getItem('userData') : null;
  const userData = userDataStr ? JSON.parse(userDataStr) : null;

  return {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
      'x-authorization-auth-type': userData ? 'user' : 'none',
      'x-device': deviceId,
      ...(userData && {
        'x-user-id': userData.userId,
        'Authorization': `Bearer ${userData.authToken}`
      })
    }
  };
});

// Create WebSocket link
const wsLink = typeof window !== 'undefined'
  ? new GraphQLWsLink(
      createClient({
        url: WS_ENDPOINT,
        connectionParams: () => {
          const deviceId = getDeviceId();
          const userDataStr = localStorage.getItem('userData');
          const userData = userDataStr ? JSON.parse(userDataStr) : null;

          return {
            headers: {
              'Content-Type': 'application/json',
              'x-authorization-auth-type': userData ? 'user' : 'none',
              'x-device': deviceId,
              ...(userData && {
                'x-user-id': userData.userId,
                'Authorization': `Bearer ${userData.authToken}`
              })
            }
          };
        },
      })
    )
  : null;

// Split links based on operation type
const splitLink = typeof window !== 'undefined' && wsLink
  ? split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === 'OperationDefinition' &&
          definition.operation === 'subscription'
        );
      },
      wsLink,
      authLink.concat(httpLink)
    )
  : authLink.concat(httpLink);

// Create the Apollo Client instance
export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'network-only',
    },
    query: {
      fetchPolicy: 'network-only',
    },
  },
});
