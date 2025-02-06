<script lang="ts">
  import { goto } from '$app/navigation';
</script>

<div class="min-h-screen bg-base-200 flex items-center justify-center px-4">
  <div class="card bg-base-100 shadow-xl">
    <div class="card-body text-center">
      <h1 class="card-title text-2xl font-bold justify-center mb-4">You're Offline</h1>
      <p class="mb-6">Please check your internet connection and try again.</p>
      <button class="btn btn-primary" on:click={() => goto('/')}>Try Again</button>
    </div>
  </div>
</div>
