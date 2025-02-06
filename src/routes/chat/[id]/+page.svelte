<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { goto } from '$app/navigation';
  import { user } from '$lib/stores/user';
  import { page } from '$app/stores';
  import { query, mutate, subscribe } from '$lib/apollo/hooks';
  import {
    FIND_CHANNEL_MESSAGES_QUERY,
    CREATE_CHANNEL_MESSAGE_MUTATION,
    FIND_CHANNELS_QUERY,
    CHANNEL_CHANGED_SUBSCRIPTION
  } from '$lib/apollo/operations';

  interface GroupedMessages {
    date: string;
    messages: any[];
  }

  const channelId = $page.params.id;
  let messages: any[] = [];
  let newMessage = '';
  let loading = false;
  let error: string | null = null;
  let channel: any = null;
  let groupedMessages: GroupedMessages[] = [];
  let subscription: any;
  let messagesContainer: HTMLDivElement;

  function getChannelTitle(channel: any) {
    if (channel.participants.length === 2) {
      const otherParticipant = channel.participants.find(
        (p: any) => p.id !== $user?.userId
      );
      const metadata = otherParticipant?.metadata;
      return `${metadata?.firstName} ${metadata?.lastName}`;
    }
    return channel.name || 'Group Chat';
  }

  async function loadChannel() {
    try {
      const data = await query(FIND_CHANNELS_QUERY, {
        userId: $user?.userId
      });
      channel = data.findChannelsForUser.find((c: any) => c.id === channelId);
    } catch (err) {
      error = err instanceof Error ? err.message : 'Failed to load channel';
    }
  }

  function groupMessagesByDate(messages: any[]): GroupedMessages[] {
    const groups: { [key: string]: any[] } = {};

    messages.forEach(message => {
      const date = new Date(message.createdAt).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(message);
    });

    return Object.entries(groups).map(([date, messages]) => ({
      date,
      messages
    }));
  }

  function scrollToBottom() {
    if (messagesContainer) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  }

  async function loadMessages() {
    try {
      loading = true;
      const data = await query(FIND_CHANNEL_MESSAGES_QUERY, {
        filter: {
          channelId
        }
      });
      messages = data.findChannelMessages;
      groupedMessages = groupMessagesByDate(messages);
      // Only scroll to bottom on initial load
      if (messages.length > 0) {
        setTimeout(scrollToBottom, 100);
      }
    } catch (err) {
      error = err instanceof Error ? err.message : 'Failed to load messages';
    } finally {
      loading = false;
    }
  }

  async function sendMessage() {
    if (!newMessage.trim()) return;

    try {
      const result = await mutate(CREATE_CHANNEL_MESSAGE_MUTATION, {
        input: {
          channelId,
          messageText: newMessage,
          createdBy: $user?.userId
        }
      });

      const newMessageWithSender = {
        ...result.createChannelMessage,
        sender: {
          id: $user?.userId,
          firstName: $user?.firstName,
          lastName: $user?.lastName
        }
      };

      messages = [...messages, newMessageWithSender];
      groupedMessages = groupMessagesByDate(messages);
      newMessage = '';
      // Scroll to bottom only when sending a message
      setTimeout(scrollToBottom, 100);
    } catch (err) {
      error = err instanceof Error ? err.message : 'Failed to send message';
    }
  }

  function formatTime(dateString: string): string {
    return new Date(dateString).toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    }).toLowerCase();
  }

  function getInitials(firstName: string, lastName: string) {
    return `${firstName?.charAt(0) || ''}${lastName?.charAt(0) || ''}`.toUpperCase();
  }

  function shouldShowSenderName(message: any) {
    return channel?.participants.length > 2;
  }

  async function handleChannelEvent(event: any) {
    const { eventType, messageId } = event.data.channelChanged;

    switch (eventType) {
      case 'messageCreated':
        // Load new messages but don't auto-scroll for received messages
        await loadMessages();
        break;

      case 'messageUpdated':
        // Update the specific message in the list
        const updatedMessages = messages.map(msg =>
          msg.id === messageId ? { ...msg, ...event.data.message } : msg
        );
        messages = updatedMessages;
        groupedMessages = groupMessagesByDate(messages);
        break;

      case 'messageDeleted':
        // Remove the deleted message from the list
        messages = messages.filter(msg => msg.id !== messageId);
        groupedMessages = groupMessagesByDate(messages);
        break;

      case 'channelDeleted':
        // Redirect to home if the channel is deleted
        error = 'This channel has been deleted';
        goto('/home');
        break;

      case 'channelUpdated':
        // Reload channel information
        await loadChannel();
        break;

      case 'participantDeleted':
        // Check if the current user was removed
        if (event.data.channelChanged.participantId === $user?.userId) {
          error = 'You have been removed from this channel';
          goto('/home');
        } else {
          // Reload channel to update participant list
          await loadChannel();
        }
        break;

      case 'participantCreated':
      case 'participantUpdated':
        // Reload channel to update participant list
        await loadChannel();
        break;

      // Add more cases as needed
    }
  }

  onMount(() => {
    if (!$user) {
      goto('/signin');
    } else {
      loadChannel();
      loadMessages();

      // Set up subscription
      subscription = subscribe(
        CHANNEL_CHANGED_SUBSCRIPTION,
        { channelId },
        {
          next: handleChannelEvent,
          error: (err) => {
            console.error('Subscription error:', err);
            error = 'Lost connection to chat. Please refresh the page.';
          },
          complete: () => {
            console.log('Subscription completed');
          }
        }
      );
    }
  });

  onDestroy(() => {
    // Clean up subscription when component is destroyed
    if (subscription) {
      subscription.unsubscribe();
    }
  });
