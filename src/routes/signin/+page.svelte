<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { mutate } from '$lib/apollo/hooks';
  import { SIGN_IN_MUTATION } from '$lib/apollo/operations';
  import { user } from '$lib/stores/user';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';

  let email = '';
  let password = '';
  let error = '';
  let loading = false;

  onMount(() => {
    // Check if user is already logged in
    if ($user) {
      goto('/home');
    }
  });

  async function handleSubmit() {
    try {
      loading = true;
      error = '';

      const result = await mutate(SIGN_IN_MUTATION, {
        input: {
          ident: email,  // Using email as the ident
          password: password
        }
      });

      const userData = result.signInUser;
      user.setUser(userData);
      goto('/find-users');
    } catch (err) {
      error = err instanceof Error ? err.message : 'An error occurred during sign in';
    } finally {
      loading = false;
    }
  }
</script>

<div class="min-h-screen bg-base-200 flex items-center justify-center px-4">
  <div class="max-w-md w-full">
    <!-- Theme toggle in the top-right corner -->
    <div class="absolute top-4 right-4">
      <ThemeToggle />
    </div>

    <!-- Sign in card -->
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title text-2xl font-bold text-center mb-6">Sign In</h2>

        {#if error}
          <div class="alert alert-error mb-4">
            <span>{error}</span>
          </div>
        {/if}

        <form on:submit|preventDefault={handleSubmit} class="space-y-4">
          <div class="form-control">
            <label class="label" for="email">
              <span class="label-text">Email</span>
            </label>
            <input
              type="email"
              id="email"
              bind:value={email}
              class="input input-bordered w-full"
              placeholder="Enter your email"
              required
              disabled={loading}
            />
          </div>

          <div class="form-control">
            <label class="label" for="password">
              <span class="label-text">Password</span>
            </label>
            <input
              type="password"
              id="password"
              bind:value={password}
              class="input input-bordered w-full"
              placeholder="Enter your password"
              required
              disabled={loading}
            />
            <label class="label">
              <a href="/forgot-password" class="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>

          <div class="form-control mt-6">
            <button type="submit" class="btn btn-primary" disabled={loading}>
              {#if loading}
                <span class="loading loading-spinner"></span>
              {/if}
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </div>

          <div class="text-center text-sm mt-4">
            Don't have an account?
            <a href="/signup" class="link link-primary">
              Sign up
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
