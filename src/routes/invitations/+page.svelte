<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { user } from '$lib/stores/user';
  import { query, mutate } from '$lib/apollo/hooks';
  import {
    FIND_CHANNEL_INVITATIONS_QUERY,
    ACCEPT_CHANNEL_INVITATION_MUTATION,
    DECLINE_CHANNEL_INVITATION_MUTATION
  } from '$lib/apollo/operations';
  import NavBar from '$lib/components/NavBar.svelte';

  let selectedTab = 'received';

  interface Invitation {
    id: string;
    status: 'created' | 'accepted' | 'declined' | 'unset';
    messageText: string;
    createdAt: string;
    createdBy: string;
    sender: {
      avatarUrl: string;
      firstName: string;
      lastName: string;
      email: string;
    };
    recipient: {
      avatarUrl: string;
      firstName: string;
      lastName: string;
      email: string;
    };
  }

  let invitations: Invitation[] = [];
  let loading = false;
  let error: string | null = null;

  function getDisplayUser(invitation: Invitation) {
    return invitation.createdBy === $user?.userId ? invitation.recipient : invitation.sender;
  }

  function getInvitationType(invitation: Invitation) {
    return invitation.createdBy === $user?.userId ? 'sent' : 'received';
  }

  async function loadInvitations() {
    try {
      loading = true;
      error = null;
      const data = await query(FIND_CHANNEL_INVITATIONS_QUERY, {
        userId: $user?.userId
      });
      invitations = data.findChannelInvitationsForUser;
    } catch (err) {
      error = err instanceof Error ? err.message : 'Failed to load invitations';
    } finally {
      loading = false;
    }
  }

  async function acceptInvitation(invitationId: string) {
    try {
      loading = true;
      error = null;
      await mutate(ACCEPT_CHANNEL_INVITATION_MUTATION, {
        channelInvitationId: invitationId
      });
      await loadInvitations();
    } catch (err) {
      error = err instanceof Error ? err.message : 'Failed to accept invitation';
    } finally {
      loading = false;
    }
  }

  async function declineInvitation(invitationId: string) {
    try {
      loading = true;
      error = null;
      await mutate(DECLINE_CHANNEL_INVITATION_MUTATION, {
        channelInvitationId: invitationId,
        reasonTextId: 'NOT_INTERESTED'
      });
      await loadInvitations();
    } catch (err) {
      error = err instanceof Error ? err.message : 'Failed to decline invitation';
    } finally {
      loading = false;
    }
  }

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  onMount(() => {
    if (!$user) {
      goto('/signin');
    } else {
      loadInvitations();
    }
  });
</script>

<NavBar />

<div class="container mx-auto px-4 py-8 max-w-3xl">
  <header class="mb-6">
    <h1 class="text-2xl font-bold mb-4">Chat Invitations</h1>
    <div class="tabs tabs-boxed">
      <button
        class="tab {selectedTab === 'received' ? 'tab-active' : ''}"
        on:click={() => selectedTab = 'received'}
      >
        Received Invitations
      </button>
      <button
        class="tab {selectedTab === 'sent' ? 'tab-active' : ''}"
        on:click={() => selectedTab = 'sent'}
      >
        Sent Invitations
      </button>
    </div>
  </header>

  {#if error}
    <div class="alert alert-error">
      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <span>{error}</span>
    </div>
  {/if}

  <div class="space-y-4">
    {#if loading}
      <div class="flex justify-center py-8">
        <span class="loading loading-spinner loading-lg"></span>
      </div>
    {:else if invitations.length === 0}
      <div class="alert alert-info">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span>No invitations found</span>
      </div>
    {:else}
      {#each invitations as invitation}
        {@const displayUser = getDisplayUser(invitation)}
        {@const invitationType = getInvitationType(invitation)}
        {#if invitationType === selectedTab}
          <div class="card bg-base-100 shadow-lg">
            <div class="card-body">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-4">
                  {#if displayUser.avatarUrl}
                    <div class="avatar">
                      <div class="w-12 h-12 rounded-full">
                        <img src={displayUser.avatarUrl} alt="Avatar" />
                      </div>
                    </div>
                  {:else}
                    <div class="avatar placeholder">
                      <div class="bg-neutral text-neutral-content rounded-full w-12">
                        <span>{displayUser.firstName[0]}{displayUser.lastName[0]}</span>
                      </div>
                    </div>
                  {/if}
                  <div>
                    <h3 class="font-bold">{displayUser.firstName} {displayUser.lastName}</h3>
                    <p class="text-sm opacity-70">{formatDate(invitation.createdAt)}</p>
                  </div>
                </div>
                <div class="badge badge-{invitation.status === 'created' ? 'warning' : invitation.status === 'accepted' ? 'success' : 'error'}">
                  {invitation.status}
                </div>
              </div>

              {#if invitation.messageText}
                <p class="mt-4 text-sm opacity-80">{invitation.messageText}</p>
              {/if}

              {#if invitation.status === 'created' && invitationType === 'received'}
                <div class="card-actions justify-end mt-4">
                  <button
                    class="btn btn-error btn-sm"
                    on:click={() => declineInvitation(invitation.id)}
                    disabled={loading}
                  >
                    Decline
                  </button>
                  <button
                    class="btn btn-primary btn-sm"
                    on:click={() => acceptInvitation(invitation.id)}
                    disabled={loading}
                  >
                    Accept
                  </button>
                </div>
              {/if}
            </div>
          </div>
        {/if}
      {/each}
    {/if}
  </div>
</div>

<style>
  /* Add any custom styles here if needed */
</style>
