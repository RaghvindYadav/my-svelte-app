<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { user } from '$lib/stores/user';
  import { query, mutate } from '$lib/apollo/hooks';
  import { FIND_USERS_QUERY, CREATE_CHANNEL_INVITATION_MUTATION } from '$lib/apollo/operations';
  import NavBar from '$lib/components/NavBar.svelte';

  let searchText = '';
  let users: any[] = [];
  let loading = false;
  let error: string | null = null;
  let invitationMessage = '';
  let selectedUserId: string | null = null;
  let showInviteModal = false;

  onMount(() => {
    if (!$user) {
      goto('/signin');
    } else {
      searchUsers();
    }
  });

  async function searchUsers() {
    try {
      loading = true;
      error = null;
      const data = await query(FIND_USERS_QUERY, {
        filter: {
          searchText: searchText || null
        }
      });
      users = data.findUsers.filter((u: any) => u.id !== $user?.userId);
    } catch (err) {
      error = err instanceof Error ? err.message : 'Failed to load users';
    } finally {
      loading = false;
    }
  }

  function openInviteModal(userId: string) {
    selectedUserId = userId;
    showInviteModal = true;
  }

  async function sendInvitation() {
    if (!selectedUserId) return;

    try {
      loading = true;
      error = null;
      const result = await mutate(CREATE_CHANNEL_INVITATION_MUTATION, {
        input: {
          messageText: invitationMessage,
          createdBy: $user?.userId,
          recipientId: selectedUserId
        }
      });

      // Redirect to the new chat
      goto(`/chat/${result.createChannelInvitation.channelId}`);
    } catch (err) {
      error = err instanceof Error ? err.message : 'Failed to send invitation';
    } finally {
      loading = false;
      showInviteModal = false;
      invitationMessage = '';
      selectedUserId = null;
    }
  }
</script>

<NavBar />

<div class="container mx-auto px-4 py-8 max-w-3xl">
  <header class="mb-6">
    <h1 class="text-2xl font-bold mb-4">Find Users</h1>
    <div class="form-control">
      <input
        type="text"
        bind:value={searchText}
        placeholder="Search by name..."
        on:input={() => searchUsers()}
        class="input input-bordered w-full"
      />
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
    {:else if users.length === 0}
      <div class="alert alert-info">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span>No users found</span>
      </div>
    {:else}
      {#each users as user}
        <div class="card bg-base-100 shadow-lg">
          <div class="card-body">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-4">
                {#if user.avatarUrl}
                  <div class="avatar">
                    <div class="w-12 h-12 rounded-full">
                      <img src={user.avatarUrl} alt="Avatar" />
                    </div>
                  </div>
                {:else}
                  <div class="avatar placeholder">
                    <div class="bg-neutral text-neutral-content rounded-full w-12">
                      <span>{user.firstName[0]}{user.lastName[0]}</span>
                    </div>
                  </div>
                {/if}
                <div>
                  <h3 class="font-bold">{user.firstName} {user.lastName}</h3>
                  {#if user.cityOfResidence}
                    <p class="text-sm opacity-70">{user.cityOfResidence}</p>
                  {/if}
                  {#if user.profileRole}
                    <p class="text-sm opacity-70">{user.profileRole}</p>
                  {/if}
                </div>
              </div>
              <button
                class="btn btn-primary"
                on:click={() => openInviteModal(user.id)}
              >
                Start Chat
              </button>
            </div>
          </div>
        </div>
      {/each}
    {/if}
  </div>

  {#if showInviteModal}
    <!-- DaisyUI modal -->
    <div class="modal modal-open">
      <div class="modal-box relative">
        <h3 class="font-bold text-lg mb-4">Send Chat Invitation</h3>
        <textarea
          bind:value={invitationMessage}
          placeholder="Add a message (optional)"
          rows="4"
          class="textarea textarea-bordered w-full mb-4"
        ></textarea>
        <div class="modal-action">
          <button
            class="btn btn-ghost"
            on:click={() => {
              showInviteModal = false;
              invitationMessage = '';
            }}
          >
            Cancel
          </button>
          <button
            class="btn btn-primary"
            on:click={sendInvitation}
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Invitation'}
          </button>
        </div>
      </div>
      <div class="modal-backdrop" on:click={() => {
        showInviteModal = false;
        invitationMessage = '';
      }}></div>
    </div>
  {/if}
</div>

<style>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }

  header {
    margin-bottom: 2rem;
  }

  .search-bar {
    margin-top: 1rem;
  }

  .search-bar input {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
  }

  .users-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .user-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #f5f5f5;
    border-radius: 8px;
  }

  .user-info {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .avatar, .avatar-placeholder {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }

  .avatar-placeholder {
    background-color: #4CAF50;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }

  .user-details h3 {
    margin: 0;
    font-size: 1.1rem;
  }

  .location, .role {
    margin: 0.2rem 0;
    color: #666;
    font-size: 0.9rem;
  }

  .invite-btn {
    padding: 0.5rem 1rem;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .invite-btn:hover {
    background-color: #45a049;
  }

  .modal-backdrop {
    @apply bg-black/50 fixed inset-0 z-40;
  }

  .modal-box {
    @apply z-50;
  }

  .modal textarea {
    width: 100%;
    margin: 1rem 0;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    resize: vertical;
  }

  .modal-actions {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }

  .cancel-btn {
    padding: 0.5rem 1rem;
    background-color: #f44336;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .send-btn {
    padding: 0.5rem 1rem;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .error {
    color: #f44336;
    margin-bottom: 1rem;
    padding: 0.5rem;
    background-color: #ffebee;
    border-radius: 4px;
  }

  .loading, .empty {
    text-align: center;
    padding: 2rem;
    color: #666;
  }
</style>