</script>

<div class="flex justify-center w-full bg-base-200 min-h-screen">
  <div class="flex flex-col h-screen w-full max-w-4xl bg-base-100 shadow-xl">
    <!-- Header -->
    <div class="flex items-center gap-4 p-4 border-b border-base-200 bg-base-100/80 backdrop-blur-sm">
      <button class="btn btn-ghost btn-sm" on:click={() => goto('/home')}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </button>
      <h1 class="text-xl font-bold">
        {channel ? getChannelTitle(channel) : 'Loading...'}
      </h1>
    </div>

    <!-- Main chat area with messages -->
    <div class="flex-1 overflow-hidden bg-base-200">
      {#if loading}
        <div class="flex justify-center items-center h-full">
          <span class="loading loading-spinner loading-lg text-primary"></span>
        </div>
      {:else if error}
        <div class="p-4">
          <div class="alert alert-error shadow-lg">{error}</div>
        </div>
      {:else}
        <div
          class="h-full overflow-y-auto p-4 space-y-6"
          bind:this={messagesContainer}
        >
          {#each groupedMessages as group}
            <div class="divider text-xs opacity-50">{group.date}</div>
            {#each group.messages as message}
              <div class="chat {message.sender.id === $user?.userId ? 'chat-end' : 'chat-start'}">
                {#if shouldShowSenderName(message) && message.sender.id !== $user?.userId}
                  <div class="chat-header opacity-50">
                    {message.sender.name}
                  </div>
                {/if}
                <div class="chat-bubble {message.sender.id === $user?.userId ? 'chat-bubble-primary' : 'bg-base-100'}">
                  {message.messageText}
                </div>
                <div class="chat-footer opacity-50">
                  <time class="text-xs">{formatTime(message.createdAt)}</time>
                </div>
              </div>
            {/each}
          {/each}
        </div>
      {/if}
    </div>

    <!-- Message input -->
    <div class="p-4 border-t border-base-200 bg-base-100">
      <form on:submit|preventDefault={sendMessage} class="flex gap-2">
        <input
          type="text"
          bind:value={newMessage}
          class="input input-bordered flex-1 bg-base-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
          placeholder="Type a message..."
          disabled={loading}
        />
        <button
          type="submit"
          class="btn btn-primary"
          disabled={loading || !newMessage.trim()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </form>
    </div>
  </div>
</div>

<style>
  :global(.chat-bubble) {
    max-width: 80%;
    word-break: break-word;
  }
</style>
