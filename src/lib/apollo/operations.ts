import { gql } from '@apollo/client/core';

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

export const SIGN_OUT_MUTATION = gql`
  mutation SignMeOut {
    signMeOut
  }
`;
