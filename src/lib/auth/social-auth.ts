import { gql } from '@apollo/client/core';
import type { SignInOauthUserInput, SignInOauthUserMutation } from '../graphql/generated/graphql';
import { client } from '../apollo/client';

// GraphQL mutation for OAuth sign-in
export const SIGN_IN_OAUTH_USER = gql`
  mutation SignInOauthUser($input: SignInOauthUserInput!) {
    signInOauthUser(input: $input) {
      userId
      authToken
      authTokenExpiresAt
      email
      firstName
      lastName
      userHandle
    }
  }
`;

// Configuration for OAuth providers
export const oAuthConfig = {
  google: {
    clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID as string,
    scope: 'email profile',
  },
  facebook: {
    appId: import.meta.env.VITE_FACEBOOK_APP_ID as string,
    scope: 'email,public_profile',
  }
};

// Interface for OAuth user data
interface OAuthUserData {
  email: string;
  firstName: string;
  lastName: string;
  displayName?: string;
  avatarUrl?: string;
  provider: 'google' | 'facebook';
  providerId: string;
  accessToken: string;
}

// Handle OAuth sign-in
export async function handleOAuthSignIn(userData: OAuthUserData) {
  try {
    const input: SignInOauthUserInput = {
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      displayName: userData.displayName,
      avatarUrl: userData.avatarUrl,
      provider: userData.provider,
      providerId: userData.providerId,
      accessToken: userData.accessToken,
      emailVerified: true,
    };

    const { data } = await client.mutate<SignInOauthUserMutation>({
      mutation: SIGN_IN_OAUTH_USER,
      variables: { input },
    });

    if (data?.signInOauthUser) {
      // Store user data in localStorage
      localStorage.setItem('userData', JSON.stringify(data.signInOauthUser));
      return data.signInOauthUser;
    }

    throw new Error('Failed to sign in with OAuth provider');
  } catch (error) {
    console.error('OAuth sign-in error:', error);
    throw error;
  }
}