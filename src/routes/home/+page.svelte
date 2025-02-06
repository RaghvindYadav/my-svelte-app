<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { user } from '$lib/stores/user';
  import { query } from '$lib/apollo/hooks';
  import { FIND_CHANNELS_QUERY } from '$lib/apollo/operations';
  import NavBar from '$lib/components/NavBar.svelte';

  let channels: any[] = [];
  let loading = true;
  let error: string | null = null;

  function handleLogout() {
    user.clearUser();
    goto('/signin');
  }

  function getChannelTitle(channel: any) {
    if (!channel?.participants) return 'Unknown';
    if (channel.participants.length === 2) {
      const otherParticipant = channel.participants.find(
        (p: any) => p?.id !== $user?.userId
      );
      const metadata = otherParticipant?.metadata;
      return metadata ? `${metadata.firstName} ${metadata.lastName}`.trim() : 'Unknown User';
    }
    return channel.name || 'Group Chat';
  }

  function formatDate(dateString: string) {
    try {
      return new Date(dateString).toLocaleDateString();
    } catch {
      return '';
    }
  }

  async function loadChannels() {
    try {
      loading = true;
      error = null;
      const data = await query(FIND_CHANNELS_QUERY, {
        userId: $user?.userId
      });
      console.log('Channels data:', data); // Add this debug log
      channels = data?.findChannelsForUser?.filter(
        (channel: any) => !channel?.isArchivedForMe
      ) || [];
    } catch (err) {
      console.error('Error loading channels:', err); // Add this debug log
      error = err instanceof Error ? err.message : 'Failed to load channels';
    } finally {
      loading = false;
    }
  }

  onMount(() => {
    if (!$user) {
      goto('/signin');
    } else {
      loadChannels();
    }
  });

  function createInitialsDiv(initials: string): HTMLDivElement {
    const div = document.createElement('div');
    div.className = "bg-primary text-primary-content flex items-center justify-center w-full h-full";
    div.textContent = initials.toUpperCase();
    return div;
  }
</script>

<NavBar />

<div class="max-w-3xl mx-auto p-4 space-y-4">
  {#if error}
    <div class="alert alert-error">
      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>{error}</span>
    </div>
  {/if}

  {#if loading}
    <div class="flex justify-center py-8">
      <span class="loading loading-spinner loading-lg"></span>
    </div>
  {:else}
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-base-content">Chats</h1>
      <a href="/find-users" class="btn btn-primary btn-sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
        New Chat
      </a>
    </div>

    <div class="space-y-2">
      {#each channels as channel}
        <button
          type="button"
          class="w-full p-4 hover:bg-base-200 bg-base-100 transition-all duration-200 flex items-center gap-4 focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg border border-base-200 shadow-sm"
          on:click={() => goto(`/chat/${channel?.id}`)}
        >
          <div class="avatar flex-shrink-0">
            <div class="w-12 h-12 rounded-full ring ring-primary/20 ring-offset-base-100 ring-offset-2">
              {#if channel?.participants?.length === 2}
                {@const participant = channel.participants.find((p: any) => p?.id !== $user?.userId)}
                {#if participant?.metadata?.avatarUrl}
                  <img
                    src={participant.metadata.avatarUrl}
                    alt="Avatar"
                    class="w-full h-full object-cover rounded-full"
                  />
                {:else}
                  <div class="bg-primary/10 text-primary rounded-full w-full h-full flex items-center justify-center">
                    <span class="text-lg font-medium">
                      {participant?.metadata?.firstName?.[0] || '?'}
                      {participant?.metadata?.lastName?.[0] || ''}
                    </span>
                  </div>
                {/if}
              {:else}
                <div class="bg-primary/10 text-primary rounded-full w-full h-full flex items-center justify-center">
                  <span class="text-lg font-medium">{getChannelTitle(channel).charAt(0)}</span>
                </div>
              {/if}
            </div>
          </div>
          <div class="flex-1 text-left">
            <h3 class="font-medium text-base-content">{getChannelTitle(channel)}</h3>
            {#if channel?.latestMessage}
              <p class="text-sm text-base-content/70 line-clamp-1 mt-0.5">
                {channel.latestMessage.messageText}
              </p>
              <span class="text-xs text-base-content/50 mt-1 block">
                {formatDate(channel.latestMessage.createdAt)}
              </span>
            {/if}
          </div>
        </button>
      {/each}
    </div>
  {/if}
</div>

<style>
  /* Remove all styles since we're using Tailwind/DaisyUI classes */
</style>
