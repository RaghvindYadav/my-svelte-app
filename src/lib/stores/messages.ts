import { writable } from 'svelte/store';
import { messageDB } from '$lib/services/messageDB';
import type { UserData } from './user';
import { v4 as uuidv4 } from 'uuid';

interface Message {
  id: string;
  channelId: string;
  messageText: string;
  createdAt: string;
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

interface QueuedMessage {
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

interface SyncManager {
  register(tag: string): Promise<void>;
  getTags(): Promise<string[]>;
}

interface ServiceWorkerRegistration {
  sync: SyncManager;
}

function createMessagesStore() {
  const { subscribe, set, update } = writable<{
    messages: Message[];
    currentChannelId?: string;
  }>({
    messages: [],
    currentChannelId: undefined
  });

  const queueOfflineMessage = async (message: QueuedMessage) => {
    await messageDB.addOfflineMessage(message);
    if ('serviceWorker' in navigator && navigator.serviceWorker.ready) {
      const registration = await navigator.serviceWorker.ready;
      if ('sync' in registration) {
        await (registration as ServiceWorkerRegistration).sync.register('sync-messages');
      }
    }
  };

  return {
    subscribe,
    loadMessages: async (channelId: string) => {
      const cachedMessages = await messageDB.getCachedMessages(channelId);
      update(state => ({
        ...state,
        currentChannelId: channelId,
        messages: cachedMessages
      }));
    },
    addMessage: async (channelId: string, messageText: string, user: UserData | null) => {
      if (!user) throw new Error('User not authenticated');

      const localId = uuidv4();
      const newMessage: Message = {
        id: localId,
        localId,
        channelId,
        messageText,
        createdAt: new Date().toISOString(),
        sender: {
          id: user.userId,
          firstName: user.firstName,
          lastName: user.lastName,
          avatarUrl: user.avatarUrl
        },
        pending: true
      };

      // Add to local DB
      await messageDB.addPendingMessage({
        ...newMessage,
        createdBy: user.userId
      });

      // If offline, queue for later sync
      if (!navigator.onLine) {
        newMessage.offlineQueued = true;
        await queueOfflineMessage({
          localId,
          channelId,
          messageText,
          createdAt: newMessage.createdAt,
          sender: newMessage.sender
        });
      }

      update(state => ({
        ...state,
        messages: [...state.messages, newMessage]
      }));

      return localId;
    },
    // ... (rest of the existing methods)
  };
}

export const messages = createMessagesStore();
