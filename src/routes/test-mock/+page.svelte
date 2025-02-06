<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { testMockData } from '$lib/test/mockDataTest';
  import NavBar from '$lib/components/NavBar.svelte';
  import { browser } from '$app/environment';
  import { _, t, locale } from 'svelte-i18n';

  interface Message {
    id: string;
    messageText: string;
    createdAt: string;
    senderId: string;
    editedAt?: string;
    replyTo?: string;
    status: 'sent' | 'seen';
    deleted?: boolean;
  }

  interface Channel {
    id: string;
    name?: string | null;
    createdAt: string;
  }

  let channel: Channel | null = null;
  let participants: string[] = [];
  let messages: Message[] = [];
  let loading = false;
  let loadingMore = false;
  let error: string | null = null;
  let currentUserId = '';
  let newMessage = '';
  let editingMessageId: string | null = null;
  let editingText = '';
  let replyingToId: string | null = null;
  let messagesContainer: HTMLDivElement;
  let hasMoreMessages = true;
  let page = 0;
  const PAGE_SIZE = 50;
  let initialScrollHeight = 0;
  // Add this variable to store all available messages
  let allAvailableMessages: Message[] = [];

  let longPressTimer: ReturnType<typeof setTimeout>;
  let activeMessageId: string | null = null;
  const LONG_PRESS_DURATION = 500; // 500ms for long press
  const LOADING_DELAY = 1000;

  let showScrollButton = false;
  let isNearBottom = true;

  // Add this function to check scroll position
  function checkScrollPosition() {
    if (!messagesContainer) return;

    const threshold = 200; // pixels from bottom
    const position = messagesContainer.scrollHeight - messagesContainer.scrollTop - messagesContainer.clientHeight;
    isNearBottom = position < threshold;
    showScrollButton = !isNearBottom;
  }

  // Function to load more messages
  async function loadMoreMessages() {
    if (loadingMore || !channel) {
      console.log('Loading blocked:', { loadingMore, hasChannel: !!channel });
      return;
    }

    try {
      console.log('Loading more messages from page:', page);
      loadingMore = true;

      // Get next batch from mock data with proper pagination
      const result = await testMockData(page);

      if (result.messages.length === 0) {
        console.log('No more messages available');
        hasMoreMessages = false;
        return;
      }

      // Add artificial delay
      await new Promise(resolve => setTimeout(resolve, LOADING_DELAY));

      console.log(`Fetched ${result.messages.length} older messages`);

      // Save current scroll position
      initialScrollHeight = messagesContainer.scrollHeight;

      // Format and prepend new messages
      const formattedMessages = result.messages.map(msg => ({
        id: msg.id,
        messageText: msg.messageText ?? '',
        createdAt: msg.createdAt.toISOString(),
        senderId: msg.createdBy || 'unknown',
        status: 'sent' as const
      }));

      // Prepend old messages to the existing messages array
      messages = [...formattedMessages, ...messages];

      console.log(`Total messages displayed: ${messages.length}`);
      page += 1;
      hasMoreMessages = result.hasMore;

      // Restore scroll position after DOM update
      setTimeout(() => {
        const newScrollHeight = messagesContainer.scrollHeight;
        const scrollDiff = newScrollHeight - initialScrollHeight;
        messagesContainer.scrollTop = scrollDiff;
        console.log('Scroll position restored:', {
          newScrollHeight,
          initialScrollHeight,
          scrollDiff,
          newScrollTop: messagesContainer.scrollTop
        });
      }, 0);
    } catch (err) {
      console.error('Error loading more messages:', err);
      error = err instanceof Error ? err.message : 'Failed to load more messages';
    } finally {
      loadingMore = false;
    }
  }

  // Scroll handler for infinite scrolling
  function handleScroll() {
    const scrollThreshold = 100;
    const isNearTop = messagesContainer.scrollTop < scrollThreshold;

    checkScrollPosition();

    if (isNearTop && !loadingMore && hasMoreMessages) {
      console.log('Loading more messages...');
      loadMoreMessages();
    }
  }

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString($locale || 'en', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  function switchUser() {
    const currentIndex = participants.indexOf(currentUserId);
    const nextIndex = (currentIndex + 1) % participants.length;
    currentUserId = participants[nextIndex];
  }

  function sendMessage() {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: crypto.randomUUID(),
      messageText: newMessage,
      createdAt: new Date().toISOString(),
      senderId: currentUserId,
      status: 'sent',
      ...(replyingToId && { replyTo: replyingToId })
    };

    messages = [...messages, message];
    newMessage = '';
    replyingToId = null;

    // Reset textarea height
    const textarea = document.querySelector('textarea');
    if (textarea) {
      textarea.style.height = 'auto';
    }

    // Add setTimeout to ensure DOM is updated before scrolling
    setTimeout(scrollToBottom, 0);
  }

  function startEditing(message: Message) {
    editingMessageId = message.id;
    editingText = message.messageText;
  }

  function saveEdit() {
    if (!editingMessageId) return;

    messages = messages.map(msg =>
      msg.id === editingMessageId
        ? {
            ...msg,
            messageText: editingText,
            editedAt: new Date().toISOString()
          }
        : msg
    );

    editingMessageId = null;
    editingText = '';
  }

  function deleteMessage(id: string) {
    messages = messages.map(msg =>
      msg.id === id
        ? { ...msg, deleted: true }
        : msg
    );
  }

  function replyToMessage(id: string) {
    replyingToId = id;
  }

  function markAsSeen(message: Message) {
    if (message.senderId !== currentUserId && message.status !== 'seen') {
      messages = messages.map(msg =>
        msg.id === message.id
          ? { ...msg, status: 'seen' }
          : msg
      );
    }
  }

  function getReplyingToMessage(replyId: string) {
    return messages.find(msg => msg.id === replyId);
  }

  function scrollToBottom() {
    if (messagesContainer) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
      showScrollButton = false;
    }
  }

  onMount(async () => {
    try {
      const result = await testMockData(0); // Start with page 0
      channel = result.channel ? {
        id: result.channel.id,
        name: result.channel.name ?? '',
        createdAt: result.channel.createdAt.toISOString()
      } : null;
      participants = result.participantIds;
      currentUserId = participants[0];

      messages = result.messages.map(msg => ({
        id: msg.id,
        messageText: msg.messageText ?? '',
        createdAt: msg.createdAt.toISOString(),
        senderId: msg.createdBy || 'unknown',
        status: 'sent' as const
      }));

      hasMoreMessages = result.hasMore;
      page = 1; // Set initial page to 1 since we've loaded page 0
      setTimeout(scrollToBottom, 0);
    } catch (err) {
      error = err instanceof Error ? err.message : 'Failed to load mock data';
    } finally {
      loading = false;
    }
  });

  function handleTouchStart(message: Message) {
    longPressTimer = setTimeout(() => {
      activeMessageId = message.id;
    }, LONG_PRESS_DURATION);
  }

  function handleTouchEnd() {
    clearTimeout(longPressTimer);
  }

  function handleTouchMove() {
    clearTimeout(longPressTimer);
  }

  function closeMenu() {
    activeMessageId = null;
  }

  // Add global click handler
  function handleGlobalClick(event: MouseEvent) {
    if (!activeMessageId) return;

    const target = event.target as HTMLElement;
    const menuButton = target.closest('[data-menu-button]');
    const menuContent = target.closest('[data-menu-content]');

    if (!menuButton && !menuContent) {
      closeMenu();
    }
  }

  // Set up and clean up global click handler only in browser environment
  onMount(() => {
    if (browser) {
      document.addEventListener('click', handleGlobalClick);
    }
  });

  onDestroy(() => {
    if (browser) {
      document.removeEventListener('click', handleGlobalClick);
    }
  });

  const MESSAGE_TRUNCATE_LENGTH = 280; // Characters before truncating
  let expandedMessages = new Set<string>(); // Store IDs of expanded messages

  function toggleMessageExpansion(messageId: string) {
    if (expandedMessages.has(messageId)) {
      expandedMessages.delete(messageId);
    } else {
      expandedMessages.add(messageId);
    }
    expandedMessages = expandedMessages; // Trigger reactivity
  }

  function shouldTruncateMessage(text: string): boolean {
    const wordCount = text.trim().split(/\s+/).length;
    return wordCount > 300;
  }

  function isSingleEmoji(text: string): boolean {
    const emojiRegex = /^\p{Emoji}\uFE0F?$/u;
    return emojiRegex.test(text.trim());
  }
