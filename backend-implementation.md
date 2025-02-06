# Backend Implementation
Here is url what we need for implementation:
const GRAPHQL_ENDPOINT = "https://api.firstspark.io/fsdata/api/graphql";
const WS_ENDPOINT = "wss://api.firstspark.io/fsdata/api/graphql";
Please proceed step by step -

### Prompt: 1
Create a GraphQL client using the Apollo package so that I can execute most of the mutations and queries. The GraphQL endpoint is: `https://api.firstspark.io/fsdata/api/graphql`. This URL requires specific header values, which are as follows:

```javascript
const headers = {
  "Content-Type": "application/json",
  "x-authorization-auth-type": "none",
  "x-device": deviceId,
}
```
Sometimes userId also required you can get this when user login or signed up.

### Prompt: 2
Generate GraphQl schema types from GRAPHQL_ENDPOINT use graphql-codegen.

After that you need to run this terminal code : npm run generate


### Prompt: 3
Use the given below queries for signIn, signUp, singOut and use the generated schema from ‘/graphql/graphql.ts’. And store the userData so app do not need to signIn again. Also user's id will use in graphql client's header.

export const SIGN_UP_MUTATION = gql`
  mutation SignUpUser($input: SignUpUserInput!) {
    signUpUser(input: $input) {
      firstName
      userId
      authToken
      authTokenExpiresAt
      userHandle
    }
  }
`;

export const SIGN_IN_MUTATION = gql`
  mutation SignInUser($input: SignInUserInput!) {
    signInUser(input: $input) {
      email
      firstName
      lastName
      userId
      userHandle
      authToken
    }
  }
`;

export const SIGN_OUT_MUTATION = gql`
  mutation SignMeOut {
    signMeOut
  }
`;
Use the query inputs from generated schema

### Prompt: 4
Create a `Find Users` page if not exists and use the below queries or mutations to find users and create channel invitation.

From this query you will get list of users:

export const FIND_USERS_QUERY = gql`
  query FindUsers($filter: UserListFilter) {
    findUsers(filter: $filter) {
      avatarUrl
      createdAt
      id
      firstName
      lastName
      profileRole
      offersHelp
      cityOfResidence
    }
  }
`;

From this mutation you can create channel invitation:

export const CREATE_CHANNEL_INVITATION_MUTATION = gql`
  mutation CreateChannelInvitation($input: ChannelInvitationInput!) {
    createChannelInvitation(input: $input) {
      messageText
      id
      createdAt
      createdBy
      channelId
      recipient {
        avatarUrl
        email
        firstName
        lastName
        offersHelp
        profileRole
      }
    }
  }
`;

### Prompt: 5
Create a Invitations page if not exists where we can see the list of invitations and accept or decline the invitation. Also make sure the component which will used to show invitations should make difference between received and sent invitations. For received and sent invitations use createdBy field match it with current userId:

Use the following queries to get the list of invitations:

export const FIND_CHANNEL_INVITATIONS_QUERY = gql`
  query FindChannelInvitationsForUser($userId: String!) {
    findChannelInvitationsForUser(userId: $userId) {
      channelId
      channelName
      id
      messageText
      recipient {
        avatarUrl
        email
        firstName
        lastName
      }
      sender {
        avatarUrl
        email
        firstName
        lastName
      }
      createdAt
      createdBy
      status
    }
  }
`;

For accept and decline invitation use the following mutations:

export const ACCEPT_CHANNEL_INVITATION_MUTATION = gql`
  mutation AcceptChannelInvitation($channelInvitationId: String!) {
    acceptChannelInvitation(channelInvitationId: $channelInvitationId)
  }
`;

export const DECLINE_CHANNEL_INVITATION_MUTATION = gql`
  mutation DeclineChannelInvitation($reasonTextId: DeclineChannelInvitationReasonTextId!, $channelInvitationId: String!) {
    declineChannelInvitation(reasonTextId: $reasonTextId, channelInvitationId: $channelInvitationId)
  }
`;

Hide the accept button component button if it sent by current user. Use the query inputs from generated schema.

### Prompt: 6
Create a Chat page if not exists where we can see the list of channels and messages. For this use the following queries and mutations.
For displaying the name on ChatTile component follow these conditions:
- If there are exactly 2 participants, use the metadata of the participants whose `userId` is different from the current userId.
- If there are more than 2 participants, use `channel.name` for the title.
- for avtar use avtar url from metadata. If not available use first letter of name in capital letter.


For get channels use the following query:

export const FIND_CHANNELS_QUERY = gql`
  query FindChannelsForUser($userId: String!) {
    findChannelsForUser(userId: $userId) {
      id
      name
      latestMessage {
        messageText
        createdAt
        createdBy
      }
      participants {
        id
        metadata {
          avatarUrl
          firstName
          lastName
          userHandle
        }
      }
      isArchivedForMe
    }
  }
`;

For get messages use the following query:

export const FIND_CHANNEL_MESSAGES_QUERY = gql`
  query FindChannelMessages($filter: ChannelMessageListFilter) {
    findChannelMessages(filter: $filter) {
      messageText
      id
      editedAt
      createdAt
      sender {
        email
        firstName
        id
        lastName
      }
      statuses {
        receivedAt
        seenAt
        userId
      }
      deletedBy
      deletedAt
    }
  }
`;

For create message use the following mutation:

export const CREATE_CHANNEL_MESSAGE_MUTATION = gql`
  mutation CreateChannelMessage($input: ChannelMessageInput!) {
    createChannelMessage(input: $input) {
      id
      channelId
      createdBy
      messageText
      statuses {
        receivedAt
        seenAt
        userId
      }
      sender {
        avatarUrl
        email
        firstName
        lastName
      }
      replyToMessageId
      editedAt
    }
  }
`;

For subscription use the following query:

export const CHANNEL_CHANGED_SUBSCRIPTION = gql`
  subscription ChannelChanged($channelId: ID!) {
    channelChanged(channelId: $channelId) {
      channelId
      eventType
      invitationId
      messageId
      participantId
    }
  }
`;

Use the query inputs from generated schema
