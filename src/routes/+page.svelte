<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { user } from '$lib/stores/user';

  onMount(() => {
    if ($user) {
      goto('/home');
    }
  });
</script>

<div class="min-h-screen bg-base-200 flex items-center justify-center px-4">
  <div class="max-w-md w-full text-center">
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h1 class="card-title text-3xl font-bold justify-center mb-6">Welcome to Our App</h1>

        <div class="space-y-4">
          <button class="btn btn-primary w-full" on:click={() => goto('/signin')}>
            Sign In
          </button>
          <button class="btn btn-secondary w-full" on:click={() => goto('/signup')}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