</script>

<NavBar />

<div class="container mx-auto p-4">
  {#if loading}
    <div class="flex justify-center items-center h-screen">
      <span class="loading loading-spinner loading-lg"></span>
    </div>
  {:else if error}
    <div class="alert alert-error">{error}</div>
  {:else}
    <!-- Current User Control -->
    <div class="card bg-base-100 shadow-lg mb-6">
      <div class="card-body">
        <div class="flex justify-between items-center">
          <h2 class="card-title">{$t('current_user')}: {currentUserId}</h2>
          <button class="btn btn-primary" on:click={switchUser}>
            {$t('switch_user')}
          </button>
        </div>
      </div>
    </div>

    <!-- Channel Info -->
    <div class="card bg-base-100 shadow-lg mb-6">
      <div class="card-body">
        <h2 class="card-title">{$t('channel_information')}</h2>
        <div class="space-y-2">
          <p><strong>{$t('channel_id')}:</strong> {channel?.id}</p>
          <p><strong>{$t('created_at')}:</strong> {channel?.createdAt ? formatDate(channel.createdAt) : $t('na')}</p>
        </div>
      </div>
    </div>

    <!-- Participants -->
    <div class="card bg-base-100 shadow-lg mb-6">
      <div class="card-body">
        <h2 class="card-title">{$t('participants')}</h2>
        <div class="space-y-2">
          {#each participants as participant, i}
            <div class="badge badge-primary">{participant}</div>
          {/each}
        </div>
      </div>
    </div>

    <!-- Messages -->
    <div class="card bg-base-100 shadow-lg mb-6">
      <div class="card-body flex flex-col h-[600px]"> <!-- Increased height and added flex -->
        <h2 class="card-title">{$t('messages')}</h2>

        <!-- Messages container with flex-1 to take remaining space -->
        <div
          class="flex-1 overflow-y-auto space-y-4 mb-4"
          bind:this={messagesContainer}
          on:scroll={handleScroll}
        >
          {#if loadingMore}
            <div class="flex flex-col items-center justify-center p-4 bg-base-200/50 rounded-lg">
              <span class="loading loading-spinner loading-md"></span>
              <span class="text-sm text-base-content/70 mt-2">{$t('loading_older_messages')}</span>
            </div>
          {/if}

          {#each messages
            .filter(m => !m.deleted)
            .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()) as message}
            <div
              role="article"
              class="chat chat-{message.senderId === currentUserId ? 'end' : 'start'}"
              on:mouseenter={() => markAsSeen(message)}
            >
              {#if message.replyTo}
                {@const repliedMessage = getReplyingToMessage(message.replyTo)}
                {#if repliedMessage}
                  <div class="chat-header opacity-70 text-xs bg-base-200 rounded-lg px-2 py-1 mb-1 max-w-[80%]">
                    {$t('replying_to')}: {repliedMessage.messageText.substring(0, 50)}...
                  </div>
                {/if}
              {/if}
              <div class="chat-header opacity-70">
                {formatDate(message.createdAt)}
                {#if message.editedAt}
                  <span class="ml-1">({$t('edited')})</span>
                {/if}
              </div>
              {#if isSingleEmoji(message.messageText)}
              <!-- Single emoji without bubble -->
              <class class="flex items-end gap-2">
                <div class="text-4xl">{message.messageText}</div>
                <div class="relative">
                  <button
                    class="w-6 h-6 rounded-full flex items-center justify-center hover:bg-base-200"
                    on:click|stopPropagation={() => {
                      activeMessageId = activeMessageId === message.id ? null : message.id;
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>

                  {#if activeMessageId === message.id}
                    <div
                      class="absolute z-50 bg-base-100 shadow-lg rounded-lg p-2 min-w-[150px]"
                      style="top: 100%; {message.senderId === currentUserId ? 'right' : 'left'}: 0; margin-top: 8px;"
                    >
                      <!-- Menu items -->
                      <button
                        class="w-full text-left px-4 py-2 hover:bg-base-200 text-base-content rounded flex items-center gap-2"
                        on:click={() => {
                          replyToMessage(message.id);
                          closeMenu();
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        {$t('reply')}
                      </button>

                      {#if message.senderId === currentUserId}
                        <button
                          class="w-full text-left px-4 py-2 hover:bg-base-200 text-base-content rounded flex items-center gap-2"
                          on:click={() => {
                            startEditing(message);
                            closeMenu();
                          }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                          </svg>
                          {$t('edit')}
                        </button>
                      {/if}
                    </div>
                  {/if}
                </div>
                </class>

            {:else}
              <div
                class="chat-bubble relative {message.senderId === currentUserId ? 'bg-primary text-primary-content' : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-content'}"
                on:touchstart={() => handleTouchStart(message)}
                on:touchend={handleTouchEnd}
                on:touchmove={handleTouchMove}
                on:contextmenu|preventDefault={() => (activeMessageId = message.id)}
              >
                {#if editingMessageId === message.id}
                  <input
                    type="text"
                    bind:value={editingText}
                    class="input input-bordered flex-1 bg-base-200 focus:outline-none focus:ring-2 focus:ring-primary/20 w-full text-base-content"
                    placeholder={$t('edit_message')}
                    on:keydown={(e) => e.key === 'Enter' && saveEdit()}
                  />
                {:else}
                  {#if shouldTruncateMessage(message.messageText) && !expandedMessages.has(message.id)}
                    {message.messageText.slice(0, MESSAGE_TRUNCATE_LENGTH)}...
                    <button
                      class="see-more-btn {message.senderId === currentUserId ? 'text-primary-content' : 'text-neutral'} hover:opacity-80 text-sm ml-1 font-medium underline"
                      on:click|stopPropagation={() => toggleMessageExpansion(message.id)}
                    >
                      {$t('see_more')}
                    </button>
                  {:else}
                    {message.messageText}
                    {#if shouldTruncateMessage(message.messageText)}
                      <button
                        class="see-more-btn {message.senderId === currentUserId ? 'text-primary-content' : 'text-neutral'} hover:opacity-80 text-sm ml-1 font-medium underline"
                        on:click|stopPropagation={() => toggleMessageExpansion(message.id)}
                      >
                        {$t('see_less')}
                      </button>
                    {/if}
                  {/if}

                  <!-- Menu Button -->
                  <button
                    data-menu-button
                    class="absolute bottom-1 right-1 w-6 h-6 rounded-full flex items-center justify-center hover:bg-black/10"
                    on:click|stopPropagation={() => {
                      activeMessageId = activeMessageId === message.id ? null : message.id;
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>

                  <!-- Popup Menu -->
                  {#if activeMessageId === message.id}
                    <div
                      data-menu-content
                      class="absolute bg-base-100 shadow-lg rounded-lg p-2 min-w-[150px] z-50"
                      style="bottom: 100%; right: 0; margin-bottom: 8px;"
                    >
                      <button
                        class="w-full text-left px-4 py-2 hover:bg-base-200 text-base-content rounded flex items-center gap-2"
                        on:click={() => {
                          replyToMessage(message.id);
                          closeMenu();
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        {$t('reply')}
                      </button>

                      {#if message.senderId === currentUserId}
                        <button
                          class="w-full text-left px-4 py-2 hover:bg-base-200 text-base-content rounded flex items-center gap-2"
                          on:click={() => {
                            startEditing(message);
                            closeMenu();
                          }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                          </svg>
                          {$t('edit')}
                        </button>
                        <button
                          class="w-full text-left px-4 py-2 hover:bg-base-200 text-error rounded flex items-center gap-2"
                          on:click={() => {
                            deleteMessage(message.id);
                            closeMenu();
                          }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                          </svg>
                          {$t('delete')}
                        </button>
                      {/if}

                      <!-- Copy Text Option -->
                      <button
                        class="w-full text-left px-4 py-2 hover:bg-base-200 text-base-content rounded flex items-center gap-2"
                        on:click={() => {
                          navigator.clipboard.writeText(message.messageText);
                          closeMenu();
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
                          <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z" />
                        </svg>
                        {$t('copy_text')}
                      </button>

                      <!-- Report Option -->
                      <button
                        class="w-full text-left px-4 py-2 hover:bg-base-200 text-warning rounded flex items-center gap-2"
                        on:click={() => {
                          // Add report logic here
                          closeMenu();
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                        </svg>
                        {$t('report')}
                      </button>
                    </div>
                  {/if}
                {/if}
              </div>
              {/if}
              <div class="chat-footer opacity-50 flex items-center gap-2 text-xs">
                <time>{formatDate(message.createdAt)}</time>
                {#if message.editedAt}
                  <span>(edited)</span>
                {/if}
                <span class="ml-1">
                  {message.status === 'seen' ? '✓✓' : '✓'}
                </span>
              </div>
            </div>
          {/each}
        </div>

        {#if showScrollButton}
          <button
            class="btn btn-circle btn-primary fixed bottom-24 right-8"
            on:click={scrollToBottom}
            aria-label={$t('scroll_to_bottom')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        {/if}

        <!-- Input section at bottom -->
        <div class="border-t border-base-200 pt-4 mt-auto">
          {#if replyingToId}
            <div class="alert alert-info mb-2">
              <span>{$t('replying_to')}: {getReplyingToMessage(replyingToId)?.messageText.substring(0, 50)}...</span>
              <button class="btn btn-xs btn-ghost" on:click={() => replyingToId = null}>{$t('cancel')}</button>
            </div>
          {/if}
          <form
            on:submit|preventDefault={sendMessage}
            class="flex gap-2"
          >
            <textarea
              bind:value={newMessage}
              class="textarea textarea-bordered flex-1 bg-base-200 focus:outline-none focus:ring-2 focus:ring-primary/20 min-h-[2.5rem] max-h-[150px] resize-none"
              placeholder={$t('type_message')}
              disabled={loading}
              rows="1"
              on:keydown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              on:input={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = 'auto';
                const newHeight = Math.min(target.scrollHeight, 150);
                target.style.height = `${newHeight}px`;
              }}
            />
            <button
              type="submit"
              class="btn btn-primary self-end"
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
  {/if}
</div>

<style>
  .chat-bubble {
    max-width: 80%;
    word-break: break-word;
    white-space: pre-wrap; /* This preserves line breaks in the messages */
  }

  /* Override default DaisyUI chat bubble colors */
  :global(.chat-bubble) {
    background-color: theme('colors.base-200') !important;
    color: theme('colors.neutral') !important;
  }

  :global(.dark .chat-bubble) {
    background-color: theme('colors.base-300') !important;
    color: theme('colors.base-100') !important;
  }

  :global(.chat-end .chat-bubble) {
    background-color: theme('colors.primary') !important;
    color: theme('colors.base-100') !important;
  }

  :global(.chat-bubble) {
    max-width: 80%;
    word-break: break-word;
    padding-bottom: 1.5rem; /* Add space for the popup button */
  }

  :global(.chat-bubble) {
    max-width: 80%;
    word-break: break-word;
    user-select: none; /* Prevents text selection during long press */
    touch-action: none; /* Prevents scrolling during long press */
  }

  :global(.chat-bubble) {
    max-width: 80%;
    word-break: break-word;
    position: relative; /* Ensure relative positioning for absolute children */
  }

  /* Add a small triangle/arrow to the popup menu */
  :global(.chat-bubble .absolute::after) {
    content: '';
    position: absolute;
    bottom: -8px;
    right: 16px;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid hsl(var(--b1));
  }

  /* Position the arrow based on message sender */
  :global(.chat-end .absolute::after) {
    right: 16px;
  }

  :global(.chat-start .absolute::after) {
    left: 16px;
  }

  .btn-circle {
    transition: transform 0.2s, opacity 0.2s;
  }

  .btn-circle:hover {
    transform: translateY(-2px);
  }

  textarea {
    overflow-y: auto;
    line-height: 1.5;
    padding: 0.5rem;
  }

  :global(.chat-bubble) {
    white-space: pre-wrap;
    word-break: break-word;
  }

  :global(.chat-bubble button) {
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  :global(.see-more-btn) {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: inherit;
    transition: opacity 0.2s;
  }

  /* For dark mode support */
  :global(.dark .chat-start .see-more-btn) {
    color: theme('colors.base-100');
  }

  :global(.chat-end .text-4xl) {
    margin-left: 0.5rem;
  }

  :global(.chat-start .text-4xl) {
    margin-right: 0.5rem;
  }
</style>
