import Dexie from 'dexie';

interface CachedMessage {
  id: string;
  channelId: string;
  messageText: string;
  createdAt: string;
  createdBy: string;
  sender: {
    id: string;
    firstName: string;
    lastName: string;
    avatarUrl?: string;
  };
  editedAt?: string;
  pending?: boolean;
  failed?: boolean;
  localId?: string;
  offlineQueued?: boolean;
}

interface OfflineMessage {
  localId: string;
  channelId: string;
  messageText: string;
  createdAt: string;
  sender: {
    id: string;
    firstName: string;
    lastName: string;
    avatarUrl?: string;
  };
}

class MessageDatabase extends Dexie {
  messages: Dexie.Table<CachedMessage, string>;
  offlineQueue: Dexie.Table<OfflineMessage, string>;

  constructor() {
    super('ChatMessagesDB');

    this.version(2).stores({
      messages: 'id, channelId, createdAt, pending, failed, offlineQueued',
      offlineQueue: 'localId, channelId'
    });

    this.messages = this.table('messages');
    this.offlineQueue = this.table('offlineQueue');
  }

  async cacheMessages(channelId: string, messages: CachedMessage[]) {
    return this.messages.bulkPut(messages.map(msg => ({
      ...msg,
      channelId
    })));
  }

  async getCachedMessages(channelId: string): Promise<CachedMessage[]> {
    return this.messages
      .where('channelId')
      .equals(channelId)
      .sortBy('createdAt');
  }

  async addPendingMessage(message: CachedMessage) {
    return this.messages.add(message);
  }

  async updateMessageStatus(localId: string, status: {
    id?: string,
    pending?: boolean,
    failed?: boolean
  }) {
    return this.messages
      .where('localId')
      .equals(localId)
      .modify(status);
  }

  async deleteMessage(messageId: string) {
    return this.messages.delete(messageId);
  }

  async addOfflineMessage(message: OfflineMessage) {
    return this.offlineQueue.add(message);
  }

  async getOfflineMessages(): Promise<OfflineMessage[]> {
    return this.offlineQueue.toArray();
  }

  async removeOfflineMessage(localId: string) {
    return this.offlineQueue.delete(localId);
  }
}

export const messageDB = new MessageDatabase();
