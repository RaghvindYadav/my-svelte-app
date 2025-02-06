/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any; }
};

export type AcademicExperience = {
  __typename?: 'AcademicExperience';
  adminNotes?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  /** E.g. "Bachelor of Science" */
  degreeType?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  /** If the experience is ongoing, endDate is null. */
  endDate?: Maybe<Scalars['DateTimeISO']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  /** E.g. "Computer Science" */
  fieldOfStudy?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  institutionName: Scalars['String']['output'];
  metadata?: Maybe<BaseModelMetadata>;
  /** If no start date is provided, startDate is null. */
  startDate?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  userId: Scalars['ID']['output'];
};

export type AcademicExperienceInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  /** E.g. "Bachelor of Science" */
  degreeType?: InputMaybe<Scalars['String']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  /** If the experience is ongoing, endDate is null. */
  endDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  /** E.g. "Computer Science" */
  fieldOfStudy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  institutionName?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  startDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type AdminTask = {
  __typename?: 'AdminTask';
  adminNotes?: Maybe<Scalars['String']['output']>;
  adminTaskType: AdminTaskType;
  /** arguments */
  args?: Maybe<Array<Scalars['String']['output']>>;
  /** run ask after creation */
  autoRun?: Maybe<Scalars['Boolean']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  /** Any error messages that happened during the run */
  error?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  /** Date/time this task will be removed from the db */
  expiresAt?: Maybe<Scalars['DateTimeISO']['output']>;
  /** Date/time this task completed its run */
  finishedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<BaseModelMetadata>;
  result?: Maybe<AdminTaskResult>;
  resultMessage?: Maybe<Scalars['String']['output']>;
  /** Date/time this task started to run */
  startedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  /** should the task run synchronously, or in the background? */
  synchronous?: Maybe<Scalars['Boolean']['output']>;
  /** number of milliseconds before timeout */
  timeout?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
};

export type AdminTaskArgDef = {
  __typename?: 'AdminTaskArgDef';
  choices?: Maybe<Array<Scalars['String']['output']>>;
  dataType: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  optional?: Maybe<Scalars['Boolean']['output']>;
};

export type AdminTaskDef = {
  __typename?: 'AdminTaskDef';
  adminTaskType: AdminTaskType;
  /** arguments */
  args?: Maybe<Array<AdminTaskArgDef>>;
  /** is this admin task available? */
  available: Scalars['Boolean']['output'];
  description?: Maybe<Scalars['String']['output']>;
  label: Scalars['String']['output'];
  /** number of milliseconds before timeout */
  timeout?: Maybe<Scalars['Int']['output']>;
};

export type AdminTaskInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  adminTaskType?: InputMaybe<AdminTaskType>;
  /** arguments */
  args?: InputMaybe<Array<Scalars['String']['input']>>;
  /** run ask after creation */
  autoRun?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  /** Any error messages that happened during the run */
  error?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  /** Date/time this task will be removed from the db */
  expiresAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  /** Date/time this task completed its run */
  finishedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  result?: InputMaybe<AdminTaskResult>;
  resultMessage?: InputMaybe<Scalars['String']['input']>;
  /** Date/time this task started to run */
  startedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  /** should the task run synchronously, or in the background? */
  synchronous?: InputMaybe<Scalars['Boolean']['input']>;
  /** number of milliseconds before timeout */
  timeout?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
};

export type AdminTaskResult =
  | 'error'
  | 'ok';

export type AdminTaskType =
  | 'addAppFeature'
  | 'addLanguageText'
  | 'clearBusMessages'
  | 'compareMm2Object'
  | 'compareMm2ObjectIdsOfModel'
  | 'createApiAuthInfo'
  | 'decryptString'
  | 'deleteUser'
  | 'doDataMaintenance'
  | 'fixAllSyncedChannelInvitationInitialMessages'
  | 'formatPhoneNumbers'
  | 'loadDbCache'
  | 'mergeUsers'
  | 'pauseMm2Synchronization'
  | 'queryDbVersion'
  | 'recreateDbIndexes'
  | 'recreateDefaultMatchingEngine'
  | 'refreshAllEmbeddedCompanies'
  | 'refreshAllMatchProfiles'
  | 'refreshAllUserInboxes'
  | 'removeAllInvalidUserBlocks'
  | 'removeAppFeature'
  | 'removeBusMessage'
  | 'resetUserPassword'
  | 'runDataGenerator'
  | 'runMm2Synchronization'
  | 'sendPushNotification'
  | 'setUserPassword'
  | 'suspendUser'
  | 'syncUsersWithLanguageMismatch'
  | 'triggerRandomSynchronizations'
  | 'unset'
  | 'updateChannelMetadata'
  | 'updateGroupIdentsInAllGroupMemberships'
  | 'verifyUserPassword';

export type AppAction =
  | 'editProfile'
  | 'unset'
  | 'updateApp';

export type AppFeature =
  | 'testFeatures1'
  | 'testFeatures2';

export type AppliedGroupRule = {
  __typename?: 'AppliedGroupRule';
  adminNotes?: Maybe<Scalars['String']['output']>;
  config?: Maybe<GroupRuleBaseConfig>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  groupId: Scalars['ID']['output'];
  groupRuleId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  metadata?: Maybe<BaseModelMetadata>;
  subscribedToEvents: Array<GroupRuleEventType>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
};

export type AppliedGroupRuleInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  config?: InputMaybe<GroupRuleBaseConfigInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  groupId?: Scalars['ID']['input'];
  groupRuleId?: Scalars['ID']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  subscribedToEvents?: Array<GroupRuleEventType>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
};

export type AssetHostingService =
  | 's3'
  | 'unset';

export type AuthType =
  | 'hmac'
  | 'none'
  | 'oauth'
  | 'saml'
  | 'token';

export type BaseModel = {
  __typename?: 'BaseModel';
  adminNotes?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<BaseModelMetadata>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
};

