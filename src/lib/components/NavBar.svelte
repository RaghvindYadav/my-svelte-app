<script lang="ts">
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { user } from '$lib/stores/user';
  import ThemeToggle from './ThemeToggle.svelte';

  function handleSignOut() {
    user.clearUser();
    goto('/signin');
  }
</script>

<div class="navbar bg-base-100 border-b border-base-200 sticky top-0 z-50 backdrop-blur-sm bg-base-100/80">
  <div class="navbar-start">
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1 gap-2">
        <li>
          <a
            href="/home"
            class="flex items-center gap-2 rounded-lg transition-all duration-200 {$page.url.pathname === '/home' ? 'bg-primary/10 text-primary font-medium' : 'text-base-content hover:bg-base-200'}"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </a>
        </li>
        <li>
          <a
            href="/invitations"
            class="flex items-center gap-2 rounded-lg transition-all duration-200 {$page.url.pathname === '/invitations' ? 'bg-primary/10 text-primary font-medium' : 'text-base-content hover:bg-base-200'}"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Invitations
          </a>
        </li>
      </ul>
    </div>
  </div>

  <div class="navbar-end">
    <div class="flex items-center gap-4">
      <ThemeToggle />
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <div class="bg-primary text-primary-content rounded-full w-full h-full flex items-center justify-center">
              <span class="text-lg">{($user?.email && $user.email.length > 0) ? $user.email[0].toUpperCase() : '?'}</span>
            </div>
          </div>
        </label>
        <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-52">
          <li>
            <button on:click={handleSignOut} class="text-error">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Sign out
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

<style>
  /* Smooth transitions */
  .menu a {
    transition: all 0.2s ease;
  }

  /* Remove default daisyUI focus styles */
  .menu :global(li > *:focus) {
    outline: none;
  }

  /* Custom focus styles */
  .menu a:focus-visible {
    outline: 2px solid hsl(var(--p));
    outline-offset: 2px;
  }
</style>
