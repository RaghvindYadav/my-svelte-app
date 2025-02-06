/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation SignUpUser($input: SignUpUserInput!) {\n    signUpUser(input: $input) {\n      firstName\n      userId\n      authToken\n      authTokenExpiresAt\n      userHandle\n    }\n  }\n": types.SignUpUserDocument,
    "\n  mutation SignInUser($input: SignInUserInput!) {\n    signInUser(input: $input) {\n      email\n      firstName\n      lastName\n      userId\n      userHandle\n      authToken\n    }\n  }\n": types.SignInUserDocument,
    "\n  query FindChannelsForUser($userId: String!) {\n    findChannelsForUser(userId: $userId) {\n      id\n      name\n      latestMessage {\n        messageText\n        createdAt\n        createdBy\n      }\n      participants {\n        id\n        metadata {\n          avatarUrl\n          firstName\n          lastName\n          userHandle\n        }\n      }\n      isArchivedForMe\n    }\n  }\n": types.FindChannelsForUserDocument,
    "\n  query FindChannelMessages($filter: ChannelMessageListFilter) {\n    findChannelMessages(filter: $filter) {\n      messageText\n      id\n      editedAt\n      createdAt\n      sender {\n        email\n        firstName\n        id\n        lastName\n      }\n      statuses {\n        receivedAt\n        seenAt\n        userId\n      }\n      deletedBy\n      deletedAt\n    }\n  }\n": types.FindChannelMessagesDocument,
    "\n  mutation CreateChannelMessage($input: ChannelMessageInput!) {\n    createChannelMessage(input: $input) {\n      id\n      channelId\n      createdBy\n      messageText\n      statuses {\n        receivedAt\n        seenAt\n        userId\n      }\n      sender {\n        avatarUrl\n        email\n        firstName\n        lastName\n      }\n      replyToMessageId\n      editedAt\n    }\n  }\n": types.CreateChannelMessageDocument,
    "\n  subscription ChannelChanged($channelId: ID!) {\n    channelChanged(channelId: $channelId) {\n      channelId\n      eventType\n      invitationId\n      messageId\n      participantId\n    }\n  }\n": types.ChannelChangedDocument,
    "\n  query FindUsers($filter: UserListFilter) {\n    findUsers(filter: $filter) {\n      avatarUrl\n      createdAt\n      id\n      firstName\n      lastName\n      profileRole\n      offersHelp\n      cityOfResidence\n    }\n  }\n": types.FindUsersDocument,
    "\n  mutation CreateChannelInvitation($input: ChannelInvitationInput!) {\n    createChannelInvitation(input: $input) {\n      messageText\n      id\n      createdAt\n      createdBy\n      channelId\n      recipient {\n        avatarUrl\n        email\n        firstName\n        lastName\n        offersHelp\n        profileRole\n      }\n    }\n  }\n": types.CreateChannelInvitationDocument,
    "\n  query FindChannelInvitationsForUser($userId: String!) {\n    findChannelInvitationsForUser(userId: $userId) {\n      channelId\n      channelName\n      id\n      messageText\n      recipient {\n        avatarUrl\n        email\n        firstName\n        lastName\n      }\n      sender {\n        avatarUrl\n        email\n        firstName\n        lastName\n      }\n      createdAt\n      createdBy\n      status\n    }\n  }\n": types.FindChannelInvitationsForUserDocument,
    "\n  mutation AcceptChannelInvitation($channelInvitationId: String!) {\n    acceptChannelInvitation(channelInvitationId: $channelInvitationId)\n  }\n": types.AcceptChannelInvitationDocument,
    "\n  mutation DeclineChannelInvitation($reasonTextId: DeclineChannelInvitationReasonTextId!, $channelInvitationId: String!) {\n    declineChannelInvitation(reasonTextId: $reasonTextId, channelInvitationId: $channelInvitationId)\n  }\n": types.DeclineChannelInvitationDocument,
    "\n  mutation SignMeOut {\n    signMeOut\n  }\n": types.SignMeOutDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SignUpUser($input: SignUpUserInput!) {\n    signUpUser(input: $input) {\n      firstName\n      userId\n      authToken\n      authTokenExpiresAt\n      userHandle\n    }\n  }\n"): (typeof documents)["\n  mutation SignUpUser($input: SignUpUserInput!) {\n    signUpUser(input: $input) {\n      firstName\n      userId\n      authToken\n      authTokenExpiresAt\n      userHandle\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SignInUser($input: SignInUserInput!) {\n    signInUser(input: $input) {\n      email\n      firstName\n      lastName\n      userId\n      userHandle\n      authToken\n    }\n  }\n"): (typeof documents)["\n  mutation SignInUser($input: SignInUserInput!) {\n    signInUser(input: $input) {\n      email\n      firstName\n      lastName\n      userId\n      userHandle\n      authToken\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FindChannelsForUser($userId: String!) {\n    findChannelsForUser(userId: $userId) {\n      id\n      name\n      latestMessage {\n        messageText\n        createdAt\n        createdBy\n      }\n      participants {\n        id\n        metadata {\n          avatarUrl\n          firstName\n          lastName\n          userHandle\n        }\n      }\n      isArchivedForMe\n    }\n  }\n"): (typeof documents)["\n  query FindChannelsForUser($userId: String!) {\n    findChannelsForUser(userId: $userId) {\n      id\n      name\n      latestMessage {\n        messageText\n        createdAt\n        createdBy\n      }\n      participants {\n        id\n        metadata {\n          avatarUrl\n          firstName\n          lastName\n          userHandle\n        }\n      }\n      isArchivedForMe\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FindChannelMessages($filter: ChannelMessageListFilter) {\n    findChannelMessages(filter: $filter) {\n      messageText\n      id\n      editedAt\n      createdAt\n      sender {\n        email\n        firstName\n        id\n        lastName\n      }\n      statuses {\n        receivedAt\n        seenAt\n        userId\n      }\n      deletedBy\n      deletedAt\n    }\n  }\n"): (typeof documents)["\n  query FindChannelMessages($filter: ChannelMessageListFilter) {\n    findChannelMessages(filter: $filter) {\n      messageText\n      id\n      editedAt\n      createdAt\n      sender {\n        email\n        firstName\n        id\n        lastName\n      }\n      statuses {\n        receivedAt\n        seenAt\n        userId\n      }\n      deletedBy\n      deletedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateChannelMessage($input: ChannelMessageInput!) {\n    createChannelMessage(input: $input) {\n      id\n      channelId\n      createdBy\n      messageText\n      statuses {\n        receivedAt\n        seenAt\n        userId\n      }\n      sender {\n        avatarUrl\n        email\n        firstName\n        lastName\n      }\n      replyToMessageId\n      editedAt\n    }\n  }\n"): (typeof documents)["\n  mutation CreateChannelMessage($input: ChannelMessageInput!) {\n    createChannelMessage(input: $input) {\n      id\n      channelId\n      createdBy\n      messageText\n      statuses {\n        receivedAt\n        seenAt\n        userId\n      }\n      sender {\n        avatarUrl\n        email\n        firstName\n        lastName\n      }\n      replyToMessageId\n      editedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  subscription ChannelChanged($channelId: ID!) {\n    channelChanged(channelId: $channelId) {\n      channelId\n      eventType\n      invitationId\n      messageId\n      participantId\n    }\n  }\n"): (typeof documents)["\n  subscription ChannelChanged($channelId: ID!) {\n    channelChanged(channelId: $channelId) {\n      channelId\n      eventType\n      invitationId\n      messageId\n      participantId\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FindUsers($filter: UserListFilter) {\n    findUsers(filter: $filter) {\n      avatarUrl\n      createdAt\n      id\n      firstName\n      lastName\n      profileRole\n      offersHelp\n      cityOfResidence\n    }\n  }\n"): (typeof documents)["\n  query FindUsers($filter: UserListFilter) {\n    findUsers(filter: $filter) {\n      avatarUrl\n      createdAt\n      id\n      firstName\n      lastName\n      profileRole\n      offersHelp\n      cityOfResidence\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateChannelInvitation($input: ChannelInvitationInput!) {\n    createChannelInvitation(input: $input) {\n      messageText\n      id\n      createdAt\n      createdBy\n      channelId\n      recipient {\n        avatarUrl\n        email\n        firstName\n        lastName\n        offersHelp\n        profileRole\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateChannelInvitation($input: ChannelInvitationInput!) {\n    createChannelInvitation(input: $input) {\n      messageText\n      id\n      createdAt\n      createdBy\n      channelId\n      recipient {\n        avatarUrl\n        email\n        firstName\n        lastName\n        offersHelp\n        profileRole\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FindChannelInvitationsForUser($userId: String!) {\n    findChannelInvitationsForUser(userId: $userId) {\n      channelId\n      channelName\n      id\n      messageText\n      recipient {\n        avatarUrl\n        email\n        firstName\n        lastName\n      }\n      sender {\n        avatarUrl\n        email\n        firstName\n        lastName\n      }\n      createdAt\n      createdBy\n      status\n    }\n  }\n"): (typeof documents)["\n  query FindChannelInvitationsForUser($userId: String!) {\n    findChannelInvitationsForUser(userId: $userId) {\n      channelId\n      channelName\n      id\n      messageText\n      recipient {\n        avatarUrl\n        email\n        firstName\n        lastName\n      }\n      sender {\n        avatarUrl\n        email\n        firstName\n        lastName\n      }\n      createdAt\n      createdBy\n      status\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AcceptChannelInvitation($channelInvitationId: String!) {\n    acceptChannelInvitation(channelInvitationId: $channelInvitationId)\n  }\n"): (typeof documents)["\n  mutation AcceptChannelInvitation($channelInvitationId: String!) {\n    acceptChannelInvitation(channelInvitationId: $channelInvitationId)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeclineChannelInvitation($reasonTextId: DeclineChannelInvitationReasonTextId!, $channelInvitationId: String!) {\n    declineChannelInvitation(reasonTextId: $reasonTextId, channelInvitationId: $channelInvitationId)\n  }\n"): (typeof documents)["\n  mutation DeclineChannelInvitation($reasonTextId: DeclineChannelInvitationReasonTextId!, $channelInvitationId: String!) {\n    declineChannelInvitation(reasonTextId: $reasonTextId, channelInvitationId: $channelInvitationId)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SignMeOut {\n    signMeOut\n  }\n"): (typeof documents)["\n  mutation SignMeOut {\n    signMeOut\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;