export type BaseModelMetadata = {
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type BaseModelMetadataInput = {
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type BgAddChannelMessageEventInput = {
  channelId?: Scalars['ID']['input'];
  event?: ChannelMessageEvent;
  messageIds?: Array<Scalars['ID']['input']>;
  recipientId?: Scalars['ID']['input'];
};

export type BgChannelChangedEvent = {
  __typename?: 'BgChannelChangedEvent';
  channelId?: Maybe<Scalars['ID']['output']>;
  eventType: ChannelChangedEventType;
  invitationId?: Maybe<Scalars['ID']['output']>;
  messageId?: Maybe<Scalars['ID']['output']>;
  participantId?: Maybe<Scalars['ID']['output']>;
  requestId?: Maybe<Scalars['ID']['output']>;
  serviceRequest: ServiceRequest;
};

export type BgChannelParticipantMetadata = {
  __typename?: 'BgChannelParticipantMetadata';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  sentMessageCount?: Maybe<Scalars['Int']['output']>;
  unseenMessageCount?: Maybe<Scalars['Int']['output']>;
  unseenSystemMessageCount?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userHandle?: Maybe<Scalars['String']['output']>;
};

export type BgChannelStatus = {
  __typename?: 'BgChannelStatus';
  archivedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId: Scalars['ID']['output'];
};

export type BgChannelStatusInput = {
  archivedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type BgLatestUnseenChannelMessageInfo = {
  __typename?: 'BgLatestUnseenChannelMessageInfo';
  createdAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['ID']['output'];
};

export type BusinessExperience = {
  __typename?: 'BusinessExperience';
  adminNotes?: Maybe<Scalars['String']['output']>;
  businessName: Scalars['String']['output'];
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  /** If the experience is ongoing, endDate is null. */
  endDate?: Maybe<Scalars['DateTimeISO']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  jobTitle?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** If no start date is provided, startDate is null. */
  startDate?: Maybe<Scalars['DateTimeISO']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  userId: Scalars['ID']['output'];
};

export type BusinessExperienceInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  businessName?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  /** If the experience is ongoing, endDate is null. */
  endDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  startDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type Channel = {
  __typename?: 'Channel';
  adminNotes?: Maybe<Scalars['String']['output']>;
  archivedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  archivedBy?: Maybe<Scalars['ID']['output']>;
  assumedMentorId?: Maybe<Scalars['ID']['output']>;
  channelType: ChannelType;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  creator: User;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  invitations: Array<ChannelInvitation>;
  isArchivedForMe: Scalars['Boolean']['output'];
  latestMessage?: Maybe<ChannelMessage>;
  lockedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  lockedBy?: Maybe<Scalars['ID']['output']>;
  messages: Array<ChannelMessage>;
  metadata?: Maybe<ChannelMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  myContacts?: Maybe<Array<Contact>>;
  name?: Maybe<Scalars['String']['output']>;
  participants: Array<ChannelParticipant>;
  pausedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  pausedBy?: Maybe<Scalars['ID']['output']>;
  pendingInvitations: Array<ChannelInvitation>;
  status?: Maybe<BgChannelStatus>;
  statuses?: Maybe<Array<BgChannelStatus>>;
  suspendedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  suspendedBy?: Maybe<Scalars['ID']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  topic?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  userIds?: Maybe<Array<Scalars['ID']['output']>>;
};

export type ChannelChangedEventType =
  | 'channelDeleted'
  | 'channelUpdated'
  | 'invitationAccepted'
  | 'invitationCreated'
  | 'invitationDeclined'
  | 'invitationDeleted'
  | 'invitationUpdated'
  | 'messageCreated'
  | 'messageDeleted'
  | 'messageStatusChanged'
  | 'messageUpdated'
  | 'participantCreated'
  | 'participantDeleted'
  | 'participantUpdated';

export type ChannelInbox = {
  __typename?: 'ChannelInbox';
  invitations?: Maybe<Array<ChannelInboxItemInvitation>>;
  /** MD5 hash of all item IDs to check whether there are any new or removed items. */
  itemIdHash?: Maybe<Scalars['String']['output']>;
  latestArchivedMessages?: Maybe<Array<ChannelInboxItemMessage>>;
  /** List of the latest message of each channel */
  latestMessages?: Maybe<Array<ChannelInboxItemMessage>>;
  /** Invitations that the recipient has not accepted or rejected yet */
  pendingInvitations?: Maybe<Array<ChannelInboxItemInvitation>>;
  /** Messages in archived channels that the recipient has not seen yet */
  unseenArchivedMessages?: Maybe<Array<ChannelInboxItemMessage>>;
  /** Messages that the recipient has not seen yet */
  unseenMessages?: Maybe<Array<ChannelInboxItemMessage>>;
  /** Messages in system channels that the recipient has not seen yet */
  unseenSystemMessages?: Maybe<Array<ChannelInboxItemMessage>>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  userId: Scalars['ID']['output'];
};

export type ChannelInboxItemInvitation = {
  __typename?: 'ChannelInboxItemInvitation';
  channelId?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  messageText?: Maybe<Scalars['String']['output']>;
  readByRecipientAt?: Maybe<Scalars['DateTimeISO']['output']>;
  status: ChannelInvitationStatus;
};

export type ChannelInboxItemMessage = {
  __typename?: 'ChannelInboxItemMessage';
  channelId: Scalars['ID']['output'];
  channelMessageType?: Maybe<ChannelMessageType>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  isArchived?: Maybe<Scalars['Boolean']['output']>;
  messageText?: Maybe<Scalars['String']['output']>;
  replyToMessageId?: Maybe<Scalars['ID']['output']>;
  seenAt?: Maybe<Scalars['DateTimeISO']['output']>;
  senderAvatarUrl?: Maybe<Scalars['String']['output']>;
  senderFirstName?: Maybe<Scalars['String']['output']>;
  senderLastName?: Maybe<Scalars['String']['output']>;
  senderUserHandle?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
};

export type ChannelInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  archivedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  archivedBy?: InputMaybe<Scalars['ID']['input']>;
  assumedMentorId?: InputMaybe<Scalars['ID']['input']>;
  channelType?: InputMaybe<ChannelType>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  inviteUserIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pausedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  pausedBy?: InputMaybe<Scalars['ID']['input']>;
  statuses?: InputMaybe<Array<BgChannelStatusInput>>;
  suspendedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  suspendedBy?: InputMaybe<Scalars['ID']['input']>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: InputMaybe<Scalars['DateTimeISO']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  topic?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  userIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type ChannelInvitation = {
  __typename?: 'ChannelInvitation';
  adminNotes?: Maybe<Scalars['String']['output']>;
  channel: Channel;
  channelId?: Maybe<Scalars['ID']['output']>;
  channelName?: Maybe<Scalars['String']['output']>;
  channelTopic?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  declineReason?: Maybe<DeclineChannelInvitationReason>;
  declineReasonTextId?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  dismissedFromInboxByRecipientAt?: Maybe<Scalars['DateTimeISO']['output']>;
  dismissedFromInboxBySenderAt?: Maybe<Scalars['DateTimeISO']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  messageText?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2ConversationId?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. Mm2 message ID. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  readByRecipientAt?: Maybe<Scalars['DateTimeISO']['output']>;
  recipient?: Maybe<User>;
  recipientId: Scalars['ID']['output'];
  searchRank?: Maybe<Scalars['Int']['output']>;
  sender?: Maybe<User>;
  status: ChannelInvitationStatus;
  suspendedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  suspendedBy?: Maybe<Scalars['ID']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  userSearchId?: Maybe<Scalars['ID']['output']>;
};

export type ChannelInvitationDirection =
  | 'received'
  | 'sent';

export type ChannelInvitationInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  channelId?: InputMaybe<Scalars['ID']['input']>;
  channelName?: InputMaybe<Scalars['String']['input']>;
  channelTopic?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  declineReasonTextId?: InputMaybe<Scalars['String']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  dismissedFromInboxByRecipientAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  dismissedFromInboxBySenderAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  messageText?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2ConversationId?: InputMaybe<Scalars['String']['input']>;
  /** This attribute is only used by the MM2 synchronizer. Mm2 message ID. */
  mm2Id?: InputMaybe<Scalars['String']['input']>;
  readByRecipientAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  recipientId?: InputMaybe<Scalars['ID']['input']>;
  searchRank?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ChannelInvitationStatus>;
  suspendedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  suspendedBy?: InputMaybe<Scalars['ID']['input']>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  userSearchId?: InputMaybe<Scalars['ID']['input']>;
};

export type ChannelInvitationStatus =
  | 'accepted'
  | 'created'
  | 'declined'
  | 'unset';

export type ChannelListFilter = {
  caseSensitive?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  searchText?: InputMaybe<Scalars['String']['input']>;
  textSearchFields?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type ChannelMessage = {
  __typename?: 'ChannelMessage';
  adminNotes?: Maybe<Scalars['String']['output']>;
  channel: Channel;
  channelId: Scalars['ID']['output'];
  channelMessageType?: Maybe<ChannelMessageType>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  editedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  messageText?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<ChannelMessageMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2ConversationId?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. Mm2 message ID. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  replyToMessageId?: Maybe<Scalars['ID']['output']>;
  sender: User;
  statuses?: Maybe<Array<ChannelMessageStatus>>;
  suspendedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  suspendedBy?: Maybe<Scalars['ID']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
};

export type ChannelMessageEvent =
  | 'received'
  | 'seen'
  | 'unset';

export type ChannelMessageInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  channelId?: InputMaybe<Scalars['ID']['input']>;
  channelMessageType?: InputMaybe<ChannelMessageType>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  editedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  messageText?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2ConversationId?: InputMaybe<Scalars['String']['input']>;
  /** This attribute is only used by the MM2 synchronizer. Mm2 message ID. */
  mm2Id?: InputMaybe<Scalars['String']['input']>;
  replyToMessageId?: InputMaybe<Scalars['ID']['input']>;
  statuses?: InputMaybe<Array<ChannelMessageStatusInput>>;
  suspendedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  suspendedBy?: InputMaybe<Scalars['ID']['input']>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
};

export type ChannelMessageListFilter = {
  caseSensitive?: InputMaybe<Scalars['Boolean']['input']>;
  channelId?: InputMaybe<Scalars['ID']['input']>;
  createdAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  includeChannelMessageType?: InputMaybe<Array<ChannelMessageType>>;
  received?: InputMaybe<Scalars['Boolean']['input']>;
  receiverUserId?: InputMaybe<Scalars['ID']['input']>;
  replyToMessageId?: InputMaybe<Scalars['ID']['input']>;
  searchText?: InputMaybe<Scalars['String']['input']>;
  seen?: InputMaybe<Scalars['Boolean']['input']>;
  textSearchFields?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type ChannelMessageMetadata = {
  __typename?: 'ChannelMessageMetadata';
  senderAvatarUrl?: Maybe<Scalars['String']['output']>;
  senderFirstName?: Maybe<Scalars['String']['output']>;
  senderLastName?: Maybe<Scalars['String']['output']>;
  senderUserHandle?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type ChannelMessageStatus = {
  __typename?: 'ChannelMessageStatus';
  isInArchivedChannel?: Maybe<Scalars['Boolean']['output']>;
  receivedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  seenAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId: Scalars['ID']['output'];
};

export type ChannelMessageStatusInput = {
  receivedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  seenAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type ChannelMessageType =
  | 'invitation'
  | 'system'
  | 'unset';

export type ChannelMetadata = {
  __typename?: 'ChannelMetadata';
  channelInvitationAccepted: Scalars['Boolean']['output'];
  messagesSentByCreatorCount: Scalars['Int']['output'];
  messagesSentByFirstParticipantCount: Scalars['Int']['output'];
  unseenMessageInfo?: Maybe<Array<BgLatestUnseenChannelMessageInfo>>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type ChannelParticipant = {
  __typename?: 'ChannelParticipant';
  adminNotes?: Maybe<Scalars['String']['output']>;
  channel: Channel;
  channelId: Scalars['ID']['output'];
  channelName?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  invitedBy?: Maybe<Scalars['ID']['output']>;
  metadata?: Maybe<BgChannelParticipantMetadata>;
  myContact: Contact;
  role?: Maybe<ChannelParticipantRole>;
  suspendedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  suspendedBy?: Maybe<Scalars['ID']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  user: UserListItem;
  userId: Scalars['ID']['output'];
};

export type ChannelParticipantInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  channelId?: InputMaybe<Scalars['ID']['input']>;
  channelName?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  invitedBy?: InputMaybe<Scalars['ID']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  role?: InputMaybe<ChannelParticipantRole>;
  suspendedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  suspendedBy?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type ChannelParticipantRole =
  | 'admin'
  | 'moderator'
  | 'owner'
  | 'system'
  | 'unset';

export type ChannelType =
  | 'mentoring'
  | 'system'
  | 'unset';

export type ChannelsUserMetadata = {
  __typename?: 'ChannelsUserMetadata';
  mentoringSessionCount: Scalars['Int']['output'];
};

export type Company = {
  __typename?: 'Company';
  adminNotes?: Maybe<Scalars['String']['output']>;
  annualRevenue?: Maybe<Scalars['Int']['output']>;
  companyStage?: Maybe<CompanyStage>;
  companyStageTextId?: Maybe<Scalars['String']['output']>;
  companyType?: Maybe<CompanyType>;
  companyTypeTextId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  employeeCount?: Maybe<Scalars['Int']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  foundedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id: Scalars['ID']['output'];
  industries?: Maybe<Array<Scalars['String']['output']>>;
  isFundraising?: Maybe<Scalars['Boolean']['output']>;
  isOperational?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** If a Company was created from the imported from MM2, mm2CompanyRole is either "mentor" or "mentee". This attribute is only used by the MM2 synchronizer. */
  mm2CompanyRole?: Maybe<Scalars['String']['output']>;
  /** If a Company was created from the imported attributes of an MM2 Profile, mm2UserId references the MM2 user ID. This attribute is only used by the MM2 synchronizer. */
  mm2UserId?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  userIds?: Maybe<Array<Scalars['String']['output']>>;
  websites?: Maybe<Array<LabeledStringValue>>;
};

export type CompanyInput = {
  addUserIds?: InputMaybe<Array<Scalars['String']['input']>>;
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  annualRevenue?: InputMaybe<Scalars['Int']['input']>;
  companyStageTextId?: InputMaybe<Scalars['String']['input']>;
  companyTypeTextId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  employeeCount?: InputMaybe<Scalars['Int']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  foundedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  industries?: InputMaybe<Array<Scalars['String']['input']>>;
  isFundraising?: InputMaybe<Scalars['Boolean']['input']>;
  isOperational?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  websites?: InputMaybe<Array<LabeledStringValueInput>>;
};

export type CompanyStage = {
  __typename?: 'CompanyStage';
  adminNotes?: Maybe<Scalars['String']['output']>;
  childOptions?: Maybe<Array<Option>>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  isParent?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<UiLanguage>;
  /** Material icon name. Intended to be used by the Flutter app for the expertises and industries icons. */
  materialIconName?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2TextId?: Maybe<Scalars['String']['output']>;
  mm2Value?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm3TextId?: Maybe<Scalars['String']['output']>;
  optionType: OptionType;
  parentOption?: Maybe<Array<Option>>;
  parentTextId?: Maybe<Scalars['String']['output']>;
  supportedLanguages?: Maybe<Array<UiLanguage>>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  textId: Scalars['String']['output'];
  translatedDescription?: Maybe<Scalars['String']['output']>;
  translatedValue?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  value: Scalars['String']['output'];
};

export type CompanyType = {
  __typename?: 'CompanyType';
  adminNotes?: Maybe<Scalars['String']['output']>;
  childOptions?: Maybe<Array<Option>>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  isParent?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<UiLanguage>;
  /** Material icon name. Intended to be used by the Flutter app for the expertises and industries icons. */
  materialIconName?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2TextId?: Maybe<Scalars['String']['output']>;
  mm2Value?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm3TextId?: Maybe<Scalars['String']['output']>;
  optionType: OptionType;
  parentOption?: Maybe<Array<Option>>;
  parentTextId?: Maybe<Scalars['String']['output']>;
  supportedLanguages?: Maybe<Array<UiLanguage>>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  textId: Scalars['String']['output'];
  translatedDescription?: Maybe<Scalars['String']['output']>;
  translatedValue?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  value: Scalars['String']['output'];
};

export type Contact = {
  __typename?: 'Contact';
  adminNotes?: Maybe<Scalars['String']['output']>;
  archivedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  channelId?: Maybe<Scalars['ID']['output']>;
  contactTypes: Array<ContactType>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  favorite?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<ContactMetadata>;
  nickname?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  typeTextIds: Array<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  user: User;
  userId: Scalars['ID']['output'];
};

export type ContactInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  archivedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  channelId?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  favorite?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  typeTextIds?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type ContactListItem = {
  __typename?: 'ContactListItem';
  adminNotes?: Maybe<Scalars['String']['output']>;
  archivedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  channelId?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  favorite?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<ContactMetadata>;
  nickname?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  typeTextIds: Array<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  userId: Scalars['ID']['output'];
};

export type ContactMetadata = {
  __typename?: 'ContactMetadata';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userHandle?: Maybe<Scalars['String']['output']>;
};

export type ContactType = {
  __typename?: 'ContactType';
  adminNotes?: Maybe<Scalars['String']['output']>;
  childOptions?: Maybe<Array<Option>>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  isParent?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<UiLanguage>;
  /** Material icon name. Intended to be used by the Flutter app for the expertises and industries icons. */
  materialIconName?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2TextId?: Maybe<Scalars['String']['output']>;
  mm2Value?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm3TextId?: Maybe<Scalars['String']['output']>;
  optionType: OptionType;
  parentOption?: Maybe<Array<Option>>;
  parentTextId?: Maybe<Scalars['String']['output']>;
  supportedLanguages?: Maybe<Array<UiLanguage>>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  textId: Scalars['String']['output'];
  translatedDescription?: Maybe<Scalars['String']['output']>;
  translatedValue?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  value: Scalars['String']['output'];
};

export type ContentTag = {
  __typename?: 'ContentTag';
  adminNotes?: Maybe<Scalars['String']['output']>;
  allModerationConcerns?: Maybe<Array<ModerationConcern>>;
  approvedByRecipientAt?: Maybe<Scalars['DateTimeISO']['output']>;
  childContentTagType?: Maybe<ContentTagType>;
  childContentTagTypeTextId?: Maybe<Scalars['String']['output']>;
  contentModelType: ModelType;
  contentTagType?: Maybe<ContentTagType>;
  contentTagTypeTextId: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  dismissedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  /** ID of the admin user that dimsissed the tag. */
  dismissedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  messageText?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  moderationConcern?: Maybe<ModerationConcern>;
  objectId: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  /** ID of the user that created/owns the content referred to in this ContentTag. The ID of the user that created this ContentTag is stored in the createdBy field for ContentTags that were created by a user. */
  userId?: Maybe<Scalars['ID']['output']>;
  verifiedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  /** ID of the admin user that verified the tag. */
  verifiedBy?: Maybe<Scalars['ID']['output']>;
};

export type ContentTagInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  allModerationConcerns?: InputMaybe<Array<ModerationConcernInput>>;
  approvedByRecipientAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  childContentTagTypeTextId?: InputMaybe<Scalars['String']['input']>;
  contentModelType?: InputMaybe<ModelType>;
  contentTagTypeTextId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  dismissedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  /** ID of the admin user that dimsissed the tag. */
  dismissedBy?: InputMaybe<Scalars['ID']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  messageText?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  moderationConcern?: InputMaybe<ModerationConcernInput>;
  objectId?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  /** ID of the user that created/owns the content referred to in this ContentTag. The ID of the user that created this ContentTag is stored in the createdBy field for ContentTags that were created by a user. */
  userId?: InputMaybe<Scalars['ID']['input']>;
  verifiedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  /** ID of the admin user that verified the tag. */
  verifiedBy?: InputMaybe<Scalars['ID']['input']>;
};

export type ContentTagType = {
  __typename?: 'ContentTagType';
  addToTrustLevel?: Maybe<Scalars['Int']['output']>;
  adminNotes?: Maybe<Scalars['String']['output']>;
  childOptions?: Maybe<Array<Option>>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  isParent?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<UiLanguage>;
  /** Material icon name. Intended to be used by the Flutter app for the expertises and industries icons. */
  materialIconName?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2TextId?: Maybe<Scalars['String']['output']>;
  mm2Value?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm3TextId?: Maybe<Scalars['String']['output']>;
  optionType: OptionType;
  parentOption?: Maybe<Array<Option>>;
  parentTextId?: Maybe<Scalars['String']['output']>;
  supportedLanguages?: Maybe<Array<UiLanguage>>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  textId: Scalars['String']['output'];
  translatedDescription?: Maybe<Scalars['String']['output']>;
  translatedValue?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  value: Scalars['String']['output'];
};

export type Country = {
  __typename?: 'Country';
  adminNotes?: Maybe<Scalars['String']['output']>;
  alpha2Key: Scalars['String']['output'];
  alpha3Key: Scalars['String']['output'];
  childOptions?: Maybe<Array<Option>>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  isParent?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<UiLanguage>;
  /** Material icon name. Intended to be used by the Flutter app for the expertises and industries icons. */
  materialIconName?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2TextId?: Maybe<Scalars['String']['output']>;
  mm2Value?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm3TextId?: Maybe<Scalars['String']['output']>;
  optionType: OptionType;
  parentOption?: Maybe<Array<Option>>;
  parentTextId?: Maybe<Scalars['String']['output']>;
  phoneCode: Scalars['String']['output'];
  supportedLanguages?: Maybe<Array<UiLanguage>>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  textId: Scalars['String']['output'];
  translatedDescription?: Maybe<Scalars['String']['output']>;
  translatedValue?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  value: Scalars['String']['output'];
};

export type DeclineChannelInvitationReason = {
  __typename?: 'DeclineChannelInvitationReason';
  adminNotes?: Maybe<Scalars['String']['output']>;
  childOptions?: Maybe<Array<Option>>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  isParent?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<UiLanguage>;
  /** Material icon name. Intended to be used by the Flutter app for the expertises and industries icons. */
  materialIconName?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2TextId?: Maybe<Scalars['String']['output']>;
  mm2Value?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm3TextId?: Maybe<Scalars['String']['output']>;
  optionType: OptionType;
  parentOption?: Maybe<Array<Option>>;
  parentTextId?: Maybe<Scalars['String']['output']>;
  supportedLanguages?: Maybe<Array<UiLanguage>>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  textId: Scalars['String']['output'];
  translatedDescription?: Maybe<Scalars['String']['output']>;
  translatedValue?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  value: Scalars['String']['output'];
};

export type DeclineChannelInvitationReasonTextId =
  | 'fakeProfile'
  | 'inappropriate'
  | 'noReason'
  | 'notGoodFit'
  | 'tooBusy';

export type EducationLevel = {
  __typename?: 'EducationLevel';
  adminNotes?: Maybe<Scalars['String']['output']>;
  childOptions?: Maybe<Array<Option>>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  isParent?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<UiLanguage>;
  /** Material icon name. Intended to be used by the Flutter app for the expertises and industries icons. */
  materialIconName?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2TextId?: Maybe<Scalars['String']['output']>;
  mm2Value?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm3TextId?: Maybe<Scalars['String']['output']>;
  optionType: OptionType;
  parentOption?: Maybe<Array<Option>>;
  parentTextId?: Maybe<Scalars['String']['output']>;
  supportedLanguages?: Maybe<Array<UiLanguage>>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  textId: Scalars['String']['output'];
  translatedDescription?: Maybe<Scalars['String']['output']>;
  translatedValue?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  value: Scalars['String']['output'];
};

export type EndorsementWithTypes = {
  __typename?: 'EndorsementWithTypes';
  adminNotes?: Maybe<Scalars['String']['output']>;
  allModerationConcerns?: Maybe<Array<ModerationConcern>>;
  approvedByRecipientAt?: Maybe<Scalars['DateTimeISO']['output']>;
  childContentTagType?: Maybe<ContentTagType>;
  childContentTagTypeTextId?: Maybe<Scalars['String']['output']>;
  contentModelType: ModelType;
  contentTagType?: Maybe<ContentTagType>;
  contentTagTypeTextId: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  dismissedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  /** ID of the admin user that dimsissed the tag. */
  dismissedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  messageText?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  moderationConcern?: Maybe<ModerationConcern>;
  objectId: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  /** ID of the user that created/owns the content referred to in this ContentTag. The ID of the user that created this ContentTag is stored in the createdBy field for ContentTags that were created by a user. */
  userId?: Maybe<Scalars['ID']['output']>;
  verifiedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  /** ID of the admin user that verified the tag. */
  verifiedBy?: Maybe<Scalars['ID']['output']>;
};

export type ErrorCode =
  | 'academicExperienceNameMissing'
  | 'academicExperienceUserIdMissing'
  | 'alreadyExists'
  | 'alreadyGroupMember'
  | 'alreadyInitialized'
  | 'authTokenNoMatch'
  | 'businessExperienceNameMissing'
  | 'businessExperienceUserIdMissing'
  | 'companyNameMissing'
  | 'companyNameTaken'
  | 'contentTagAlreadyExist'
  | 'contentTagModelTypeMissing'
  | 'contentTagObjectIdMissing'
  | 'contentTagTypeMissing'
  | 'currentPasswordIncorrect'
  | 'currentPasswordMissing'
  | 'dataValidationFailed'
  | 'deviceUuidMissing'
  | 'emailInvalid'
  | 'emailMissing'
  | 'exceedsLimit'
  | 'expertiseBidirectionalMappingError'
  | 'expertiseTextIdDNE'
  | 'failedToConnect'
  | 'failedToCreateAccount'
  | 'failedToSignin'
  | 'failedToUpdate'
  | 'groupLevelTooDeep'
  | 'groupNameMissing'
  | 'groupNameTaken'
  | 'groupNotActive'
  | 'groupRuleFailed'
  | 'groupSlugMissing'
  | 'groupSlugTaken'
  | 'invalidInput'
  | 'invalidPushNotificationToken'
  | 'matchingEngineNameMissing'
  | 'matchingEngineNameTaken'
  | 'noLiveWebsocketConnectionAvailable'
  | 'noNotificationMethodAvailable'
  | 'notAGroupMember'
  | 'notAllowed'
  | 'notFound'
  | 'notImplemented'
  | 'notInitialized'
  | 'notSupported'
  | 'parentGroupNotFound'
  | 'passwordMissing'
  | 'passwordNoMatch'
  | 'phoneNumberInvalid'
  | 'phoneNumberMissing'
  | 'phoneNumberNotSupported'
  | 'serviceNotAvailable'
  | 'systemError'
  | 'timeout'
  | 'tooManyRequests'
  | 'trainingCannotUpdateFields'
  | 'trainingContentPageCannotUpdateFields'
  | 'trainingContentPageMm2IdMissing'
  | 'trainingContentPageMm2IdTaken'
  | 'trainingMm2IdMissing'
  | 'trainingMm2IdTaken'
  | 'trainingSessionCannotUpdateFields'
  | 'trainingSessionMm2IdMissing'
  | 'trainingSessionMm2IdTaken'
  | 'trainingSessionProgressInvalid'
  | 'trainingSessionTrainingMissing'
  | 'trainingSessionUserIdMissing'
  | 'unauthorized'
  | 'unknown'
  | 'userAlreadyExists'
  | 'userDeviceNotFound'
  | 'userNotActive'
  | 'userNotFound';

export type ErrorCodeOption = {
  __typename?: 'ErrorCodeOption';
  adminNotes?: Maybe<Scalars['String']['output']>;
  childOptions?: Maybe<Array<Option>>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  isParent?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<UiLanguage>;
  /** Material icon name. Intended to be used by the Flutter app for the expertises and industries icons. */
  materialIconName?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2TextId?: Maybe<Scalars['String']['output']>;
  mm2Value?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm3TextId?: Maybe<Scalars['String']['output']>;
  optionType: OptionType;
  parentOption?: Maybe<Array<Option>>;
  parentTextId?: Maybe<Scalars['String']['output']>;
  supportedLanguages?: Maybe<Array<UiLanguage>>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  textId: Scalars['String']['output'];
  translatedDescription?: Maybe<Scalars['String']['output']>;
  translatedValue?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  value: Scalars['String']['output'];
};

export type Expertise = {
  __typename?: 'Expertise';
  adminNotes?: Maybe<Scalars['String']['output']>;
  childExpertises?: Maybe<Array<Expertise>>;
  childOptions?: Maybe<Array<Option>>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  isParent?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<UiLanguage>;
  /** Material icon name. Intended to be used by the Flutter app for the expertises and industries icons. */
  materialIconName?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2TextId?: Maybe<Scalars['String']['output']>;
  mm2Value?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm3TextId?: Maybe<Scalars['String']['output']>;
  optionType: OptionType;
  parentExpertise?: Maybe<Expertise>;
  parentOption?: Maybe<Array<Option>>;
  parentTextId?: Maybe<Scalars['String']['output']>;
  supportedLanguages?: Maybe<Array<UiLanguage>>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  textId: Scalars['String']['output'];
  translatedDescription?: Maybe<Scalars['String']['output']>;
  translatedValue?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  value: Scalars['String']['output'];
};

export type FederatedIdentityProvider =
  | 'firebase'
  | 'none';

export type FindObjectsOptions = {
  allowPartialResults?: InputMaybe<Scalars['Boolean']['input']>;
  awaitData?: InputMaybe<Scalars['Boolean']['input']>;
  batchSize?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<IncludeFilterOption>;
  includeBlocked?: InputMaybe<IncludeFilterOption>;
  includeDeleted?: InputMaybe<IncludeFilterOption>;
  includeSuspended?: InputMaybe<IncludeFilterOption>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  maxAwaitTimeMS?: InputMaybe<Scalars['Int']['input']>;
  maxTimeMS?: InputMaybe<Scalars['Int']['input']>;
  noCursorTimeout?: InputMaybe<Scalars['Boolean']['input']>;
  returnKey?: InputMaybe<Scalars['Boolean']['input']>;
  showRecordId?: InputMaybe<Scalars['Boolean']['input']>;
  singleBatch?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SortItem>>;
  tailable?: InputMaybe<Scalars['Boolean']['input']>;
  timeout?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FindUserByIdentOptions = {
  includeDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  includeGroupProfiles?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type Gender = {
  __typename?: 'Gender';
  adminNotes?: Maybe<Scalars['String']['output']>;
  childOptions?: Maybe<Array<Option>>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  isParent?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<UiLanguage>;
  /** Material icon name. Intended to be used by the Flutter app for the expertises and industries icons. */
  materialIconName?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2TextId?: Maybe<Scalars['String']['output']>;
  mm2Value?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm3TextId?: Maybe<Scalars['String']['output']>;
  optionType: OptionType;
  parentOption?: Maybe<Array<Option>>;
  parentTextId?: Maybe<Scalars['String']['output']>;
  supportedLanguages?: Maybe<Array<UiLanguage>>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  textId: Scalars['String']['output'];
  translatedDescription?: Maybe<Scalars['String']['output']>;
  translatedValue?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  value: Scalars['String']['output'];
};

export type Group = {
  __typename?: 'Group';
  adminNotes?: Maybe<Scalars['String']['output']>;
  appliedGroupRules?: Maybe<Array<AppliedGroupRule>>;
  badgeName?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  embedded: Scalars['Boolean']['output'];
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  ident: Scalars['String']['output'];
  /** This is false for groups which are expected to continue using MM2. */
  isMigratedToMm3?: Maybe<Scalars['Boolean']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  isMm2Organization?: Maybe<Scalars['Boolean']['output']>;
  matchingEngineId?: Maybe<Scalars['ID']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  /** The URL which can be used to redirect a group to MM2. */
  mm2RedirectUrl?: Maybe<Scalars['String']['output']>;
  /** The domain name used by the MM3 deep links, if different from the default groups. */
  mm3DeepLinksUrl?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  parentGroupId?: Maybe<Scalars['ID']['output']>;
  planType?: Maybe<Scalars['String']['output']>;
  shortName: Scalars['String']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
};

export type GroupInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  appliedGroupRules?: InputMaybe<Array<AppliedGroupRuleInput>>;
  badgeName?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  embedded?: Scalars['Boolean']['input'];
  events?: InputMaybe<Array<ModelEventInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ident?: InputMaybe<Scalars['String']['input']>;
  matchingEngineId?: InputMaybe<Scalars['ID']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentGroupId?: InputMaybe<Scalars['ID']['input']>;
  planType?: InputMaybe<Scalars['String']['input']>;
  shortName?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
};

export type GroupListFilter = {
  caseSensitive?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
  embedded?: InputMaybe<Scalars['Boolean']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  searchText?: InputMaybe<Scalars['String']['input']>;
  syncedWithMm2?: InputMaybe<Scalars['Boolean']['input']>;
  textSearchFields?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type GroupMembership = IGroupMembership & {
  __typename?: 'GroupMembership';
  adminNotes?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  expertises: Array<Expertise>;
  groupId: Scalars['ID']['output'];
  groupIdent: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  industries: Array<Industry>;
  industry?: Maybe<Industry>;
  metadata?: Maybe<BaseModelMetadata>;
  roles: Array<GroupMembershipRole>;
  soughtExpertises: Array<Expertise>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  userId: Scalars['ID']['output'];
};

export type GroupMembershipInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  groupId?: InputMaybe<Scalars['ID']['input']>;
  groupIdent?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  roles?: InputMaybe<Array<GroupMembershipRole>>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type GroupMembershipListFilter = {
  caseSensitive?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
  embedded?: InputMaybe<Scalars['Boolean']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  roles?: InputMaybe<Array<GroupMembershipRole>>;
  searchText?: InputMaybe<Scalars['String']['input']>;
  textSearchFields?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type GroupMembershipRole =
  | 'admin'
  | 'coordinator'
  | 'moderator'
  | 'owner';

export type GroupRuleBaseConfig = {
  __typename?: 'GroupRuleBaseConfig';
  adminNotes?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<BaseModelMetadata>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  value: Scalars['String']['output'];
};

export type GroupRuleBaseConfigInput = {
  value?: Scalars['String']['input'];
};

export type GroupRuleEventType =
  | 'enterGroup'
  | 'exitGroup'
  | 'sendMessage'
  | 'signUp'
  | 'unknown'
  | 'updateUser'
  | 'userSearch';

export type GroupsUserMetadata = {
  __typename?: 'GroupsUserMetadata';
  groupCount: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type IGroupMembership = {
  groupId: Scalars['ID']['output'];
  groupIdent: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  roles: Array<GroupMembershipRole>;
  userId: Scalars['ID']['output'];
};

export type IdentityProvider =
  | 'apple'
  | 'facebook'
  | 'google'
  | 'instagram'
  | 'linkedIn'
  | 'microsoft'
  | 'own'
  | 'sso'
  | 'telegram'
  | 'twitter'
  | 'whatsApp';

export type IncludeFilterOption =
  | 'exclude'
  | 'include'
  | 'only';

export type Industry = {
  __typename?: 'Industry';
  adminNotes?: Maybe<Scalars['String']['output']>;
  childOptions?: Maybe<Array<Option>>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  isParent?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<UiLanguage>;
  /** Material icon name. Intended to be used by the Flutter app for the expertises and industries icons. */
  materialIconName?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2TextId?: Maybe<Scalars['String']['output']>;
  mm2Value?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm3TextId?: Maybe<Scalars['String']['output']>;
  optionType: OptionType;
  parentOption?: Maybe<Array<Option>>;
  parentTextId?: Maybe<Scalars['String']['output']>;
  supportedLanguages?: Maybe<Array<UiLanguage>>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  textId: Scalars['String']['output'];
  translatedDescription?: Maybe<Scalars['String']['output']>;
  translatedValue?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  value: Scalars['String']['output'];
};

/**
 *
 * This object contains the profile information describing an IQLAA user.
 *
 * IQLAA users are members of the "iqlaa" group, which comes with extra
 * profile attributes. These fields are used to store the user's
 * IQLAA-specific information.
 */
export type IqlaaGroupMembership = IGroupMembership & {
  __typename?: 'IqlaaGroupMembership';
  adminNotes?: Maybe<Scalars['String']['output']>;
  /** Date of birth */
  birthDate?: Maybe<Scalars['DateTimeISO']['output']>;
  /** (Optional) Business registration number */
  businessRegistrationNumber?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  expertises: Array<Expertise>;
  /** Fathers name */
  fatherName?: Maybe<Scalars['String']['output']>;
  groupId: Scalars['ID']['output'];
  groupIdent: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  industries: Array<Industry>;
  industry?: Maybe<Industry>;
  /** "Is your business a home-based business?" */
  isBusinessHomeBased?: Maybe<Scalars['Boolean']['output']>;
  /** "Is the Business/ Project registered in the Companies Control Department -Ministry of industries and trading?" */
  isBusinessRegisteredWithCCD?: Maybe<Scalars['Boolean']['output']>;
  /** Is the user a Jordan national? */
  isJordanNational?: Maybe<Scalars['Boolean']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  roles: Array<GroupMembershipRole>;
  soughtExpertises: Array<Expertise>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  userId: Scalars['ID']['output'];
};

export type IqlaaGroupMembershipInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  /** Date of birth */
  birthDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
  /** (Optional) Business registration number */
  businessRegistrationNumber?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  /** Fathers name */
  fatherName?: InputMaybe<Scalars['String']['input']>;
  groupId?: InputMaybe<Scalars['ID']['input']>;
  groupIdent?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** "Is your business a home-based business?" */
  isBusinessHomeBased?: InputMaybe<Scalars['Boolean']['input']>;
  /** "Is the Business/ Project registered in the Companies Control Department -Ministry of industries and trading?" */
  isBusinessRegisteredWithCCD?: InputMaybe<Scalars['Boolean']['input']>;
  /** Is the user a Jordan national? */
  isJordanNational?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  roles?: InputMaybe<Array<GroupMembershipRole>>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type IqlaaJordanianDistrict = {
  __typename?: 'IqlaaJordanianDistrict';
  adminNotes?: Maybe<Scalars['String']['output']>;
  childOptions?: Maybe<Array<Option>>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  isParent?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<UiLanguage>;
  /** Material icon name. Intended to be used by the Flutter app for the expertises and industries icons. */
  materialIconName?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2TextId?: Maybe<Scalars['String']['output']>;
  mm2Value?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm3TextId?: Maybe<Scalars['String']['output']>;
  optionType: OptionType;
  parentOption?: Maybe<Array<Option>>;
  parentTextId?: Maybe<Scalars['String']['output']>;
  supportedLanguages?: Maybe<Array<UiLanguage>>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  textId: Scalars['String']['output'];
  translatedDescription?: Maybe<Scalars['String']['output']>;
  translatedValue?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  value: Scalars['String']['output'];
};

export type IqlaaJordanianGovernorate = {
  __typename?: 'IqlaaJordanianGovernorate';
  adminNotes?: Maybe<Scalars['String']['output']>;
  childOptions?: Maybe<Array<Option>>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  isParent?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<UiLanguage>;
  /** Material icon name. Intended to be used by the Flutter app for the expertises and industries icons. */
  materialIconName?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2TextId?: Maybe<Scalars['String']['output']>;
  mm2Value?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm3TextId?: Maybe<Scalars['String']['output']>;
  optionType: OptionType;
  parentOption?: Maybe<Array<Option>>;
  parentTextId?: Maybe<Scalars['String']['output']>;
  supportedLanguages?: Maybe<Array<UiLanguage>>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  textId: Scalars['String']['output'];
  translatedDescription?: Maybe<Scalars['String']['output']>;
  translatedValue?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  value: Scalars['String']['output'];
};

export type LabeledStringValue = {
  __typename?: 'LabeledStringValue';
  label?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  value: Scalars['String']['output'];
};

export type LabeledStringValueInput = {
  label?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type Language = {
  __typename?: 'Language';
  adminNotes?: Maybe<Scalars['String']['output']>;
  childOptions?: Maybe<Array<Option>>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  isParent?: Maybe<Scalars['Boolean']['output']>;
  /** Right to left text flow. */
  isRtl?: Maybe<Scalars['Boolean']['output']>;
  isUiLanguage: Scalars['Boolean']['output'];
  language?: Maybe<UiLanguage>;
  /** ISO 639-2, 3 letter language code. e.g. "eng" for English. */
  longLangCode?: Maybe<Scalars['String']['output']>;
  /** Material icon name. Intended to be used by the Flutter app for the expertises and industries icons. */
  materialIconName?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2TextId?: Maybe<Scalars['String']['output']>;
  mm2Value?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm3TextId?: Maybe<Scalars['String']['output']>;
  optionType: OptionType;
  parentOption?: Maybe<Array<Option>>;
  parentTextId?: Maybe<Scalars['String']['output']>;
  /** ISO 639-1, 2 letter language code. e.g. "en" for English. */
  shortLangCode?: Maybe<Scalars['String']['output']>;
  supportedLanguages?: Maybe<Array<UiLanguage>>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  textId: Scalars['String']['output'];
  translatedDescription?: Maybe<Scalars['String']['output']>;
  translatedValue?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  value: Scalars['String']['output'];
};

/**
 *
 * This object contains the profile information describing a mentee/entrepreneur/business owner.
 *
 * Users with User.seeksHelp are members of the "mentees" group, which comes with extra
 * profile attributes. This is one of the 'embedded' group memberships that are available
 * through User.groupMemberships.
 */
export type MenteesGroupMembership = IGroupMembership & {
  __typename?: 'MenteesGroupMembership';
  /** From MM2, not used in MM3 (yet) */
  actionsTaken?: Maybe<Scalars['String']['output']>;
  /** Must match expertise textIds. */
  additionalSoughtExpertisesTextIds?: Maybe<Array<Scalars['String']['output']>>;
  adminNotes?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  /** From MM2, not used in MM3 (yet) */
  currentChallenges?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  expertises: Array<Expertise>;
  /** From MM2, not used in MM3 (yet) */
  futureGoals?: Maybe<Scalars['String']['output']>;
  groupId: Scalars['ID']['output'];
  groupIdent: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  industries: Array<Industry>;
  industry?: Maybe<Industry>;
  /** Must match industry textIds. */
  industryTextId?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** Must match mm2 industry textIds -- only used by synchronizer */
  mm2IndustryTextId?: Maybe<Scalars['String']['output']>;
  /** Must match mm2 expertise textIds -- only used by synchronizer */
  mm2SoughtExpertisesTextIds?: Maybe<Array<Scalars['String']['output']>>;
  /** From MM2, not used in MM3 (yet) */
  motivationsForMentorship?: Maybe<Scalars['String']['output']>;
  reasonsForStartingBusiness?: Maybe<Scalars['String']['output']>;
  roles: Array<GroupMembershipRole>;
  soughtExpertises: Array<Expertise>;
  /** Must match expertise textIds. */
  soughtExpertisesTextIds?: Maybe<Array<Scalars['String']['output']>>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  userId: Scalars['ID']['output'];
};

export type MenteesGroupMembershipInput = {
  actionsTaken?: InputMaybe<Scalars['String']['input']>;
  /** Must match expertise textIds. */
  additionalSoughtExpertisesTextIds?: InputMaybe<Array<Scalars['String']['input']>>;
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  /** From MM2, not used in MM3 (yet) */
  currentChallenges?: InputMaybe<Scalars['String']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  /** From MM2, not used in MM3 (yet) */
  futureGoals?: InputMaybe<Scalars['String']['input']>;
  groupId?: InputMaybe<Scalars['ID']['input']>;
  groupIdent?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Must match industry textId. */
  industryTextId?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  /** Must match mm2 industry textIds -- only used by synchronizer */
  mm2IndustryTextId?: InputMaybe<Scalars['String']['input']>;
  /** Must match mm2 expertise textIds -- only used by synchronizer */
  mm2SoughtExpertisesTextIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** From MM2, not used in MM3 (yet) */
  motivationsForMentorship?: InputMaybe<Scalars['String']['input']>;
  reasonsForStartingBusiness?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<GroupMembershipRole>>;
  /** Must match expertise textIds. */
  soughtExpertisesTextIds?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type MentorsGroupMembership = IGroupMembership & {
  __typename?: 'MentorsGroupMembership';
  /** Must match expertise textIds. */
  additionalExpertisesTextIds?: Maybe<Array<Scalars['String']['output']>>;
  adminNotes?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  endorsements?: Maybe<Scalars['Int']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  expectationsForMentees?: Maybe<Scalars['String']['output']>;
  expertises: Array<Expertise>;
  /** Must match expertise textIds. */
  expertisesTextIds?: Maybe<Array<Scalars['String']['output']>>;
  groupId: Scalars['ID']['output'];
  groupIdent: Scalars['String']['output'];
  helpICanOffer?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  industries: Array<Industry>;
  /** Must match industry textIds. */
  industriesTextIds?: Maybe<Array<Scalars['String']['output']>>;
  industry?: Maybe<Industry>;
  menteePreparationInstructions?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** Must match mm2 expertise textIds -- only used by synchronizer */
  mm2ExpertisesTextIds?: Maybe<Array<Scalars['String']['output']>>;
  /** Must match mm2 industry textIds -- only used by synchronizer */
  mm2IndustriesTextIds?: Maybe<Array<Scalars['String']['output']>>;
  reasonsForMentoring?: Maybe<Scalars['String']['output']>;
  roles: Array<GroupMembershipRole>;
  soughtExpertises: Array<Expertise>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  userId: Scalars['ID']['output'];
};

export type MentorsGroupMembershipInput = {
  /** Must match expertise textIds. */
  additionalExpertisesTextIds?: InputMaybe<Array<Scalars['String']['input']>>;
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  endorsements?: InputMaybe<Scalars['Int']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  expectationsForMentees?: InputMaybe<Scalars['String']['input']>;
  /** Must match expertise textIds. */
  expertisesTextIds?: InputMaybe<Array<Scalars['String']['input']>>;
  groupId?: InputMaybe<Scalars['ID']['input']>;
  groupIdent?: InputMaybe<Scalars['String']['input']>;
  helpICanOffer?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Must match industry textIds. */
  industriesTextIds?: InputMaybe<Array<Scalars['String']['input']>>;
  menteePreparationInstructions?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  /** Must match mm2 expertise textIds -- only used by synchronizer */
  mm2ExpertisesTextIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Must match mm2 industry textIds -- only used by synchronizer */
  mm2IndustriesTextIds?: InputMaybe<Array<Scalars['String']['input']>>;
  reasonsForMentoring?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<GroupMembershipRole>>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type ModelEvent = {
  __typename?: 'ModelEvent';
  message: Scalars['String']['output'];
  modelEventType: ModelEventType;
  time: Scalars['DateTimeISO']['output'];
};

export type ModelEventInput = {
  message?: Scalars['String']['input'];
  modelEventType?: ModelEventType;
  time?: Scalars['DateTimeISO']['input'];
};

export type ModelEventType =
  | 'error'
  | 'info'
  | 'warning';

export type ModelType =
  | 'AcademicExperience'
  | 'AdminTask'
  | 'ApiAuthInfo'
  | 'AppliedGroupRule'
  | 'BusinessExperience'
  | 'Channel'
  | 'ChannelInbox'
  | 'ChannelInvitation'
  | 'ChannelMessage'
  | 'ChannelParticipant'
  | 'Company'
  | 'Contact'
  | 'ContentTag'
  | 'Group'
  | 'GroupMembership'
  | 'GroupRule'
  | 'GroupRuleConfig'
  | 'Match'
  | 'MatchProfile'
  | 'MatchingEngine'
  | 'MentorBoard'
  | 'MentoringSession'
  | 'Mm2Integration'
  | 'Mm2Synchronization'
  | 'Mm2SynchronizationResultItem'
  | 'ModerationConcern'
  | 'MultiStepAction'
  | 'Notification'
  | 'NotificationTemplate'
  | 'Option'
  | 'ServiceRequest'
  | 'Training'
  | 'TrainingContentPage'
  | 'TrainingSession'
  | 'UploadedAsset'
  | 'User'
  | 'UserDevice'
  | 'UserInbox'
  | 'UserMetadata'
  | 'UserPreferences'
  | 'UserSearch'
  | 'unset';

export type ModerationConcern = {
  __typename?: 'ModerationConcern';
  adminNotes?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  /** delete the content, if a match is found; default = false */
  deleteContent?: Maybe<Scalars['Boolean']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  /** must match with capitalization; ignored if isRegex = true; default = true */
  isCaseSensitive?: Maybe<Scalars['Boolean']['output']>;
  /** default = false */
  isCompanyNameOfBadActor?: Maybe<Scalars['Boolean']['output']>;
  /** default = false */
  isEmailOfBadActor?: Maybe<Scalars['Boolean']['output']>;
  /** default = false */
  isNameOfBadActor?: Maybe<Scalars['Boolean']['output']>;
  /** default = false */
  isPhoneNumberOfBadActor?: Maybe<Scalars['Boolean']['output']>;
  /** value is a regex expression without flags; default = false */
  isRegex?: Maybe<Scalars['Boolean']['output']>;
  /** default = false */
  isWebsiteOfBadActor?: Maybe<Scalars['Boolean']['output']>;
  /** only matches full words; ignored if isRegex = true; default = false */
  isWord?: Maybe<Scalars['Boolean']['output']>;
  languageTextId?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  moderationConcernType: ModerationConcernType;
  name?: Maybe<Scalars['String']['output']>;
  /** number of points to reduce a users trustLevel, if found */
  trustLevelImpact?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  value: Scalars['String']['output'];
  version?: Maybe<Scalars['String']['output']>;
};

export type ModerationConcernInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  /** delete the content, if a match is found; default = false */
  deleteContent?: InputMaybe<Scalars['Boolean']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** must match with capitalization; ignored if isRegex = true; default = true */
  isCaseSensitive?: InputMaybe<Scalars['Boolean']['input']>;
  /** default = false */
  isCompanyNameOfBadActor?: InputMaybe<Scalars['Boolean']['input']>;
  /** default = false */
  isEmailOfBadActor?: InputMaybe<Scalars['Boolean']['input']>;
  /** default = false */
  isNameOfBadActor?: InputMaybe<Scalars['Boolean']['input']>;
  /** default = false */
  isPhoneNumberOfBadActor?: InputMaybe<Scalars['Boolean']['input']>;
  /** value is a regex expression without flags; default = false */
  isRegex?: InputMaybe<Scalars['Boolean']['input']>;
  /** default = false */
  isWebsiteOfBadActor?: InputMaybe<Scalars['Boolean']['input']>;
  /** only matches full words; ignored if isRegex = true; default = true */
  isWord?: InputMaybe<Scalars['Boolean']['input']>;
  languageTextId?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  moderationConcernType?: ModerationConcernType;
  name?: InputMaybe<Scalars['String']['input']>;
  /** number of points to reduce a users trustLevel, if found */
  trustLevelImpact?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type ModerationConcernType =
  | 'phrase'
  | 'unknown';

export type MultiStepActionError = {
  __typename?: 'MultiStepActionError';
  adminNotes?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  message: Scalars['String']['output'];
  messageId: Scalars['String']['output'];
  metadata?: Maybe<BaseModelMetadata>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
};

export type MultiStepActionErrorInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  messageId?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
};

export type MultiStepActionResult =
  | 'confirmTokenMismatch'
  | 'dataValidationFailed'
  | 'deviceNotFound'
  | 'emailMismatch'
  | 'emailNotVerified'
  | 'error'
  | 'expired'
  | 'invalidEmail'
  | 'missingEmail'
  | 'missingPhoneNumber'
  | 'notFound'
  | 'ok'
  | 'passed'
  | 'passwordMismatch'
  | 'passwordUpdated'
  | 'phoneNumberInvalid'
  | 'phoneNumberMismatch'
  | 'phoneNumberNotVerified'
  | 'systemError'
  | 'unset'
  | 'userFailedValidation'
  | 'userNotFound'
  | 'userNotSignedIn';

export type MultiStepActionSendNotificationResult =
  | 'failed'
  | 'ok'
  | 'phoneNumberInvalid';

export type MultiStepActionStatus =
  | 'created'
  | 'finished'
  | 'started';

export type MultiStepActionType =
  | 'resetPassword'
  | 'tokenSignIn'
  | 'unset'
  | 'updateEmail'
  | 'updatePassword'
  | 'updatePhoneNumber'
  | 'verifyEmail'
  | 'verifyPhoneNumber'
  | 'verifyPhoneSignupOnSignup';

export type Mutation = {
  __typename?: 'Mutation';
  acceptChannelInvitation: Scalars['String']['output'];
  addChannelMessageEvent: Scalars['String']['output'];
  addUserToGroup: ServiceRequest;
  archiveChannelForMe: Scalars['String']['output'];
  /** Block a user from the current user; deprecated, use blockUserV2 */
  blockUser: Scalars['String']['output'];
  blockUserForMe: Scalars['String']['output'];
  blockUserForMeV2: ServiceRequest;
  blockUserV2: ServiceRequest;
  createAcademicExperience: AcademicExperience;
  createAdminTask: AdminTask;
  createBusinessExperience: BusinessExperience;
  createChannel: Channel;
  createChannelInvitation: ChannelInvitation;
  createChannelMessage: ChannelMessage;
  createChannelParticipant: ChannelParticipant;
  createCompany: Company;
  createContact: Contact;
  createContentTag: ContentTag;
  createGroup: Group;
  createGroupMembership: ServiceRequest;
  createMenteesGroupMembership: ServiceRequest;
  createMentorsGroupMembership: ServiceRequest;
  createMultiStepAction: SidMultiStepActionProgress;
  createNotification: Notification;
  createNotificationTemplate: NotificationTemplate;
  createOneTimeAuthTokenForMe: Scalars['String']['output'];
  createUploadedAsset: UploadedAsset;
  createUserDevice: UserDeviceWithoutAuth;
  createUserSearch: UserSearch;
  declineChannelInvitation: Scalars['String']['output'];
  deleteAcademicExperience: ServiceRequest;
  deleteAdminTask: ServiceRequest;
  deleteBusinessExperience: ServiceRequest;
  deleteChannel: Scalars['String']['output'];
  deleteChannelInvitation: Scalars['String']['output'];
  deleteChannelMessage: Scalars['String']['output'];
  deleteChannelParticipant: Scalars['String']['output'];
  deleteCompany: ServiceRequest;
  deleteContentTag: ServiceRequest;
  deleteGroup: ServiceRequest;
  deleteGroupMembership: Scalars['String']['output'];
  deleteNotification: Scalars['String']['output'];
  deleteNotificationTemplate: Scalars['String']['output'];
  deleteUploadedAsset: UploadedAsset;
  deleteUser: Scalars['String']['output'];
  deleteUserSearch: ServiceRequest;
  dismissChannelInvitationFromInbox: Scalars['String']['output'];
  endMySession: Scalars['String']['output'];
  findAndUpdateAllMm2Users: Scalars['Boolean']['output'];
  initAssetUpload: UploadedAsset;
  markChannelMessagesAsSeenByMe: Scalars['String']['output'];
  markInAppMessageReceived: Scalars['String']['output'];
  removeUserFromGroup: Scalars['String']['output'];
  reportUser: ContentTag;
  runAdminTask: ServiceRequest;
  sendMultiStepActionNotification: Scalars['String']['output'];
  signInOauthUser: UserAuthResponse;
  signInUser: UserAuthResponse;
  signMeOut: Scalars['String']['output'];
  signUpUser: UserAuthResponse;
  startMySession: Scalars['String']['output'];
  startResetPassword: SidMultiStepActionProgress;
  startVerifyEmail: SidMultiStepActionProgress;
  startVerifyPhoneNumber: SidMultiStepActionProgress;
  unarchiveChannelForMe: Scalars['String']['output'];
  /** Unblock a user from the current user; deprecated, use unblockUserV2 */
  unblockUser: Scalars['String']['output'];
  /** Unblock a user from the current user; deprecated, use unblockUserForMeV2 */
  unblockUserForMe: Scalars['String']['output'];
  unblockUserForMeV2: ServiceRequest;
  unblockUserV2: ServiceRequest;
  updateAcademicExperience: ServiceRequest;
  updateAdminTask: AdminTask;
  updateBusinessExperience: ServiceRequest;
  updateChannel: Scalars['String']['output'];
  updateChannelInvitation: Scalars['String']['output'];
  updateChannelMessage: Scalars['String']['output'];
  updateChannelParticipant: Scalars['String']['output'];
  updateCompany: ServiceRequest;
  updateContact: Scalars['String']['output'];
  updateContentTag: ServiceRequest;
  updateGroup: ServiceRequest;
  updateGroupMembership: ServiceRequest;
  updateIqlaaGroupMembership: ServiceRequest;
  updateMenteesGroupMembership: ServiceRequest;
  updateMentorsGroupMembership: ServiceRequest;
  updateNotification: Scalars['String']['output'];
  updateNotificationTemplate: Scalars['String']['output'];
  updateUploadedAsset: Scalars['String']['output'];
  updateUser: Scalars['String']['output'];
  updateUserDevice: Scalars['String']['output'];
  updateUserSearch: ServiceRequest;
  verifyMultiStepActionToken: SidMultiStepActionProgress;
  verifyOneTimeAuthToken: Scalars['Boolean']['output'];
};


export type MutationAcceptChannelInvitationArgs = {
  channelInvitationId: Scalars['String']['input'];
};


export type MutationAddChannelMessageEventArgs = {
  input: BgAddChannelMessageEventInput;
};


export type MutationAddUserToGroupArgs = {
  groupId?: InputMaybe<Scalars['String']['input']>;
  groupIdent?: InputMaybe<Scalars['String']['input']>;
  roles: Array<GroupMembershipRole>;
  userId: Scalars['String']['input'];
};


export type MutationArchiveChannelForMeArgs = {
  channelId: Scalars['String']['input'];
};


export type MutationBlockUserArgs = {
  input: UserBlockInput;
};


export type MutationBlockUserForMeArgs = {
  notes?: InputMaybe<Scalars['String']['input']>;
  reasonTextId?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
};


export type MutationBlockUserForMeV2Args = {
  notes?: InputMaybe<Scalars['String']['input']>;
  reasonTextId?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
};


export type MutationBlockUserV2Args = {
  input: UserBlockInput;
};


export type MutationCreateAcademicExperienceArgs = {
  input: AcademicExperienceInput;
};


export type MutationCreateAdminTaskArgs = {
  adminTaskInput: AdminTaskInput;
};


export type MutationCreateBusinessExperienceArgs = {
  input: BusinessExperienceInput;
};


export type MutationCreateChannelArgs = {
  input: ChannelInput;
};


export type MutationCreateChannelInvitationArgs = {
  input: ChannelInvitationInput;
};


export type MutationCreateChannelMessageArgs = {
  input: ChannelMessageInput;
};


export type MutationCreateChannelParticipantArgs = {
  input: ChannelParticipantInput;
};


export type MutationCreateCompanyArgs = {
  input: CompanyInput;
};


export type MutationCreateContactArgs = {
  input: ContactInput;
};


export type MutationCreateContentTagArgs = {
  input: ContentTagInput;
};


export type MutationCreateGroupArgs = {
  input: GroupInput;
};


export type MutationCreateGroupMembershipArgs = {
  input: GroupMembershipInput;
};


export type MutationCreateMenteesGroupMembershipArgs = {
  input: MenteesGroupMembershipInput;
};


export type MutationCreateMentorsGroupMembershipArgs = {
  input: MentorsGroupMembershipInput;
};


export type MutationCreateMultiStepActionArgs = {
  input: SidMultiStepActionInput;
};


export type MutationCreateNotificationArgs = {
  notificationInput: NotificationInput;
};


export type MutationCreateNotificationTemplateArgs = {
  notificationTemplateInput: NotificationTemplateInput;
};


export type MutationCreateUploadedAssetArgs = {
  input: UploadedAssetInput;
};


export type MutationCreateUserDeviceArgs = {
  input: UserDeviceInput;
};


export type MutationCreateUserSearchArgs = {
  input: UserSearchInput;
};


export type MutationDeclineChannelInvitationArgs = {
  channelInvitationId: Scalars['String']['input'];
  reasonTextId: DeclineChannelInvitationReasonTextId;
};


export type MutationDeleteAcademicExperienceArgs = {
  academicExperienceId: Scalars['String']['input'];
  deletePhysically: Scalars['Boolean']['input'];
};


export type MutationDeleteAdminTaskArgs = {
  adminTaskId: Scalars['String']['input'];
  deletePhysically: Scalars['Boolean']['input'];
};


export type MutationDeleteBusinessExperienceArgs = {
  businessExperienceId: Scalars['String']['input'];
  deletePhysically: Scalars['Boolean']['input'];
};


export type MutationDeleteChannelArgs = {
  channelId: Scalars['String']['input'];
  deletePhysically: Scalars['Boolean']['input'];
};


export type MutationDeleteChannelInvitationArgs = {
  channelInvitationId: Scalars['String']['input'];
  deletePhysically: Scalars['Boolean']['input'];
};


export type MutationDeleteChannelMessageArgs = {
  channelMessageId: Scalars['String']['input'];
  deletePhysically: Scalars['Boolean']['input'];
};


export type MutationDeleteChannelParticipantArgs = {
  channelParticipantId: Scalars['String']['input'];
  deletePhysically: Scalars['Boolean']['input'];
};


export type MutationDeleteCompanyArgs = {
  companyId: Scalars['String']['input'];
  deletePhysically: Scalars['Boolean']['input'];
};


export type MutationDeleteContentTagArgs = {
  contentTagId: Scalars['String']['input'];
  deletePhysically: Scalars['Boolean']['input'];
};


export type MutationDeleteGroupArgs = {
  deletePhysically: Scalars['Boolean']['input'];
  groupId: Scalars['String']['input'];
};


export type MutationDeleteGroupMembershipArgs = {
  deletePhysically: Scalars['Boolean']['input'];
  groupMembershipId: Scalars['String']['input'];
};


export type MutationDeleteNotificationArgs = {
  deletePhysically: Scalars['Boolean']['input'];
  notificationId: Scalars['String']['input'];
};


export type MutationDeleteNotificationTemplateArgs = {
  deletePhysically: Scalars['Boolean']['input'];
  notificationTemplateId: Scalars['String']['input'];
};


export type MutationDeleteUploadedAssetArgs = {
  deletePhysically: Scalars['Boolean']['input'];
  id: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  deletePhysically: Scalars['Boolean']['input'];
  userId: Scalars['String']['input'];
};


export type MutationDeleteUserSearchArgs = {
  deletePhysically: Scalars['Boolean']['input'];
  userSearchId: Scalars['String']['input'];
};


export type MutationDismissChannelInvitationFromInboxArgs = {
  channelInvitationId: Scalars['String']['input'];
};


export type MutationEndMySessionArgs = {
  deviceUuid: Scalars['String']['input'];
};


export type MutationInitAssetUploadArgs = {
  input: UploadedAssetInput;
};


export type MutationMarkChannelMessagesAsSeenByMeArgs = {
  channelId: Scalars['String']['input'];
};


export type MutationMarkInAppMessageReceivedArgs = {
  actionTaken: AppAction;
  notificationId: Scalars['String']['input'];
};


export type MutationRemoveUserFromGroupArgs = {
  force: Scalars['Boolean']['input'];
  groupId?: InputMaybe<Scalars['String']['input']>;
  groupIdent?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
};


export type MutationReportUserArgs = {
  input: ReportUserInput;
};


export type MutationRunAdminTaskArgs = {
  adminTaskId: Scalars['String']['input'];
};


export type MutationSendMultiStepActionNotificationArgs = {
  input: SendMultiStepActionNotificationInput;
};


export type MutationSignInOauthUserArgs = {
  input: SignInOauthUserInput;
};


export type MutationSignInUserArgs = {
  input: SignInUserInput;
};


export type MutationSignUpUserArgs = {
  input: SignUpUserInput;
};


export type MutationStartMySessionArgs = {
  deviceUuid: Scalars['String']['input'];
  pushNotificationToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationStartResetPasswordArgs = {
  input: UserIdentInput;
};


export type MutationStartVerifyEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationStartVerifyPhoneNumberArgs = {
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUnarchiveChannelForMeArgs = {
  channelId: Scalars['String']['input'];
};


export type MutationUnblockUserArgs = {
  blockedByUserId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationUnblockUserForMeArgs = {
  userId: Scalars['String']['input'];
};


export type MutationUnblockUserForMeV2Args = {
  userId: Scalars['String']['input'];
};


export type MutationUnblockUserV2Args = {
  blockedByUserId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationUpdateAcademicExperienceArgs = {
  input: AcademicExperienceInput;
};


export type MutationUpdateAdminTaskArgs = {
  adminTaskInput: AdminTaskInput;
};


export type MutationUpdateBusinessExperienceArgs = {
  input: BusinessExperienceInput;
};


export type MutationUpdateChannelArgs = {
  input: ChannelInput;
};


export type MutationUpdateChannelInvitationArgs = {
  input: ChannelInvitationInput;
};


export type MutationUpdateChannelMessageArgs = {
  input: ChannelMessageInput;
};


export type MutationUpdateChannelParticipantArgs = {
  input: ChannelParticipantInput;
};


export type MutationUpdateCompanyArgs = {
  input: CompanyInput;
};


export type MutationUpdateContactArgs = {
  input: ContactInput;
};


export type MutationUpdateContentTagArgs = {
  input: ContentTagInput;
};


export type MutationUpdateGroupArgs = {
  input: GroupInput;
};


export type MutationUpdateGroupMembershipArgs = {
  input: GroupMembershipInput;
};


export type MutationUpdateIqlaaGroupMembershipArgs = {
  input: IqlaaGroupMembershipInput;
};


export type MutationUpdateMenteesGroupMembershipArgs = {
  input: MenteesGroupMembershipInput;
};


export type MutationUpdateMentorsGroupMembershipArgs = {
  input: MentorsGroupMembershipInput;
};


export type MutationUpdateNotificationArgs = {
  notificationInput: NotificationInput;
};


export type MutationUpdateNotificationTemplateArgs = {
  notificationTemplateInput: NotificationTemplateInput;
};


export type MutationUpdateUploadedAssetArgs = {
  input: UploadedAssetInput;
};


export type MutationUpdateUserArgs = {
  input: UserInput;
};


export type MutationUpdateUserDeviceArgs = {
  input: UserDeviceInput;
};


export type MutationUpdateUserSearchArgs = {
  input: UserSearchInput;
};


export type MutationVerifyMultiStepActionTokenArgs = {
  input: VerifyMultiStepActionTokenInput;
};


export type MutationVerifyOneTimeAuthTokenArgs = {
  input: VerifyOneTimeAuthTokenInput;
};

export type Notification = {
  __typename?: 'Notification';
  action0?: Maybe<AppAction>;
  action1?: Maybe<AppAction>;
  action2?: Maybe<AppAction>;
  actionTaken?: Maybe<AppAction>;
  adminNotes?: Maybe<Scalars['String']['output']>;
  appLink: Scalars['String']['output'];
  context?: Maybe<NotificationContext>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  emailSendReport: Scalars['String']['output'];
  emailSentAt?: Maybe<Scalars['DateTimeISO']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  htmlMessage: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  inAppMessageReceivedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  inAppMessageSentAt?: Maybe<Scalars['DateTimeISO']['output']>;
  initiatorId: Scalars['ID']['output'];
  isTranslated?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<UiLanguage>;
  messageText: Scalars['String']['output'];
  metadata?: Maybe<BaseModelMetadata>;
  multiStepActionId: Scalars['ID']['output'];
  notificationType: NotificationType;
  pushNotificationSendReport: Scalars['String']['output'];
  pushNotificationSentAt?: Maybe<Scalars['DateTimeISO']['output']>;
  recipientId: Scalars['ID']['output'];
  replyingToId: Scalars['ID']['output'];
  sendEmail: Scalars['Boolean']['output'];
  sendInAppMessage: Scalars['Boolean']['output'];
  sendPushNotification: Scalars['Boolean']['output'];
  sendSms: Scalars['Boolean']['output'];
  sentMessagesCount: Scalars['Int']['output'];
  shortMessageText: Scalars['String']['output'];
  smsSendReport: Scalars['String']['output'];
  smsSentAt?: Maybe<Scalars['DateTimeISO']['output']>;
  templateId: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
};

export type NotificationContext = {
  __typename?: 'NotificationContext';
  appLink?: Maybe<Scalars['String']['output']>;
  confirmToken?: Maybe<Scalars['String']['output']>;
  displayedUserBusinessOrJobTitle?: Maybe<Scalars['String']['output']>;
  displayedUserCountry?: Maybe<Scalars['String']['output']>;
  displayedUserEmail?: Maybe<Scalars['String']['output']>;
  /** The first name of the user who appears in a notification */
  displayedUserFirstName?: Maybe<Scalars['String']['output']>;
  displayedUserFullName?: Maybe<Scalars['String']['output']>;
  /** The user id of the user who appears in a notification */
  displayedUserId?: Maybe<Scalars['String']['output']>;
  displayedUserLastName?: Maybe<Scalars['String']['output']>;
  displayedUserPhoneNumber?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  recipientEmail?: Maybe<Scalars['String']['output']>;
  recipientFirstName?: Maybe<Scalars['String']['output']>;
  recipientFullName?: Maybe<Scalars['String']['output']>;
  recipientId?: Maybe<Scalars['String']['output']>;
  recipientLastName?: Maybe<Scalars['String']['output']>;
  recipientPhoneNumber?: Maybe<Scalars['String']['output']>;
  senderEmail?: Maybe<Scalars['String']['output']>;
  senderFirstName?: Maybe<Scalars['String']['output']>;
  senderFullName?: Maybe<Scalars['String']['output']>;
  senderId?: Maybe<Scalars['String']['output']>;
  senderLastName?: Maybe<Scalars['String']['output']>;
  senderPhoneNumber?: Maybe<Scalars['String']['output']>;
  textDirection?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type NotificationInput = {
  action0?: InputMaybe<AppAction>;
  action1?: InputMaybe<AppAction>;
  action2?: InputMaybe<AppAction>;
  actionTaken?: InputMaybe<AppAction>;
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  allowSendingToSuspendedUser?: InputMaybe<Scalars['Boolean']['input']>;
  appLink?: InputMaybe<Scalars['String']['input']>;
  context?: InputMaybe<NotificationInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  emailSendReport?: InputMaybe<Scalars['String']['input']>;
  emailSentAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  htmlMessage?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  inAppMessageReceivedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  inAppMessageSentAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  initiatorId?: InputMaybe<Scalars['ID']['input']>;
  isTranslated?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<UiLanguage>;
  messageText?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  multiStepActionId?: InputMaybe<Scalars['ID']['input']>;
  notificationType?: InputMaybe<NotificationType>;
  pushNotificationSendReport?: InputMaybe<Scalars['String']['input']>;
  pushNotificationSentAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  recipientId?: InputMaybe<Scalars['ID']['input']>;
  replyingToId?: InputMaybe<Scalars['ID']['input']>;
  sendEmail?: InputMaybe<Scalars['Boolean']['input']>;
  sendInAppMessage?: InputMaybe<Scalars['Boolean']['input']>;
  sendPushNotification?: InputMaybe<Scalars['Boolean']['input']>;
  sendSms?: InputMaybe<Scalars['Boolean']['input']>;
  sentMessagesCount?: InputMaybe<Scalars['Int']['input']>;
  shortMessageText?: InputMaybe<Scalars['String']['input']>;
  smsSendReport?: InputMaybe<Scalars['String']['input']>;
  smsSentAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  templateId?: InputMaybe<Scalars['ID']['input']>;
  templateName?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
};

export type NotificationMethod =
  | 'auto'
  | 'email'
  | 'inAppNotification'
  | 'off'
  | 'pushNotification'
  | 'sms';

export type NotificationOptions = {
  __typename?: 'NotificationOptions';
  enableEmail?: Maybe<Scalars['Boolean']['output']>;
  enableInAppMessage?: Maybe<Scalars['Boolean']['output']>;
  enablePushNotification?: Maybe<Scalars['Boolean']['output']>;
  enableSms?: Maybe<Scalars['Boolean']['output']>;
  frequency?: Maybe<Scalars['String']['output']>;
  notificationType: NotificationType;
};

export type NotificationOptionsInput = {
  enableEmail?: InputMaybe<Scalars['Boolean']['input']>;
  enableInAppMessage?: InputMaybe<Scalars['Boolean']['input']>;
  enablePushNotification?: InputMaybe<Scalars['Boolean']['input']>;
  enableSms?: InputMaybe<Scalars['Boolean']['input']>;
  frequency?: InputMaybe<Scalars['String']['input']>;
  notificationType?: InputMaybe<NotificationType>;
};

export type NotificationTemplate = {
  __typename?: 'NotificationTemplate';
  action0?: Maybe<AppAction>;
  action1?: Maybe<AppAction>;
  action2?: Maybe<AppAction>;
  adminNotes?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description: Scalars['String']['output'];
  events?: Maybe<Array<ModelEvent>>;
  htmlMessageAr: Scalars['String']['output'];
  htmlMessageEn: Scalars['String']['output'];
  htmlMessageEs: Scalars['String']['output'];
  htmlMessageId: Scalars['String']['output'];
  htmlMessageRu: Scalars['String']['output'];
  htmlMessageSo: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isCore: Scalars['Boolean']['output'];
  messageTextAr: Scalars['String']['output'];
  messageTextEn: Scalars['String']['output'];
  messageTextEs: Scalars['String']['output'];
  messageTextId: Scalars['String']['output'];
  messageTextRu: Scalars['String']['output'];
  messageTextSo: Scalars['String']['output'];
  metadata?: Maybe<BaseModelMetadata>;
  name: NotificationTemplateName;
  sendEmail: Scalars['Boolean']['output'];
  sendInAppMessage: Scalars['Boolean']['output'];
  sendPushNotification: Scalars['Boolean']['output'];
  sendSms: Scalars['Boolean']['output'];
  senderEmail?: Maybe<Scalars['String']['output']>;
  senderName?: Maybe<Scalars['String']['output']>;
  shortMessageTextAr: Scalars['String']['output'];
  shortMessageTextEn: Scalars['String']['output'];
  shortMessageTextEs: Scalars['String']['output'];
  shortMessageTextId: Scalars['String']['output'];
  shortMessageTextRu: Scalars['String']['output'];
  shortMessageTextSo: Scalars['String']['output'];
  titleAr: Scalars['String']['output'];
  titleEn: Scalars['String']['output'];
  titleEs: Scalars['String']['output'];
  titleId: Scalars['String']['output'];
  titleRu: Scalars['String']['output'];
  titleSo: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  version: Scalars['String']['output'];
};

export type NotificationTemplateInput = {
  action0?: InputMaybe<AppAction>;
  action1?: InputMaybe<AppAction>;
  action2?: InputMaybe<AppAction>;
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  htmlMessageAr?: InputMaybe<Scalars['String']['input']>;
  htmlMessageEn?: InputMaybe<Scalars['String']['input']>;
  htmlMessageEs?: InputMaybe<Scalars['String']['input']>;
  htmlMessageId?: InputMaybe<Scalars['String']['input']>;
  htmlMessageRu?: InputMaybe<Scalars['String']['input']>;
  htmlMessageSo?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isCore?: InputMaybe<Scalars['Boolean']['input']>;
  messageTextAr?: InputMaybe<Scalars['String']['input']>;
  messageTextEn?: InputMaybe<Scalars['String']['input']>;
  messageTextEs?: InputMaybe<Scalars['String']['input']>;
  messageTextId?: InputMaybe<Scalars['String']['input']>;
  messageTextRu?: InputMaybe<Scalars['String']['input']>;
  messageTextSo?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  name?: InputMaybe<NotificationTemplateName>;
  sendEmail?: InputMaybe<Scalars['Boolean']['input']>;
  sendInAppMessage?: InputMaybe<Scalars['Boolean']['input']>;
  sendPushNotification?: InputMaybe<Scalars['Boolean']['input']>;
  sendSms?: InputMaybe<Scalars['Boolean']['input']>;
  senderEmail?: InputMaybe<Scalars['String']['input']>;
  senderName?: InputMaybe<Scalars['String']['input']>;
  shortMessageTextAr?: InputMaybe<Scalars['String']['input']>;
  shortMessageTextEn?: InputMaybe<Scalars['String']['input']>;
  shortMessageTextEs?: InputMaybe<Scalars['String']['input']>;
  shortMessageTextId?: InputMaybe<Scalars['String']['input']>;
  shortMessageTextRu?: InputMaybe<Scalars['String']['input']>;
  shortMessageTextSo?: InputMaybe<Scalars['String']['input']>;
  templateId?: InputMaybe<Scalars['ID']['input']>;
  titleAr?: InputMaybe<Scalars['String']['input']>;
  titleEn?: InputMaybe<Scalars['String']['input']>;
  titleEs?: InputMaybe<Scalars['String']['input']>;
  titleId?: InputMaybe<Scalars['String']['input']>;
  titleRu?: InputMaybe<Scalars['String']['input']>;
  titleSo?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type NotificationTemplateName =
  | 'accountDeletedConfirmation'
  | 'channelInvitationAcceptedForMentee'
  | 'channelInvitationAcceptedForMentor'
  | 'channelInvitationDeclinedForMentee'
  | 'channelInvitationDeclinedForMentor'
  | 'channelInvitationReceivedForMentee'
  | 'channelInvitationReceivedForMentor'
  | 'channelMessageReceivedForMentee'
  | 'channelMessageReceivedForMentor'
  | 'completeProfileForMentee'
  | 'completeProfileForMentor'
  | 'completeSignUpForMentee'
  | 'completeSignUpForMentor'
  | 'matchesRecommendationsForMentee'
  | 'matchesRecommendationsForMentor'
  | 'newPrivacyRules'
  | 'newsletter'
  | 'resetPasswordConfirmToken'
  | 'resetPasswordConfirmation'
  | 'sendFirstInvitationForMentee'
  | 'sendFirstInvitationForMentor'
  | 'unset'
  | 'welcomeForMentee'
  | 'welcomeForMentor';

export type NotificationType =
  | 'accountDeletedConfirmation'
  | 'channelInvitationAccepted'
  | 'channelInvitationDeclined'
  | 'channelInvitationReceived'
  | 'channelMessageReceived'
  | 'completeProfile'
  | 'completeSignUp'
  | 'matchesRecommendations'
  | 'newPrivacyRules'
  | 'newsletter'
  | 'resetPasswordConfirmToken'
  | 'resetPasswordConfirmation'
  | 'sendFirstInvitation'
  | 'unset'
  | 'welcome';

export type ObjectChangedEvent = {
  __typename?: 'ObjectChangedEvent';
  messageType: ObjectChangedEventType;
  modelType: ModelType;
  object?: Maybe<BaseModel>;
  objectId: Scalars['ID']['output'];
  ownerUserId?: Maybe<Scalars['ID']['output']>;
  requestId?: Maybe<Scalars['String']['output']>;
  serviceRequest: ServiceRequest;
};

export type ObjectChangedEventType =
  | 'created'
  | 'deleted'
  | 'updated';

export type Option = {
  __typename?: 'Option';
  adminNotes?: Maybe<Scalars['String']['output']>;
  childOptions?: Maybe<Array<Option>>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  isParent?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<UiLanguage>;
  /** Material icon name. Intended to be used by the Flutter app for the expertises and industries icons. */
  materialIconName?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2TextId?: Maybe<Scalars['String']['output']>;
  mm2Value?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm3TextId?: Maybe<Scalars['String']['output']>;
  optionType: OptionType;
  parentOption?: Maybe<Array<Option>>;
  parentTextId?: Maybe<Scalars['String']['output']>;
  supportedLanguages?: Maybe<Array<UiLanguage>>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  textId: Scalars['String']['output'];
  translatedDescription?: Maybe<Scalars['String']['output']>;
  translatedValue?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  value: Scalars['String']['output'];
};

export type OptionType =
  | 'blockUserReason'
  | 'companyStage'
  | 'companyType'
  | 'contactType'
  | 'contentTagType'
  | 'country'
  | 'declineChannelInvitationReason'
  | 'educationLevel'
  | 'errorCode'
  | 'ethnicity'
  | 'expertise'
  | 'gender'
  | 'industry'
  | 'iqlaaJordanianDistrict'
  | 'iqlaaJordanianGovernorate'
  | 'language'
  | 'mm2Expertise'
  | 'mm2Industry'
  | 'notificationTypeOption'
  | 'pronoun'
  | 'reportUserReason'
  | 'unset';

export type Pronoun = {
  __typename?: 'Pronoun';
  adminNotes?: Maybe<Scalars['String']['output']>;
  childOptions?: Maybe<Array<Option>>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  isParent?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<UiLanguage>;
  /** Material icon name. Intended to be used by the Flutter app for the expertises and industries icons. */
  materialIconName?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2TextId?: Maybe<Scalars['String']['output']>;
  mm2Value?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm3TextId?: Maybe<Scalars['String']['output']>;
  optionType: OptionType;
  parentOption?: Maybe<Array<Option>>;
  parentTextId?: Maybe<Scalars['String']['output']>;
  supportedLanguages?: Maybe<Array<UiLanguage>>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  textId: Scalars['String']['output'];
  translatedDescription?: Maybe<Scalars['String']['output']>;
  translatedValue?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  value: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  apiVersion: Scalars['String']['output'];
  doesUserExist: Scalars['Boolean']['output'];
  findAdminTaskById: AdminTask;
  findAdminTaskDefs: Array<AdminTaskDef>;
  findChannelById: Channel;
  findChannelInvitationById: ChannelInvitation;
  findChannelInvitationsBetweenUsers: Array<ChannelInvitation>;
  findChannelInvitationsForUser: Array<ChannelInvitation>;
  findChannelMessageById: ChannelMessage;
  findChannelMessages: Array<ChannelMessage>;
  findChannelParticipantById: ChannelParticipant;
  findChannels: Array<Channel>;
  findChannelsForUser: Array<Channel>;
  findCompanyStages: Array<CompanyStage>;
  findCompanyTypes: Array<CompanyType>;
  findContact?: Maybe<Contact>;
  findContactById: Contact;
  findContacts: Array<ContactListItem>;
  findCountries: Array<Country>;
  findDeclineChannelInvitationReasons: Array<DeclineChannelInvitationReason>;
  findEducationLevels: Array<EducationLevel>;
  findErrorCodes: Array<ErrorCodeOption>;
  findExpertises: Array<Expertise>;
  findGenders: Array<Gender>;
  findGroupById: Group;
  findGroupMembershipById: GroupMembership;
  findGroupMemberships: Array<IGroupMembership>;
  findGroups: Array<Group>;
  findIndustries: Array<Industry>;
  findIqlaaJordanianDistricts: Array<IqlaaJordanianDistrict>;
  findIqlaaJordanianGovernorates: Array<IqlaaJordanianGovernorate>;
  findLanguages: Array<Language>;
  findLatestTrainingSessionForMe?: Maybe<TrainingSession>;
  /** @deprecated Use findMyActiveMultiStepActions instead */
  findMyActiveMultiStepAction: Array<SidMultiStepAction>;
  findMyActiveMultiStepActions: Array<SidMultiStepAction>;
  findMyChannels: Array<Channel>;
  findMyUserDevices: Array<UserDeviceWithoutAuth>;
  findOptions: Array<Option>;
  findPendingChannelInvitationsForUser: Array<ChannelInvitation>;
  findPronouns: Array<Pronoun>;
  findReportUserReasons: Array<ReportUserReason>;
  findServiceRequestById: ServiceRequest;
  findTrainingById: Training;
  findTrainingSessionById: TrainingSession;
  /** Find training sessions by training  id. By default, finds the requestor's sessions. */
  findTrainingSessionsByTrainingId: Array<TrainingSession>;
  findTrainingSessionsForMe: Array<TrainingSession>;
  findTrainingsForMe: Array<Training>;
  findTrainingsForUser: Array<Training>;
  findUploadedAssetById: UploadedAsset;
  findUploadedAssets: Array<UploadedAsset>;
  findUploadedAssetsForUser: Array<UploadedAsset>;
  findUserById: User;
  findUserByIdent: User;
  findUserDeviceById: UserDeviceWithoutAuth;
  findUserDevices: Array<UserDeviceWithoutAuth>;
  findUserSearchById: UserSearch;
  findUserSearchResults: Array<UserWithScore>;
  findUserSearches: Array<UserSearch>;
  findUsers: Array<UserListItem>;
  getAvailableUserHandleField: User;
  getMultiStepActionProgress: SidMultiStepActionProgress;
  getMyBlockedUsers: Array<User>;
  getMyUser: User;
  isUserIdentAvailable: Scalars['Boolean']['output'];
  myChannelInvitations: Array<ChannelInvitation>;
  myGroupMemberships: Array<IGroupMembership>;
  myInbox: UserInbox;
  myUserSearches: Array<UserSearch>;
};


export type QueryDoesUserExistArgs = {
  ident: Scalars['String']['input'];
  identType: UserIdentType;
};


export type QueryFindAdminTaskByIdArgs = {
  adminTaskId: Scalars['String']['input'];
};


export type QueryFindChannelByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindChannelInvitationByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindChannelInvitationsBetweenUsersArgs = {
  onlyPending?: InputMaybe<Scalars['Boolean']['input']>;
  onlyUnseen?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<FindObjectsOptions>;
  userIds: Array<Scalars['String']['input']>;
};


export type QueryFindChannelInvitationsForUserArgs = {
  direction?: InputMaybe<ChannelInvitationDirection>;
  onlyPending?: InputMaybe<Scalars['Boolean']['input']>;
  onlyUnseen?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<FindObjectsOptions>;
  userId: Scalars['String']['input'];
};


export type QueryFindChannelMessageByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindChannelMessagesArgs = {
  filter?: InputMaybe<ChannelMessageListFilter>;
  match?: InputMaybe<ChannelMessageInput>;
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryFindChannelParticipantByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindChannelsArgs = {
  filter?: InputMaybe<ChannelListFilter>;
  match?: InputMaybe<ChannelInput>;
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryFindChannelsForUserArgs = {
  mustBeAccepted?: InputMaybe<Scalars['Boolean']['input']>;
  mustHaveMessages?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<FindObjectsOptions>;
  userId: Scalars['String']['input'];
};


export type QueryFindCompanyStagesArgs = {
  fallbackUiLanguage?: InputMaybe<UiLanguage>;
};


export type QueryFindCompanyTypesArgs = {
  fallbackUiLanguage?: InputMaybe<UiLanguage>;
};


export type QueryFindContactArgs = {
  createIfNotExist?: InputMaybe<Scalars['Boolean']['input']>;
  match: ContactInput;
};


export type QueryFindContactByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindContactsArgs = {
  filter?: InputMaybe<SidContactListFilter>;
  match?: InputMaybe<ContactInput>;
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryFindCountriesArgs = {
  fallbackUiLanguage?: InputMaybe<UiLanguage>;
};


export type QueryFindDeclineChannelInvitationReasonsArgs = {
  fallbackUiLanguage?: InputMaybe<UiLanguage>;
};


export type QueryFindEducationLevelsArgs = {
  fallbackUiLanguage?: InputMaybe<UiLanguage>;
};


export type QueryFindErrorCodesArgs = {
  fallbackUiLanguage?: InputMaybe<UiLanguage>;
};


export type QueryFindExpertisesArgs = {
  fallbackUiLanguage?: InputMaybe<UiLanguage>;
  isParent?: InputMaybe<Scalars['Boolean']['input']>;
  parentTextId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFindGendersArgs = {
  fallbackUiLanguage?: InputMaybe<UiLanguage>;
};


export type QueryFindGroupByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindGroupMembershipByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindGroupMembershipsArgs = {
  filter?: InputMaybe<GroupMembershipListFilter>;
  match?: InputMaybe<GroupMembershipInput>;
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryFindGroupsArgs = {
  filter?: InputMaybe<GroupListFilter>;
  match?: InputMaybe<GroupInput>;
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryFindIndustriesArgs = {
  fallbackUiLanguage?: InputMaybe<UiLanguage>;
};


export type QueryFindIqlaaJordanianDistrictsArgs = {
  fallbackUiLanguage?: InputMaybe<UiLanguage>;
};


export type QueryFindIqlaaJordanianGovernoratesArgs = {
  fallbackUiLanguage?: InputMaybe<UiLanguage>;
};


export type QueryFindLanguagesArgs = {
  fallbackUiLanguage?: InputMaybe<UiLanguage>;
};


export type QueryFindLatestTrainingSessionForMeArgs = {
  options?: InputMaybe<FindObjectsOptions>;
  trainingId: Scalars['String']['input'];
};


export type QueryFindMyChannelsArgs = {
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryFindMyUserDevicesArgs = {
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryFindOptionsArgs = {
  fallbackUiLanguage?: InputMaybe<UiLanguage>;
  isParent?: InputMaybe<Scalars['Boolean']['input']>;
  optionType: OptionType;
  parentTextId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFindPendingChannelInvitationsForUserArgs = {
  options?: InputMaybe<FindObjectsOptions>;
  userId: Scalars['String']['input'];
};


export type QueryFindPronounsArgs = {
  fallbackUiLanguage?: InputMaybe<UiLanguage>;
};


export type QueryFindReportUserReasonsArgs = {
  fallbackUiLanguage?: InputMaybe<UiLanguage>;
};


export type QueryFindServiceRequestByIdArgs = {
  serviceRequestId: Scalars['String']['input'];
};


export type QueryFindTrainingByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindTrainingSessionByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindTrainingSessionsByTrainingIdArgs = {
  options?: InputMaybe<FindObjectsOptions>;
  trainingId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFindTrainingSessionsForMeArgs = {
  options?: InputMaybe<FindObjectsOptions>;
  trainingId: Scalars['String']['input'];
};


export type QueryFindTrainingsForMeArgs = {
  displayInTrainingsList?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryFindTrainingsForUserArgs = {
  displayInTrainingsList?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<FindObjectsOptions>;
  userId: Scalars['String']['input'];
};


export type QueryFindUploadedAssetByIdArgs = {
  id: Scalars['String']['input'];
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryFindUploadedAssetsArgs = {
  filter?: InputMaybe<UploadedAssetListFilter>;
  match?: InputMaybe<UploadedAssetInput>;
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryFindUploadedAssetsForUserArgs = {
  options?: InputMaybe<FindObjectsOptions>;
  userId: Scalars['String']['input'];
};


export type QueryFindUserByIdArgs = {
  id: Scalars['String']['input'];
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryFindUserByIdentArgs = {
  ident: Scalars['String']['input'];
  identType?: InputMaybe<UserIdentType>;
  options?: InputMaybe<FindUserByIdentOptions>;
};


export type QueryFindUserDeviceByIdArgs = {
  id: Scalars['String']['input'];
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryFindUserDevicesArgs = {
  filter?: InputMaybe<UserDeviceListFilter>;
  match?: InputMaybe<UserDeviceInput>;
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryFindUserSearchByIdArgs = {
  options?: InputMaybe<FindObjectsOptions>;
  userSearchId: Scalars['String']['input'];
};


export type QueryFindUserSearchResultsArgs = {
  options?: InputMaybe<FindObjectsOptions>;
  runIndex?: InputMaybe<Scalars['Int']['input']>;
  userSearchId: Scalars['String']['input'];
};


export type QueryFindUserSearchesArgs = {
  filter?: InputMaybe<UserSearchListFilter>;
  match?: InputMaybe<UserSearchInput>;
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryFindUsersArgs = {
  filter?: InputMaybe<UserListFilter>;
  match?: InputMaybe<UserInput>;
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryGetAvailableUserHandleFieldArgs = {
  startValue: Scalars['String']['input'];
};


export type QueryGetMultiStepActionProgressArgs = {
  actionId: Scalars['String']['input'];
  confirmToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryIsUserIdentAvailableArgs = {
  ident: Scalars['String']['input'];
  identType?: InputMaybe<UserIdentType>;
};


export type QueryMyChannelInvitationsArgs = {
  direction?: InputMaybe<ChannelInvitationDirection>;
  onlyPending?: InputMaybe<Scalars['Boolean']['input']>;
  onlyUnseen?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryMyInboxArgs = {
  refresh?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReportUserInput = {
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  messageText?: InputMaybe<Scalars['String']['input']>;
  reasonTextId?: InputMaybe<ReportUserReasonTextId>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type ReportUserReason = {
  __typename?: 'ReportUserReason';
  adminNotes?: Maybe<Scalars['String']['output']>;
  childOptions?: Maybe<Array<Option>>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  isParent?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<UiLanguage>;
  /** Material icon name. Intended to be used by the Flutter app for the expertises and industries icons. */
  materialIconName?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2TextId?: Maybe<Scalars['String']['output']>;
  mm2Value?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm3TextId?: Maybe<Scalars['String']['output']>;
  optionType: OptionType;
  parentOption?: Maybe<Array<Option>>;
  parentTextId?: Maybe<Scalars['String']['output']>;
  supportedLanguages?: Maybe<Array<UiLanguage>>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  textId: Scalars['String']['output'];
  translatedDescription?: Maybe<Scalars['String']['output']>;
  translatedValue?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  value: Scalars['String']['output'];
};

export type ReportUserReasonTextId =
  | 'badActor'
  | 'fakePerson'
  | 'harasses'
  | 'impersonator'
  | 'inappropriate'
  | 'notSet'
  | 'objectionableLanguage'
  | 'promotesHate'
  | 'sharesObjectionableContent'
  | 'spammer'
  | 'usesObjectionableLanguage'
  | 'violatesRules';

export type SendMultiStepActionNotificationInput = {
  actionId?: Scalars['String']['input'];
  notificationMethod?: InputMaybe<NotificationMethod>;
};

export type ServiceRequest = {
  __typename?: 'ServiceRequest';
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  deviceUuid?: Maybe<Scalars['String']['output']>;
  errorCode?: Maybe<ErrorCode>;
  events?: Maybe<Array<ModelEvent>>;
  expiresAt?: Maybe<Scalars['DateTimeISO']['output']>;
  finishedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id: Scalars['ID']['output'];
  message?: Maybe<Scalars['String']['output']>;
  messageIds?: Maybe<Array<ServiceRequestMessageId>>;
  modelTypes?: Maybe<Array<ModelType>>;
  objectIds?: Maybe<Array<Scalars['ID']['output']>>;
  result: ServiceRequestResult;
  serviceRequestType: ServiceRequestType;
  source?: Maybe<ServiceRequestSource>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  userId?: Maybe<Scalars['ID']['output']>;
  userRoles?: Maybe<Array<UserRole>>;
};

export type ServiceRequestMessageId =
  | 'groupRuleFailed'
  | 'invalidInput'
  | 'systemError'
  | 'unknown';

export type ServiceRequestResult =
  | 'error'
  | 'ok'
  | 'unset';

export type ServiceRequestSource =
  | 'admin'
  | 'graphqlApi'
  | 'httpRoute'
  | 'mm2'
  | 'restApi'
  | 'system'
  | 'vts';

export type ServiceRequestType =
  | 'graphQlMutationAddChannelMessageEvent'
  | 'graphQlMutationAddUserToGroup'
  | 'graphQlMutationArchiveChannelForUserByMe'
  | 'graphQlMutationBlockUser'
  | 'graphQlMutationClearAllSyncInfo'
  | 'graphQlMutationCreateAcademicExperience'
  | 'graphQlMutationCreateAdminTask'
  | 'graphQlMutationCreateBusinessExperience'
  | 'graphQlMutationCreateChannel'
  | 'graphQlMutationCreateChannelInvitation'
  | 'graphQlMutationCreateChannelMessage'
  | 'graphQlMutationCreateChannelParticipant'
  | 'graphQlMutationCreateCompany'
  | 'graphQlMutationCreateContact'
  | 'graphQlMutationCreateContentTag'
  | 'graphQlMutationCreateGroup'
  | 'graphQlMutationCreateGroupMembership'
  | 'graphQlMutationCreateMm2Synchronization'
  | 'graphQlMutationCreateMultiStepAction'
  | 'graphQlMutationCreateNotification'
  | 'graphQlMutationCreateNotificationTemplate'
  | 'graphQlMutationCreateUploadedAsset'
  | 'graphQlMutationCreateUserDevice'
  | 'graphQlMutationCreateUserSearch'
  | 'graphQlMutationDeleteAcademicExperience'
  | 'graphQlMutationDeleteAdminTask'
  | 'graphQlMutationDeleteAllMm2DataInMm3'
  | 'graphQlMutationDeleteBusinessExperience'
  | 'graphQlMutationDeleteChannel'
  | 'graphQlMutationDeleteChannelInvitation'
  | 'graphQlMutationDeleteChannelMessage'
  | 'graphQlMutationDeleteChannelParticipant'
  | 'graphQlMutationDeleteCompany'
  | 'graphQlMutationDeleteContentTag'
  | 'graphQlMutationDeleteGroup'
  | 'graphQlMutationDeleteGroupMembership'
  | 'graphQlMutationDeleteMm2Synchronization'
  | 'graphQlMutationDeleteNotification'
  | 'graphQlMutationDeleteNotificationTemplate'
  | 'graphQlMutationDeleteUploadedAsset'
  | 'graphQlMutationDeleteUser'
  | 'graphQlMutationDeleteUserSearch'
  | 'graphQlMutationEndMySession'
  | 'graphQlMutationFindAdminTaskById'
  | 'graphQlMutationFindUploadedAssetById'
  | 'graphQlMutationFindUploadedAssetForUser'
  | 'graphQlMutationInitAssetUpload'
  | 'graphQlMutationMarkChannelMessagesAsSeenByMe'
  | 'graphQlMutationMarkInAppMessageReceived'
  | 'graphQlMutationNlpLabelMessage'
  | 'graphQlMutationRemoveUserFromAllGroups'
  | 'graphQlMutationRemoveUserFromGroup'
  | 'graphQlMutationReportUser'
  | 'graphQlMutationRunDataGenerator'
  | 'graphQlMutationRunMm2Synchronization'
  | 'graphQlMutationSendMultiStepActionNotification'
  | 'graphQlMutationSignInUser'
  | 'graphQlMutationSignMeOut'
  | 'graphQlMutationSignUpOauthUser'
  | 'graphQlMutationSignUpUser'
  | 'graphQlMutationStartMySession'
  | 'graphQlMutationUnblockUser'
  | 'graphQlMutationUpdateAcademicExperience'
  | 'graphQlMutationUpdateAdminTask'
  | 'graphQlMutationUpdateBusinessExperience'
  | 'graphQlMutationUpdateChannel'
  | 'graphQlMutationUpdateChannelInvitation'
  | 'graphQlMutationUpdateChannelMessage'
  | 'graphQlMutationUpdateChannelParticipant'
  | 'graphQlMutationUpdateCompany'
  | 'graphQlMutationUpdateContact'
  | 'graphQlMutationUpdateContentTag'
  | 'graphQlMutationUpdateGroup'
  | 'graphQlMutationUpdateGroupMembership'
  | 'graphQlMutationUpdateNlpConversation'
  | 'graphQlMutationUpdateNlpMessage'
  | 'graphQlMutationUpdateNotification'
  | 'graphQlMutationUpdateNotificationTemplate'
  | 'graphQlMutationUpdateUploadedAsset'
  | 'graphQlMutationUpdateUser'
  | 'graphQlMutationUpdateUserDevice'
  | 'graphQlMutationUpdateUserSearch'
  | 'graphQlMutationUpsertBackgroundTask'
  | 'graphQlMutationVerifyMultiStepActionToken'
  | 'graphQlQueryAdminTaskDefinitions'
  | 'graphQlQueryAvailableUserHandle'
  | 'graphQlQueryBackgroundTask'
  | 'graphQlQueryChannelInvitations'
  | 'graphQlQueryChannelMessageChannel'
  | 'graphQlQueryChannelParticipants'
  | 'graphQlQueryContactTypes'
  | 'graphQlQueryContacts'
  | 'graphQlQueryContentTag'
  | 'graphQlQueryFindAdminTask'
  | 'graphQlQueryFindAndUpdateAllMm2Users'
  | 'graphQlQueryFindChannelById'
  | 'graphQlQueryFindChannelInvitationById'
  | 'graphQlQueryFindChannelInvitationsBetweenUsers'
  | 'graphQlQueryFindChannelInvitationsForUser'
  | 'graphQlQueryFindChannelMessageById'
  | 'graphQlQueryFindChannelMessages'
  | 'graphQlQueryFindChannelParticipantById'
  | 'graphQlQueryFindChannels'
  | 'graphQlQueryFindChannelsForUser'
  | 'graphQlQueryFindContact'
  | 'graphQlQueryFindContactById'
  | 'graphQlQueryFindContacts'
  | 'graphQlQueryFindCountries'
  | 'graphQlQueryFindExpertises'
  | 'graphQlQueryFindGroupById'
  | 'graphQlQueryFindGroupMembershipByIdField'
  | 'graphQlQueryFindGroupMemberships'
  | 'graphQlQueryFindGroupsField'
  | 'graphQlQueryFindIndustries'
  | 'graphQlQueryFindMm2SynchronizationById'
  | 'graphQlQueryFindMyChannels'
  | 'graphQlQueryFindNlpConversation'
  | 'graphQlQueryFindOptions'
  | 'graphQlQueryFindPendingChannelInvitationsForUser'
  | 'graphQlQueryFindTrainingById'
  | 'graphQlQueryFindTrainingSessionById'
  | 'graphQlQueryFindTrainingSessionsByTrainingId'
  | 'graphQlQueryFindTrainingSessionsForMe'
  | 'graphQlQueryFindTrainingsForMe'
  | 'graphQlQueryFindTrainingsForUser'
  | 'graphQlQueryFindUploadedAssetById'
  | 'graphQlQueryFindUploadedAssets'
  | 'graphQlQueryFindUploadedAssetsForUser'
  | 'graphQlQueryFindUserById'
  | 'graphQlQueryFindUserByIdent'
  | 'graphQlQueryFindUserDeviceById'
  | 'graphQlQueryFindUserDevices'
  | 'graphQlQueryFindUserSearchById'
  | 'graphQlQueryFindUserSearchResults'
  | 'graphQlQueryFindUsers'
  | 'graphQlQueryGetMm2Integration'
  | 'graphQlQueryGetMultiStepActionProgress'
  | 'graphQlQueryGetMyBlockedUsers'
  | 'graphQlQueryGetMyUser'
  | 'graphQlQueryLatestUserDevice'
  | 'graphQlQueryMyContacts'
  | 'graphQlQueryMyGroupMemberships'
  | 'graphQlQueryMyInbox'
  | 'graphQlQueryNotificationTemplate'
  | 'graphQlQueryUnreadInAppMessages'
  | 'graphQlQueryUser'
  | 'graphQlQueryUserChannels'
  | 'graphQlQueryUserCompanies'
  | 'graphQlQueryUserGroupMembers'
  | 'graphQlQueryUserGroups'
  | 'graphQlQueryUserInboxUser'
  | 'graphQlQueryUserSearchFoundUsers'
  | 'graphQlQueryUserUserDevices'
  | 'unset';

export type SidContactListFilter = {
  caseSensitive?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  searchText?: InputMaybe<Scalars['String']['input']>;
  textSearchFields?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userIdIn?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type SidMultiStepAction = {
  __typename?: 'SidMultiStepAction';
  actionStatus: MultiStepActionStatus;
  actionType: MultiStepActionType;
  adminNotes?: Maybe<Scalars['String']['output']>;
  attemptCount: Scalars['Int']['output'];
  confirmToken?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  deviceUuid?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailPassed?: Maybe<Scalars['Boolean']['output']>;
  emailUpdatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  emailVerifiedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  errors?: Maybe<Array<MultiStepActionError>>;
  events?: Maybe<Array<ModelEvent>>;
  expiresAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<BaseModelMetadata>;
  notificationId?: Maybe<Scalars['String']['output']>;
  notificationMethod: NotificationMethod;
  notificationResult?: Maybe<MultiStepActionSendNotificationResult>;
  notificationSentAt?: Maybe<Scalars['DateTimeISO']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  passwordPassed?: Maybe<Scalars['Boolean']['output']>;
  passwordResettedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  passwordUpdatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  phoneNumberPassed?: Maybe<Scalars['Boolean']['output']>;
  phoneNumberUpdatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  phoneNumberVerifiedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  report?: Maybe<Scalars['String']['output']>;
  result: MultiStepActionResult;
  signedInAt?: Maybe<Scalars['DateTimeISO']['output']>;
  textData?: Maybe<Scalars['String']['output']>;
  tfaBackupCodes?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  userHandle?: Maybe<Scalars['String']['output']>;
  userId: Scalars['ID']['output'];
  userIdent?: Maybe<Scalars['String']['output']>;
};

export type SidMultiStepActionInput = {
  actionStatus?: InputMaybe<MultiStepActionStatus>;
  actionType?: InputMaybe<MultiStepActionType>;
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  attemptCount?: InputMaybe<Scalars['Int']['input']>;
  confirmToken?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailPassed?: InputMaybe<Scalars['Boolean']['input']>;
  emailUpdatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  emailVerifiedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  errors?: InputMaybe<Array<MultiStepActionErrorInput>>;
  events?: InputMaybe<Array<ModelEventInput>>;
  expiresAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  notificationId?: InputMaybe<Scalars['String']['input']>;
  notificationMethod?: InputMaybe<NotificationMethod>;
  notificationResult?: InputMaybe<MultiStepActionSendNotificationResult>;
  notificationSentAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  passwordPassed?: InputMaybe<Scalars['Boolean']['input']>;
  passwordResettedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  passwordUpdatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumberPassed?: InputMaybe<Scalars['Boolean']['input']>;
  phoneNumberUpdatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  phoneNumberVerifiedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  report?: InputMaybe<Scalars['String']['input']>;
  result?: InputMaybe<MultiStepActionResult>;
  signedInAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  textData?: InputMaybe<Scalars['String']['input']>;
  tfaBackupCodes?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  userHandle?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
  userIdent?: InputMaybe<Scalars['String']['input']>;
};

export type SidMultiStepActionProgress = {
  __typename?: 'SidMultiStepActionProgress';
  actionId: Scalars['ID']['output'];
  actionStatus?: Maybe<MultiStepActionStatus>;
  actionType: MultiStepActionType;
  attemptCount: Scalars['Int']['output'];
  authToken?: Maybe<Scalars['String']['output']>;
  authTokenExpiresAt?: Maybe<Scalars['DateTimeISO']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  emailPassed?: Maybe<Scalars['Boolean']['output']>;
  emailUpdatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  emailVerifiedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  errors?: Maybe<Array<MultiStepActionError>>;
  events?: Maybe<Array<ModelEvent>>;
  expiresAt?: Maybe<Scalars['DateTimeISO']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  notificationId?: Maybe<Scalars['String']['output']>;
  notificationMethod?: Maybe<NotificationMethod>;
  notificationResult?: Maybe<MultiStepActionSendNotificationResult>;
  notificationSentAt?: Maybe<Scalars['DateTimeISO']['output']>;
  passwordPassed?: Maybe<Scalars['Boolean']['output']>;
  passwordResettedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  passwordUpdatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  phoneNumberPassed?: Maybe<Scalars['Boolean']['output']>;
  phoneNumberUpdatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  phoneNumberVerifiedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  report?: Maybe<Scalars['String']['output']>;
  result: MultiStepActionResult;
  signedInAt?: Maybe<Scalars['DateTimeISO']['output']>;
  textData?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  userId: Scalars['ID']['output'];
};

/** User sign up input data */
export type SignInOauthUserInput = {
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  ident?: InputMaybe<Scalars['String']['input']>;
  identType?: InputMaybe<UserIdentType>;
  identityProvider?: IdentityProvider;
  lastName?: InputMaybe<Scalars['String']['input']>;
  oauthDelegateUserId?: InputMaybe<Scalars['String']['input']>;
  oauthFederatedProvider?: InputMaybe<FederatedIdentityProvider>;
  oauthIdToken?: InputMaybe<Scalars['String']['input']>;
  oauthProfileUrl?: InputMaybe<Scalars['String']['input']>;
  oauthRefreshToken?: InputMaybe<Scalars['String']['input']>;
  oauthRefreshTokenCreatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  oauthRefreshTokenExpiresAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  oauthToken?: InputMaybe<Scalars['String']['input']>;
  oauthTokenCreatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  oauthTokenExpiresAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  oauthTokenId?: InputMaybe<Scalars['String']['input']>;
  oauthUserId?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']['input']>;
  pushNotificationToken?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  userHandle?: InputMaybe<Scalars['String']['input']>;
};

/** User sign up input data */
export type SignInUserInput = {
  authType?: AuthType;
  ident?: InputMaybe<Scalars['String']['input']>;
  identType?: InputMaybe<UserIdentType>;
  password?: InputMaybe<Scalars['String']['input']>;
  pushNotificationToken?: InputMaybe<Scalars['String']['input']>;
};

/** User sign up input data */
export type SignUpUserInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  authType?: AuthType;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  checkAvailable?: Scalars['Boolean']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerifiedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  notes?: InputMaybe<Scalars['String']['input']>;
  offersHelp?: InputMaybe<Scalars['Boolean']['input']>;
  optIntoNewsletter?: InputMaybe<Scalars['Boolean']['input']>;
  organization?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  professionalRole?: InputMaybe<Scalars['String']['input']>;
  pushNotificationToken?: InputMaybe<Scalars['String']['input']>;
  seeksHelp?: InputMaybe<Scalars['Boolean']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  userHandle?: InputMaybe<Scalars['String']['input']>;
};

export type SortDirection =
  | 'asc'
  | 'desc';

export type SortItem = {
  direction?: InputMaybe<SortDirection>;
  field?: Scalars['String']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  channelChanged: BgChannelChangedEvent;
  objectChanged: ObjectChangedEvent;
};


export type SubscriptionChannelChangedArgs = {
  channelId?: Scalars['ID']['input'];
};


export type SubscriptionObjectChangedArgs = {
  objectId?: Scalars['ID']['input'];
  ownerUserId?: InputMaybe<Scalars['ID']['input']>;
};

export type Training = {
  __typename?: 'Training';
  about?: Maybe<Scalars['String']['output']>;
  aboutAr?: Maybe<Scalars['String']['output']>;
  aboutArMm2?: Maybe<Scalars['String']['output']>;
  aboutEn?: Maybe<Scalars['String']['output']>;
  aboutEnMm2?: Maybe<Scalars['String']['output']>;
  aboutEs?: Maybe<Scalars['String']['output']>;
  aboutEsMm2?: Maybe<Scalars['String']['output']>;
  aboutInd?: Maybe<Scalars['String']['output']>;
  aboutIndMm2?: Maybe<Scalars['String']['output']>;
  aboutMm2?: Maybe<Scalars['String']['output']>;
  aboutRu?: Maybe<Scalars['String']['output']>;
  aboutRuMm2?: Maybe<Scalars['String']['output']>;
  aboutSo?: Maybe<Scalars['String']['output']>;
  aboutSoMm2?: Maybe<Scalars['String']['output']>;
  adminNotes?: Maybe<Scalars['String']['output']>;
  certificateTemplateId?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  /** Maps to TrainingPageCountry from MM2 */
  countriesTextIds?: Maybe<Array<Scalars['String']['output']>>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  expired: Scalars['Boolean']['output'];
  /** Maps to TrainingPageCommmunity from MM2 */
  groupIds?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['ID']['output'];
  imageUrls?: Maybe<Array<Scalars['String']['output']>>;
  introduction?: Maybe<Scalars['String']['output']>;
  introductionAr?: Maybe<Scalars['String']['output']>;
  introductionArMm2?: Maybe<Scalars['String']['output']>;
  introductionEn?: Maybe<Scalars['String']['output']>;
  introductionEnMm2?: Maybe<Scalars['String']['output']>;
  introductionEs?: Maybe<Scalars['String']['output']>;
  introductionEsMm2?: Maybe<Scalars['String']['output']>;
  introductionInd?: Maybe<Scalars['String']['output']>;
  introductionIndMm2?: Maybe<Scalars['String']['output']>;
  introductionMm2?: Maybe<Scalars['String']['output']>;
  introductionRu?: Maybe<Scalars['String']['output']>;
  introductionRuMm2?: Maybe<Scalars['String']['output']>;
  introductionSo?: Maybe<Scalars['String']['output']>;
  introductionSoMm2?: Maybe<Scalars['String']['output']>;
  isTrainingCompletedForMe?: Maybe<Scalars['Boolean']['output']>;
  isTrainingPassedForMe?: Maybe<Scalars['Boolean']['output']>;
  /** Maps to TrainingPageLanguage from MM2 */
  languagesTextIds?: Maybe<Array<Scalars['String']['output']>>;
  /** Markdown field which contains the trainings lesson plan */
  lessonPlan?: Maybe<Scalars['String']['output']>;
  /** Markdown field which contains the trainings lesson plan in Arabic */
  lessonPlanAr?: Maybe<Scalars['String']['output']>;
  /** Markdown field which contains the trainings lesson plan in English */
  lessonPlanEn?: Maybe<Scalars['String']['output']>;
  /** Markdown field which contains the trainings lesson plan in Spanish */
  lessonPlanEs?: Maybe<Scalars['String']['output']>;
  /** Markdown field which contains the trainings lesson plan in Bahasa Indonesian */
  lessonPlanInd?: Maybe<Scalars['String']['output']>;
  lessonPlanLevels: Scalars['Int']['output'];
  /** Markdown field which contains the trainings lesson plan in Russian */
  lessonPlanRu?: Maybe<Scalars['String']['output']>;
  /** Markdown field which contains the trainings lesson plan in Somali */
  lessonPlanSo?: Maybe<Scalars['String']['output']>;
  live: Scalars['Boolean']['output'];
  locked: Scalars['Boolean']['output'];
  metadata?: Maybe<BaseModelMetadata>;
  /** This attribute is only used by the MM2/VTS synchronizer. MM2 Wagtail page PK/ MM2 training page ID. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  myLatestTrainingSession?: Maybe<TrainingSession>;
  myTrainingSessions: Array<TrainingSession>;
  numCorrectAnswersToPass: Scalars['Int']['output'];
  /** Restrict the training to mentors. Maps to MM2 TrainingPage.role. */
  offersHelp: Scalars['Boolean']['output'];
  relativeUrlPath?: Maybe<Scalars['String']['output']>;
  relativeUrlPathAr?: Maybe<Scalars['String']['output']>;
  relativeUrlPathEn?: Maybe<Scalars['String']['output']>;
  relativeUrlPathEs?: Maybe<Scalars['String']['output']>;
  relativeUrlPathInd?: Maybe<Scalars['String']['output']>;
  relativeUrlPathRu?: Maybe<Scalars['String']['output']>;
  relativeUrlPathSo?: Maybe<Scalars['String']['output']>;
  restricted?: Maybe<Scalars['Boolean']['output']>;
  /** Restrict the training to mentees. Maps to MM2 TrainingPage.role. */
  seeksHelp: Scalars['Boolean']['output'];
  /** Maps to wagtailcore_page.show_in_menus from MM2 */
  showInMenus: Scalars['Boolean']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  slugAr?: Maybe<Scalars['String']['output']>;
  slugEn?: Maybe<Scalars['String']['output']>;
  slugEs?: Maybe<Scalars['String']['output']>;
  slugInd?: Maybe<Scalars['String']['output']>;
  slugRu?: Maybe<Scalars['String']['output']>;
  slugSo?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  titleAr?: Maybe<Scalars['String']['output']>;
  titleEn?: Maybe<Scalars['String']['output']>;
  titleEs?: Maybe<Scalars['String']['output']>;
  titleInd?: Maybe<Scalars['String']['output']>;
  titleRu?: Maybe<Scalars['String']['output']>;
  titleSo?: Maybe<Scalars['String']['output']>;
  /** Training content pages used for the lesson plan */
  trainingContentPages?: Maybe<Array<TrainingContentPage>>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  urlPath?: Maybe<Scalars['String']['output']>;
  urlPathAr?: Maybe<Scalars['String']['output']>;
  urlPathEn?: Maybe<Scalars['String']['output']>;
  urlPathEs?: Maybe<Scalars['String']['output']>;
  urlPathInd?: Maybe<Scalars['String']['output']>;
  urlPathRu?: Maybe<Scalars['String']['output']>;
  urlPathSo?: Maybe<Scalars['String']['output']>;
};

export type TrainingContentPage = {
  __typename?: 'TrainingContentPage';
  adminNotes?: Maybe<Scalars['String']['output']>;
  /** TrainingContentPages can have children TrainingContentPages. This is used to represent the tree structure of the training content. */
  children?: Maybe<Array<TrainingContentPage>>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  expired: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  live: Scalars['Boolean']['output'];
  locked: Scalars['Boolean']['output'];
  metadata?: Maybe<BaseModelMetadata>;
  /** This attribute is only used by the MM2/VTS synchronizer. MM2 Wagtail page PK/ MM2 trainingContentPage page ID. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  relativeUrlPath?: Maybe<Scalars['String']['output']>;
  relativeUrlPathAr?: Maybe<Scalars['String']['output']>;
  relativeUrlPathEn?: Maybe<Scalars['String']['output']>;
  relativeUrlPathEs?: Maybe<Scalars['String']['output']>;
  relativeUrlPathInd?: Maybe<Scalars['String']['output']>;
  relativeUrlPathRu?: Maybe<Scalars['String']['output']>;
  relativeUrlPathSo?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  slugAr?: Maybe<Scalars['String']['output']>;
  slugEn?: Maybe<Scalars['String']['output']>;
  slugEs?: Maybe<Scalars['String']['output']>;
  slugInd?: Maybe<Scalars['String']['output']>;
  slugRu?: Maybe<Scalars['String']['output']>;
  slugSo?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  titleAr?: Maybe<Scalars['String']['output']>;
  titleEn?: Maybe<Scalars['String']['output']>;
  titleEs?: Maybe<Scalars['String']['output']>;
  titleInd?: Maybe<Scalars['String']['output']>;
  titleRu?: Maybe<Scalars['String']['output']>;
  titleSo?: Maybe<Scalars['String']['output']>;
  /** FK to Training model */
  trainingId: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  urlPath?: Maybe<Scalars['String']['output']>;
  urlPathAr?: Maybe<Scalars['String']['output']>;
  urlPathEn?: Maybe<Scalars['String']['output']>;
  urlPathEs?: Maybe<Scalars['String']['output']>;
  urlPathInd?: Maybe<Scalars['String']['output']>;
  urlPathRu?: Maybe<Scalars['String']['output']>;
  urlPathSo?: Maybe<Scalars['String']['output']>;
};

export type TrainingSession = {
  __typename?: 'TrainingSession';
  adminNotes?: Maybe<Scalars['String']['output']>;
  completionInfo?: Maybe<TrainingSessionCompletionInfo>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  isInProgress: Scalars['Boolean']['output'];
  metadata?: Maybe<BaseModelMetadata>;
  mm2Id?: Maybe<Scalars['String']['output']>;
  percentCompleted: Scalars['Float']['output'];
  startedAt: Scalars['DateTimeISO']['output'];
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  /** The ID of the training in MM3. */
  trainingId: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  userId: Scalars['String']['output'];
};

export type TrainingSessionCompletionInfo = {
  __typename?: 'TrainingSessionCompletionInfo';
  completedAt: Scalars['DateTimeISO']['output'];
  isPassingScore: Scalars['Boolean']['output'];
  mm2Id?: Maybe<Scalars['String']['output']>;
  numCorrectAnswersToPass: Scalars['Int']['output'];
  numberOfPreTestQuestions: Scalars['Int']['output'];
  numberOfQuestions: Scalars['Int']['output'];
  preTestQuestionsAnsweredCorrectly: Scalars['Int']['output'];
  questionsAnsweredCorrectly: Scalars['Int']['output'];
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type UiLanguage =
  | 'ar'
  | 'en'
  | 'es'
  | 'id'
  | 'ru'
  | 'so';

export type UploadedAsset = {
  __typename?: 'UploadedAsset';
  adminNotes?: Maybe<Scalars['String']['output']>;
  assetType: UploadedAssetType;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  expiresAt?: Maybe<Scalars['DateTimeISO']['output']>;
  hostingService: AssetHostingService;
  id: Scalars['ID']['output'];
  metadata?: Maybe<BaseModelMetadata>;
  mimeType?: Maybe<Scalars['String']['output']>;
  ownerId: Scalars['ID']['output'];
  ownerModelType: ModelType;
  path?: Maybe<Scalars['String']['output']>;
  s3Bucket?: Maybe<Scalars['String']['output']>;
  s3Key?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  uploadUrl?: Maybe<Scalars['String']['output']>;
  uploadUrlExpiresAt?: Maybe<Scalars['DateTimeISO']['output']>;
  uploadedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type UploadedAssetInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  assetType?: InputMaybe<UploadedAssetType>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  expiresAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  hostingService?: InputMaybe<AssetHostingService>;
  id?: InputMaybe<Scalars['ID']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Scalars['ID']['input']>;
  ownerModelType?: InputMaybe<ModelType>;
  path?: InputMaybe<Scalars['String']['input']>;
  s3Bucket?: InputMaybe<Scalars['String']['input']>;
  s3Key?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
  uploadUrlExpiresAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  uploadedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type UploadedAssetListFilter = {
  caseSensitive?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  searchText?: InputMaybe<Scalars['String']['input']>;
  textSearchFields?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UploadedAssetType =
  | 'avatar'
  | 'profileHeroImage'
  | 'unset';

export type User = {
  __typename?: 'User';
  academicExperienceIds?: Maybe<Array<Scalars['ID']['output']>>;
  academicExperiences?: Maybe<Array<AcademicExperience>>;
  addedToBgVaultAt?: Maybe<Scalars['DateTimeISO']['output']>;
  adminNotes?: Maybe<Scalars['String']['output']>;
  appFeatures?: Maybe<Array<AppFeature>>;
  authType?: Maybe<AuthType>;
  avatarAsset?: Maybe<UploadedAsset>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  birthYear?: Maybe<Scalars['Int']['output']>;
  businessExperienceIds?: Maybe<Array<Scalars['ID']['output']>>;
  businessExperiences?: Maybe<Array<BusinessExperience>>;
  channelInvitations: Array<ChannelInvitation>;
  channelParticipants: Array<ChannelParticipant>;
  channels: Array<Channel>;
  cityOfOrigin?: Maybe<Scalars['String']['output']>;
  cityOfResidence?: Maybe<Scalars['String']['output']>;
  companies?: Maybe<Array<Company>>;
  companyIds?: Maybe<Array<Scalars['ID']['output']>>;
  contacts?: Maybe<Array<Contact>>;
  countryOfOrigin?: Maybe<Country>;
  countryOfOriginTextId?: Maybe<Scalars['String']['output']>;
  countryOfResidence?: Maybe<Country>;
  countryOfResidenceTextId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  /** If discoverable is not true, the user will not be included in search results or recommended to other users. The system will set discoverable to null for various reasons, i.e. for a bad actor. The user can set it to false intentionally. */
  discoverable?: Maybe<Scalars['Boolean']['output']>;
  educationLevel?: Maybe<EducationLevel>;
  educationLevelTextId?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailLowerCase?: Maybe<Scalars['String']['output']>;
  emailUpdatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  endorsements?: Maybe<Array<EndorsementWithTypes>>;
  ethnicity?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  externalGroupIds: Array<Scalars['ID']['output']>;
  fallbackUiLanguage: Language;
  fallbackUiLanguageTextId?: Maybe<UiLanguage>;
  firstName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Gender>;
  /** This attribute is only used by the MM2 synchronizer. */
  genderSelfDescribed?: Maybe<Scalars['String']['output']>;
  genderTextId?: Maybe<Scalars['String']['output']>;
  groupIds: Array<Scalars['ID']['output']>;
  groupMembers: Array<IGroupMembership>;
  groupMemberships: Array<IGroupMembership>;
  groups: Array<Group>;
  /** Records whether a user has logged into MM2. */
  hasSignedInToMm2?: Maybe<Scalars['Boolean']['output']>;
  /** Records whether a user has logged into MM3. */
  hasSignedInToMm3?: Maybe<Scalars['Boolean']['output']>;
  hasTrainings: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  inactivatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  inactivatedBy?: Maybe<Scalars['ID']['output']>;
  inbox: UserInbox;
  inviteCode?: Maybe<Scalars['String']['output']>;
  isEmailVerified: Scalars['Boolean']['output'];
  isOnVacation?: Maybe<Scalars['Boolean']['output']>;
  isPhoneNumberVerified: Scalars['Boolean']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  latestActivityAt?: Maybe<Scalars['DateTimeISO']['output']>;
  latestUserDevice: UserDeviceWithoutAuth;
  /** This attribute is a copy of the mentee group membership. */
  mentee?: Maybe<MenteesGroupMembership>;
  /** This attribute is a copy of the mentor group membership. */
  mentor?: Maybe<MentorsGroupMembership>;
  metadata?: Maybe<UserMetadata>;
  /** For MM2 users, this means a profile is completed. */
  mm2BasicAccountCompleted?: Maybe<Scalars['Boolean']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  /** This is the MM2 password hash. */
  mm2PasswordHash?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2PhotoOriginal?: Maybe<Scalars['String']['output']>;
  offersHelp?: Maybe<Scalars['Boolean']['output']>;
  onboardingStage?: Maybe<Scalars['String']['output']>;
  optIntoNewsletter?: Maybe<Scalars['Boolean']['output']>;
  /** Records whether a user was originally created in MM2. */
  originatedInMm2?: Maybe<Scalars['Boolean']['output']>;
  parentGroupIds: Array<Scalars['ID']['output']>;
  passwordUpdatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  personalBio?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  phoneNumberUpdatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  preferences?: Maybe<UserPreferences>;
  preferredLanguage?: Maybe<Language>;
  preferredLanguageTextId?: Maybe<Scalars['String']['output']>;
  preferredUiLanguage?: Maybe<Language>;
  professionalRole?: Maybe<Scalars['String']['output']>;
  profileCompletionPercentage: Scalars['Int']['output'];
  profileRole: UserProfileRole;
  profileRoleHistory?: Maybe<Array<UserProfileRoleHistoryItem>>;
  pronouns: Array<Pronoun>;
  pronounsDisplay: Scalars['String']['output'];
  pronounsTextIds?: Maybe<Array<Scalars['String']['output']>>;
  regionOfOrigin?: Maybe<Scalars['String']['output']>;
  regionOfResidence?: Maybe<Scalars['String']['output']>;
  roles: Array<UserRole>;
  seeksHelp?: Maybe<Scalars['Boolean']['output']>;
  selectedUiLanguageTextId?: Maybe<UiLanguage>;
  signedInAt?: Maybe<Scalars['DateTimeISO']['output']>;
  signedOutAt?: Maybe<Scalars['DateTimeISO']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  spokenLanguages: Array<Language>;
  spokenLanguagesTextIds: Array<Scalars['String']['output']>;
  ssoIdp?: Maybe<Scalars['String']['output']>;
  suspendedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  suspendedBy?: Maybe<Scalars['ID']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  termsAndConditionsAcceptedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  tfaBackupCodes?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  trustLevel: Scalars['Int']['output'];
  unreadInAppMessages: Array<Notification>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  uploadedAssets: Array<UploadedAsset>;
  userBlocks?: Maybe<Array<UserBlock>>;
  userDevices: Array<UserDeviceWithoutAuth>;
  userHandle?: Maybe<Scalars['String']['output']>;
  websites?: Maybe<Array<LabeledStringValue>>;
  yearsManagementExperience?: Maybe<Scalars['Int']['output']>;
  yearsOwnershipExperience?: Maybe<Scalars['Int']['output']>;
};


export type UserChannelsArgs = {
  mustBeAccepted?: InputMaybe<Scalars['Boolean']['input']>;
  mustHaveMessages?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<FindObjectsOptions>;
};

/** API response to signInUser/signUpUser/signInOauthUser */
export type UserAuthResponse = {
  __typename?: 'UserAuthResponse';
  authToken?: Maybe<Scalars['String']['output']>;
  authTokenExpiresAt?: Maybe<Scalars['DateTimeISO']['output']>;
  authType: AuthType;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  foundUser: Scalars['Boolean']['output'];
  lastName: Scalars['String']['output'];
  onboardingStage: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  roles: Array<UserRole>;
  userHandle: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type UserBlock = {
  __typename?: 'UserBlock';
  adminNotes?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  reasonTextId: Scalars['String']['output'];
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  userId: Scalars['ID']['output'];
};

export type UserBlockInput = {
  adminNotes?: Scalars['String']['input'];
  blockedByUserId?: Scalars['ID']['input'];
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: InputMaybe<Scalars['String']['input']>;
  notes?: Scalars['String']['input'];
  reasonTextId?: Scalars['String']['input'];
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId?: Scalars['ID']['input'];
};

export type UserDeviceInput = {
  acceptedLanguage?: InputMaybe<Scalars['String']['input']>;
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  appVersion?: InputMaybe<Scalars['String']['input']>;
  authType?: InputMaybe<AuthType>;
  brand?: InputMaybe<Scalars['String']['input']>;
  consumer?: InputMaybe<Scalars['String']['input']>;
  consumerVersion?: InputMaybe<Scalars['String']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  deviceType?: InputMaybe<Scalars['String']['input']>;
  deviceUuid?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  identityProvider?: InputMaybe<IdentityProvider>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  isPhoneNumberVerified?: InputMaybe<Scalars['Boolean']['input']>;
  isTablet?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  model?: InputMaybe<Scalars['String']['input']>;
  oauthDelegateUserId?: InputMaybe<Scalars['String']['input']>;
  oauthFederatedProvider?: InputMaybe<FederatedIdentityProvider>;
  oauthProfileUrl?: InputMaybe<Scalars['String']['input']>;
  oauthRefreshToken?: InputMaybe<Scalars['String']['input']>;
  oauthRefreshTokenCreatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  oauthRefreshTokenExpiresAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  oauthToken?: InputMaybe<Scalars['String']['input']>;
  oauthTokenCreatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  oauthTokenExpiresAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  oauthUserId?: InputMaybe<Scalars['String']['input']>;
  os?: InputMaybe<Scalars['String']['input']>;
  osVersion?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumberUpdatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  pushNotificationToken?: InputMaybe<Scalars['String']['input']>;
  screenHeight?: InputMaybe<Scalars['Int']['input']>;
  screenWidth?: InputMaybe<Scalars['Int']['input']>;
  sessionEndedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  sessionStartedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  signedInAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  signedOutAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  trusted?: InputMaybe<Scalars['Boolean']['input']>;
  trustedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type UserDeviceListFilter = {
  caseSensitive?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  searchText?: InputMaybe<Scalars['String']['input']>;
  textSearchFields?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserDeviceWithoutAuth = {
  __typename?: 'UserDeviceWithoutAuth';
  acceptedLanguage?: Maybe<Scalars['String']['output']>;
  adminNotes?: Maybe<Scalars['String']['output']>;
  appVersion?: Maybe<Scalars['String']['output']>;
  brand?: Maybe<Scalars['String']['output']>;
  consumer?: Maybe<Scalars['String']['output']>;
  consumerVersion?: Maybe<Scalars['String']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  deviceType?: Maybe<Scalars['String']['output']>;
  deviceUuid: Scalars['String']['output'];
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  identityProvider?: Maybe<IdentityProvider>;
  ipAddress?: Maybe<Scalars['String']['output']>;
  isPhoneNumberVerified: Scalars['Boolean']['output'];
  isTablet: Scalars['Boolean']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  model?: Maybe<Scalars['String']['output']>;
  oauthProfileUrl?: Maybe<Scalars['String']['output']>;
  os?: Maybe<Scalars['String']['output']>;
  osVersion?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  phoneNumberUpdatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  screenHeight: Scalars['Int']['output'];
  screenWidth: Scalars['Int']['output'];
  sessionEndedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  sessionStartedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  signedInAt?: Maybe<Scalars['DateTimeISO']['output']>;
  signedOutAt?: Maybe<Scalars['DateTimeISO']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  trusted: Scalars['Boolean']['output'];
  trustedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  userId: Scalars['ID']['output'];
};

export type UserIdentInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  inviteCode?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  userHandle?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  userIdent?: InputMaybe<Scalars['String']['input']>;
};

export type UserIdentType =
  | 'any'
  | 'email'
  | 'id'
  | 'inviteCode'
  | 'oauthProfileUrl'
  | 'oauthUserId'
  | 'phoneNumber'
  | 'userHandle';

export type UserInbox = {
  __typename?: 'UserInbox';
  adminNotes?: Maybe<Scalars['String']['output']>;
  channels?: Maybe<ChannelInbox>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<BaseModelMetadata>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  userId: Scalars['ID']['output'];
};

export type UserInput = {
  academicExperienceIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Specify a list of academic experiences you want to create for the user. */
  academicExperiences?: InputMaybe<Array<AcademicExperienceInput>>;
  addToGroupIds?: InputMaybe<Array<Scalars['String']['input']>>;
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  appFeatures?: InputMaybe<Array<AppFeature>>;
  authType?: InputMaybe<AuthType>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  birthYear?: InputMaybe<Scalars['Int']['input']>;
  businessExperienceIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Specify a list of business experiences you want to create for the user. */
  businessExperiences?: InputMaybe<Array<BusinessExperienceInput>>;
  cityOfOrigin?: InputMaybe<Scalars['String']['input']>;
  cityOfResidence?: InputMaybe<Scalars['String']['input']>;
  /** Used internally, will not work in GraphQL queries. */
  companies?: InputMaybe<Array<CompanyInput>>;
  /** Specify a company you want to create and add the user to. */
  company?: InputMaybe<CompanyInput>;
  companyIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Users Country of origin. Use a Country Options textId. */
  countryOfOriginTextId?: InputMaybe<Scalars['String']['input']>;
  countryOfResidenceTextId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  currentPassword?: InputMaybe<Scalars['String']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  discoverable?: InputMaybe<Scalars['Boolean']['input']>;
  educationLevelTextId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailUpdatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  ethnicity?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  externalGroupIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  fallbackUiLanguageTextId?: InputMaybe<UiLanguage>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  genderTextId?: InputMaybe<Scalars['String']['input']>;
  groupIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  groupMemberships?: InputMaybe<Array<GroupMembershipInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  inactivatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  inactivatedBy?: InputMaybe<Scalars['ID']['input']>;
  inviteCode?: InputMaybe<Scalars['String']['input']>;
  isEmailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  isOnVacation?: InputMaybe<Scalars['Boolean']['input']>;
  isPhoneNumberVerified?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  latestActivityAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  newPassword?: InputMaybe<Scalars['String']['input']>;
  offersHelp?: InputMaybe<Scalars['Boolean']['input']>;
  onboardingStage?: InputMaybe<Scalars['String']['input']>;
  optIntoNewsletter?: InputMaybe<Scalars['Boolean']['input']>;
  parentGroupIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  personalBio?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumberUpdatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  preferences?: InputMaybe<UserPreferencesInput>;
  preferredLanguageTextId?: InputMaybe<Scalars['String']['input']>;
  profileRoleHistory?: InputMaybe<Array<UserProfileRoleHistoryItemInput>>;
  pronounsTextIds?: InputMaybe<Array<Scalars['String']['input']>>;
  regionOfOrigin?: InputMaybe<Scalars['String']['input']>;
  regionOfResidence?: InputMaybe<Scalars['String']['input']>;
  removeFromGroupIds?: InputMaybe<Array<Scalars['String']['input']>>;
  roles?: InputMaybe<Array<UserRole>>;
  seeksHelp?: InputMaybe<Scalars['Boolean']['input']>;
  selectedUiLanguageTextId?: InputMaybe<UiLanguage>;
  signedInAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  signedOutAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  spokenLanguagesTextIds?: InputMaybe<Array<Scalars['String']['input']>>;
  ssoIdp?: InputMaybe<Scalars['String']['input']>;
  suspendedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  suspendedBy?: InputMaybe<Scalars['ID']['input']>;
  termsAndConditionsAcceptedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  trustLevel?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  userHandle?: InputMaybe<Scalars['String']['input']>;
  websites?: InputMaybe<Array<LabeledStringValueInput>>;
  yearsManagementExperience?: InputMaybe<Scalars['Int']['input']>;
  yearsOwnershipExperience?: InputMaybe<Scalars['Int']['input']>;
};

export type UserListFilter = {
  caseSensitive?: InputMaybe<Scalars['Boolean']['input']>;
  companyId?: InputMaybe<Scalars['ID']['input']>;
  createdAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAtGreaterThan?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
  emailIn?: InputMaybe<Array<Scalars['String']['input']>>;
  excludeContacts?: InputMaybe<Scalars['Boolean']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  excludeRoles?: InputMaybe<Array<Scalars['String']['input']>>;
  ident?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  inviteCodeIn?: InputMaybe<Array<Scalars['String']['input']>>;
  isMm2User?: InputMaybe<Scalars['Boolean']['input']>;
  latestActivityAtGreaterThan?: InputMaybe<Scalars['DateTimeISO']['input']>;
  phoneNumberIn?: InputMaybe<Array<Scalars['String']['input']>>;
  rolesIn?: InputMaybe<Array<UserRole>>;
  searchText?: InputMaybe<Scalars['String']['input']>;
  syncedWithMm2?: InputMaybe<Scalars['Boolean']['input']>;
  textSearchFields?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserListItem = {
  __typename?: 'UserListItem';
  academicExperiences?: Maybe<Array<AcademicExperience>>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  businessExperiences?: Maybe<Array<BusinessExperience>>;
  cityOfResidence?: Maybe<Scalars['String']['output']>;
  companies: Array<Company>;
  countryOfOrigin?: Maybe<Country>;
  countryOfResidence?: Maybe<Country>;
  createdAt: Scalars['DateTimeISO']['output'];
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  /** If discoverable is not true, the user will not be included in search results or recommended to other users. The system will set discoverable to null for various reasons, i.e. for a bad actor. The user can set it to false intentionally. */
  discoverable?: Maybe<Scalars['Boolean']['output']>;
  educationLevel?: Maybe<EducationLevel>;
  endorsements?: Maybe<Array<EndorsementWithTypes>>;
  firstName?: Maybe<Scalars['String']['output']>;
  groupMemberships: Array<IGroupMembership>;
  groups: Array<Group>;
  id: Scalars['ID']['output'];
  inactivatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  isOnVacation?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  latestActivityAt?: Maybe<Scalars['DateTimeISO']['output']>;
  /** This attribute is a copy of the mentee group membership. */
  mentee?: Maybe<MenteesGroupMembership>;
  /** This attribute is a copy of the mentor group membership. */
  mentor?: Maybe<MentorsGroupMembership>;
  offersHelp?: Maybe<Scalars['Boolean']['output']>;
  profileCompletionPercentage: Scalars['Int']['output'];
  profileRole: UserProfileRole;
  pronouns: Array<Pronoun>;
  pronounsDisplay: Scalars['String']['output'];
  regionOfResidence?: Maybe<Scalars['String']['output']>;
  seeksHelp?: Maybe<Scalars['Boolean']['output']>;
  suspendedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  trustLevel: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userBlocks?: Maybe<Array<UserBlock>>;
  userHandle?: Maybe<Scalars['String']['output']>;
  websites?: Maybe<Array<LabeledStringValue>>;
  yearsManagementExperience?: Maybe<Scalars['Int']['output']>;
  yearsOwnershipExperience?: Maybe<Scalars['Int']['output']>;
};

export type UserMetadata = BaseModelMetadata & {
  __typename?: 'UserMetadata';
  channelsMetadata: ChannelsUserMetadata;
  groupsMetadata: GroupsUserMetadata;
  totalTimeOnPlatform: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type UserPreferences = {
  __typename?: 'UserPreferences';
  adminNotes?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<BaseModelMetadata>;
  notificationOptions?: Maybe<Array<NotificationOptions>>;
  shareEmail?: Maybe<Scalars['Boolean']['output']>;
  sharePhoneNumber?: Maybe<Scalars['Boolean']['output']>;
  showWelcomeMessage?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
};

export type UserPreferencesInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  notificationOptionsInput?: InputMaybe<Array<NotificationOptionsInput>>;
  shareEmail?: InputMaybe<Scalars['Boolean']['input']>;
  sharePhoneNumber?: InputMaybe<Scalars['Boolean']['input']>;
  showWelcomeMessage?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
};

export type UserProfileRole =
  | 'both'
  | 'mentee'
  | 'mentor'
  | 'none';

export type UserProfileRoleHistoryItem = {
  __typename?: 'UserProfileRoleHistoryItem';
  createdAt: Scalars['DateTimeISO']['output'];
  newRole: UserProfileRole;
};

export type UserProfileRoleHistoryItemInput = {
  createdAt?: Scalars['DateTimeISO']['input'];
  newRole?: UserProfileRole;
};

export type UserRole =
  | 'admin'
  | 'qa'
  | 'staff'
  | 'support'
  | 'test';

export type UserSearch = {
  __typename?: 'UserSearch';
  adminNotes?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  /** A list of user IDs of users that should not be included into the search results, i.e. blocked users. */
  excludeUserIds?: Maybe<Array<Scalars['ID']['output']>>;
  expiresAt?: Maybe<Scalars['DateTimeISO']['output']>;
  filter?: Maybe<UserSearchFilter>;
  id: Scalars['ID']['output'];
  matchingEngineId?: Maybe<Scalars['ID']['output']>;
  maxResultCount: Scalars['Int']['output'];
  metadata?: Maybe<BaseModelMetadata>;
  name?: Maybe<Scalars['String']['output']>;
  resultExpiresAt?: Maybe<Scalars['DateTimeISO']['output']>;
  runInfos?: Maybe<Array<UserSearchRunInfo>>;
  subscription?: Maybe<UserSearchSubscriptionType>;
  topFoundUsers: Array<UserListItem>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  /** The ID of the user that is searching and owns this object */
  userId: Scalars['ID']['output'];
  userSearchType: UserSearchType;
};

export type UserSearchFieldOption =
  | 'any'
  | 'isFalse'
  | 'isTrue'
  | 'match';

export type UserSearchFilter = {
  __typename?: 'UserSearchFilter';
  companyStagesTextIds?: Maybe<Array<Scalars['String']['output']>>;
  countryTextIds?: Maybe<Array<Scalars['String']['output']>>;
  expertisesTextIds?: Maybe<Array<Scalars['String']['output']>>;
  industriesTextIds?: Maybe<Array<Scalars['String']['output']>>;
  languagesTextIds?: Maybe<Array<Scalars['String']['output']>>;
  latestActivityAfter?: Maybe<Scalars['DateTimeISO']['output']>;
  offersHelp?: Maybe<UserSearchFieldOption>;
  searchText?: Maybe<Scalars['String']['output']>;
  seeksHelp?: Maybe<UserSearchFieldOption>;
};

export type UserSearchFilterInput = {
  companyStagesTextIds?: Array<Scalars['String']['input']>;
  countryTextIds?: Array<Scalars['String']['input']>;
  expertisesTextIds?: Array<Scalars['String']['input']>;
  industriesTextIds?: Array<Scalars['String']['input']>;
  languagesTextIds?: Array<Scalars['String']['input']>;
  latestActivityAfter?: InputMaybe<Scalars['DateTimeISO']['input']>;
  offersHelp?: InputMaybe<UserSearchFieldOption>;
  searchText?: InputMaybe<Scalars['String']['input']>;
  seeksHelp?: InputMaybe<UserSearchFieldOption>;
};

export type UserSearchInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  /** A list of user IDs of users that should not be included into the search results, i.e. blocked users. */
  excludeUserIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  expiresAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  filter?: InputMaybe<UserSearchFilterInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  matchingEngineId?: InputMaybe<Scalars['ID']['input']>;
  maxResultCount?: InputMaybe<Scalars['Int']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  resultExpiresAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  startSearch?: Scalars['Boolean']['input'];
  subscription?: InputMaybe<UserSearchSubscriptionType>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  /** The ID of the user that is searching and owns this object */
  userId?: InputMaybe<Scalars['ID']['input']>;
  userSearchType?: InputMaybe<UserSearchType>;
};

export type UserSearchListFilter = {
  caseSensitive?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  searchText?: InputMaybe<Scalars['String']['input']>;
  textSearchFields?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserSearchRunInfo = {
  __typename?: 'UserSearchRunInfo';
  finishedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  matchCount: Scalars['Int']['output'];
  startedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  topUserIds?: Maybe<Array<Scalars['ID']['output']>>;
};

export type UserSearchSubscriptionType =
  | 'daily'
  | 'monthly'
  | 'none'
  | 'weekly';

export type UserSearchType =
  | 'menteeRecommendation'
  | 'mentorRecommendation'
  | 'search';

export type UserWithScore = {
  __typename?: 'UserWithScore';
  academicExperiences?: Maybe<Array<AcademicExperience>>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  businessExperiences?: Maybe<Array<BusinessExperience>>;
  cityOfResidence?: Maybe<Scalars['String']['output']>;
  companies: Array<Company>;
  countryOfOrigin?: Maybe<Country>;
  countryOfResidence?: Maybe<Country>;
  createdAt: Scalars['DateTimeISO']['output'];
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  /** If discoverable is not true, the user will not be included in search results or recommended to other users. The system will set discoverable to null for various reasons, i.e. for a bad actor. The user can set it to false intentionally. */
  discoverable?: Maybe<Scalars['Boolean']['output']>;
  educationLevel?: Maybe<EducationLevel>;
  endorsements?: Maybe<Array<EndorsementWithTypes>>;
  firstName?: Maybe<Scalars['String']['output']>;
  groupMemberships: Array<IGroupMembership>;
  groups: Array<Group>;
  id: Scalars['ID']['output'];
  inactivatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  isOnVacation?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  latestActivityAt?: Maybe<Scalars['DateTimeISO']['output']>;
  /** This attribute is a copy of the mentee group membership. */
  mentee?: Maybe<MenteesGroupMembership>;
  /** This attribute is a copy of the mentor group membership. */
  mentor?: Maybe<MentorsGroupMembership>;
  offersHelp?: Maybe<Scalars['Boolean']['output']>;
  profileCompletionPercentage: Scalars['Int']['output'];
  profileRole: UserProfileRole;
  pronouns: Array<Pronoun>;
  pronounsDisplay: Scalars['String']['output'];
  regionOfResidence?: Maybe<Scalars['String']['output']>;
  /** The score value that the matching engine assigned to this user. */
  score?: Maybe<Scalars['Float']['output']>;
  seeksHelp?: Maybe<Scalars['Boolean']['output']>;
  suspendedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  trustLevel: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userBlocks?: Maybe<Array<UserBlock>>;
  userHandle?: Maybe<Scalars['String']['output']>;
  websites?: Maybe<Array<LabeledStringValue>>;
  yearsManagementExperience?: Maybe<Scalars['Int']['output']>;
  yearsOwnershipExperience?: Maybe<Scalars['Int']['output']>;
};

export type VerifyMultiStepActionTokenInput = {
  actionId?: Scalars['String']['input'];
  newPassword?: InputMaybe<Scalars['String']['input']>;
  token?: Scalars['String']['input'];
};

export type VerifyOneTimeAuthTokenInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  deviceUuid?: Scalars['String']['input'];
  events?: InputMaybe<Array<ModelEventInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  token?: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  userIdent?: Scalars['String']['input'];
  userIdentType?: InputMaybe<UserIdentType>;
};

export type SignUpUserMutationVariables = Exact<{
  input: SignUpUserInput;
}>;


export type SignUpUserMutation = { __typename?: 'Mutation', signUpUser: { __typename?: 'UserAuthResponse', firstName: string, userId: string, authToken?: string | null, authTokenExpiresAt?: any | null, userHandle: string } };

export type SignInUserMutationVariables = Exact<{
  input: SignInUserInput;
}>;


export type SignInUserMutation = { __typename?: 'Mutation', signInUser: { __typename?: 'UserAuthResponse', email: string, firstName: string, lastName: string, userId: string, userHandle: string, authToken?: string | null } };

export type FindChannelsForUserQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type FindChannelsForUserQuery = { __typename?: 'Query', findChannelsForUser: Array<{ __typename?: 'Channel', id: string, name?: string | null, isArchivedForMe: boolean, latestMessage?: { __typename?: 'ChannelMessage', messageText?: string | null, createdAt: any, createdBy?: string | null } | null, participants: Array<{ __typename?: 'ChannelParticipant', id: string, metadata?: { __typename?: 'BgChannelParticipantMetadata', avatarUrl?: string | null, firstName?: string | null, lastName?: string | null, userHandle?: string | null } | null }> }> };

export type FindChannelMessagesQueryVariables = Exact<{
  filter?: InputMaybe<ChannelMessageListFilter>;
}>;


export type FindChannelMessagesQuery = { __typename?: 'Query', findChannelMessages: Array<{ __typename?: 'ChannelMessage', messageText?: string | null, id: string, editedAt?: any | null, createdAt: any, deletedBy?: string | null, deletedAt?: any | null, sender: { __typename?: 'User', email?: string | null, firstName?: string | null, id: string, lastName?: string | null }, statuses?: Array<{ __typename?: 'ChannelMessageStatus', receivedAt?: any | null, seenAt?: any | null, userId: string }> | null }> };

export type CreateChannelMessageMutationVariables = Exact<{
  input: ChannelMessageInput;
}>;


export type CreateChannelMessageMutation = { __typename?: 'Mutation', createChannelMessage: { __typename?: 'ChannelMessage', id: string, channelId: string, createdBy?: string | null, messageText?: string | null, replyToMessageId?: string | null, editedAt?: any | null, statuses?: Array<{ __typename?: 'ChannelMessageStatus', receivedAt?: any | null, seenAt?: any | null, userId: string }> | null, sender: { __typename?: 'User', avatarUrl?: string | null, email?: string | null, firstName?: string | null, lastName?: string | null } } };

export type ChannelChangedSubscriptionVariables = Exact<{
  channelId: Scalars['ID']['input'];
}>;


export type ChannelChangedSubscription = { __typename?: 'Subscription', channelChanged: { __typename?: 'BgChannelChangedEvent', channelId?: string | null, eventType: ChannelChangedEventType, invitationId?: string | null, messageId?: string | null, participantId?: string | null } };

export type FindUsersQueryVariables = Exact<{
  filter?: InputMaybe<UserListFilter>;
}>;


export type FindUsersQuery = { __typename?: 'Query', findUsers: Array<{ __typename?: 'UserListItem', avatarUrl?: string | null, createdAt: any, id: string, firstName?: string | null, lastName?: string | null, profileRole: UserProfileRole, offersHelp?: boolean | null, cityOfResidence?: string | null }> };

export type CreateChannelInvitationMutationVariables = Exact<{
  input: ChannelInvitationInput;
}>;


export type CreateChannelInvitationMutation = { __typename?: 'Mutation', createChannelInvitation: { __typename?: 'ChannelInvitation', messageText?: string | null, id: string, createdAt: any, createdBy?: string | null, channelId?: string | null, recipient?: { __typename?: 'User', avatarUrl?: string | null, email?: string | null, firstName?: string | null, lastName?: string | null, offersHelp?: boolean | null, profileRole: UserProfileRole } | null } };

export type FindChannelInvitationsForUserQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type FindChannelInvitationsForUserQuery = { __typename?: 'Query', findChannelInvitationsForUser: Array<{ __typename?: 'ChannelInvitation', channelId?: string | null, channelName?: string | null, id: string, messageText?: string | null, createdAt: any, createdBy?: string | null, status: ChannelInvitationStatus, recipient?: { __typename?: 'User', avatarUrl?: string | null, email?: string | null, firstName?: string | null, lastName?: string | null } | null, sender?: { __typename?: 'User', avatarUrl?: string | null, email?: string | null, firstName?: string | null, lastName?: string | null } | null }> };

export type AcceptChannelInvitationMutationVariables = Exact<{
  channelInvitationId: Scalars['String']['input'];
}>;


export type AcceptChannelInvitationMutation = { __typename?: 'Mutation', acceptChannelInvitation: string };

export type DeclineChannelInvitationMutationVariables = Exact<{
  reasonTextId: DeclineChannelInvitationReasonTextId;
  channelInvitationId: Scalars['String']['input'];
}>;


export type DeclineChannelInvitationMutation = { __typename?: 'Mutation', declineChannelInvitation: string };

export type SignMeOutMutationVariables = Exact<{ [key: string]: never; }>;


export type SignMeOutMutation = { __typename?: 'Mutation', signMeOut: string };


export const SignUpUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignUpUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignUpUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUpUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"authToken"}},{"kind":"Field","name":{"kind":"Name","value":"authTokenExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"userHandle"}}]}}]}}]} as unknown as DocumentNode<SignUpUserMutation, SignUpUserMutationVariables>;
export const SignInUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignInUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignInUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signInUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"userHandle"}},{"kind":"Field","name":{"kind":"Name","value":"authToken"}}]}}]}}]} as unknown as DocumentNode<SignInUserMutation, SignInUserMutationVariables>;
export const FindChannelsForUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindChannelsForUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findChannelsForUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"latestMessage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"messageText"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}}]}},{"kind":"Field","name":{"kind":"Name","value":"participants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"userHandle"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"isArchivedForMe"}}]}}]}}]} as unknown as DocumentNode<FindChannelsForUserQuery, FindChannelsForUserQueryVariables>;
export const FindChannelMessagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindChannelMessages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ChannelMessageListFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findChannelMessages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"messageText"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"editedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"sender"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"statuses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"receivedAt"}},{"kind":"Field","name":{"kind":"Name","value":"seenAt"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deletedBy"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}}]}}]} as unknown as DocumentNode<FindChannelMessagesQuery, FindChannelMessagesQueryVariables>;
export const CreateChannelMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateChannelMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChannelMessageInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createChannelMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"channelId"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"messageText"}},{"kind":"Field","name":{"kind":"Name","value":"statuses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"receivedAt"}},{"kind":"Field","name":{"kind":"Name","value":"seenAt"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sender"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"replyToMessageId"}},{"kind":"Field","name":{"kind":"Name","value":"editedAt"}}]}}]}}]} as unknown as DocumentNode<CreateChannelMessageMutation, CreateChannelMessageMutationVariables>;
export const ChannelChangedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"ChannelChanged"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"channelChanged"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"channelId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"channelId"}},{"kind":"Field","name":{"kind":"Name","value":"eventType"}},{"kind":"Field","name":{"kind":"Name","value":"invitationId"}},{"kind":"Field","name":{"kind":"Name","value":"messageId"}},{"kind":"Field","name":{"kind":"Name","value":"participantId"}}]}}]}}]} as unknown as DocumentNode<ChannelChangedSubscription, ChannelChangedSubscriptionVariables>;
export const FindUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserListFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findUsers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"profileRole"}},{"kind":"Field","name":{"kind":"Name","value":"offersHelp"}},{"kind":"Field","name":{"kind":"Name","value":"cityOfResidence"}}]}}]}}]} as unknown as DocumentNode<FindUsersQuery, FindUsersQueryVariables>;
export const CreateChannelInvitationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateChannelInvitation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChannelInvitationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createChannelInvitation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"messageText"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"channelId"}},{"kind":"Field","name":{"kind":"Name","value":"recipient"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"offersHelp"}},{"kind":"Field","name":{"kind":"Name","value":"profileRole"}}]}}]}}]}}]} as unknown as DocumentNode<CreateChannelInvitationMutation, CreateChannelInvitationMutationVariables>;
export const FindChannelInvitationsForUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindChannelInvitationsForUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findChannelInvitationsForUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"channelId"}},{"kind":"Field","name":{"kind":"Name","value":"channelName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"messageText"}},{"kind":"Field","name":{"kind":"Name","value":"recipient"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sender"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<FindChannelInvitationsForUserQuery, FindChannelInvitationsForUserQueryVariables>;
export const AcceptChannelInvitationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AcceptChannelInvitation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channelInvitationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acceptChannelInvitation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"channelInvitationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channelInvitationId"}}}]}]}}]} as unknown as DocumentNode<AcceptChannelInvitationMutation, AcceptChannelInvitationMutationVariables>;
export const DeclineChannelInvitationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeclineChannelInvitation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reasonTextId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeclineChannelInvitationReasonTextId"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channelInvitationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"declineChannelInvitation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"reasonTextId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reasonTextId"}}},{"kind":"Argument","name":{"kind":"Name","value":"channelInvitationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channelInvitationId"}}}]}]}}]} as unknown as DocumentNode<DeclineChannelInvitationMutation, DeclineChannelInvitationMutationVariables>;
export const SignMeOutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignMeOut"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signMeOut"}}]}}]} as unknown as DocumentNode<SignMeOutMutation, SignMeOutMutationVariables>;