<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { mutate } from '$lib/apollo/hooks';
  import { SIGN_UP_MUTATION } from '$lib/apollo/operations';
  import { user } from '$lib/stores/user';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';

  let firstName = '';
  let lastName = '';
  let email = '';
  let password = '';
  let confirmPassword = '';
  let error = '';
  let loading = false;

  onMount(() => {
    // Check if user is already logged in
    if ($user) {
      goto('/home');
    }
  });

  async function handleSubmit() {
    if (password !== confirmPassword) {
      error = 'Passwords do not match';
      return;
    }

    try {
      loading = true;
      error = '';

      const result = await mutate(SIGN_UP_MUTATION, {
        input: {
          firstName,
          lastName,
          email,
          password
        }
      });

      const userData = result.signUpUser;
      user.setUser(userData);
      goto('/find-users');
    } catch (err) {
      error = err instanceof Error ? err.message : 'An error occurred during sign up';
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

    <!-- Sign up card -->
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title text-2xl font-bold text-center mb-6">Sign Up</h2>

        {#if error}
          <div class="alert alert-error mb-4">
            <span>{error}</span>
          </div>
        {/if}

        <form on:submit|preventDefault={handleSubmit} class="space-y-4">
          <div class="form-control">
            <label class="label" for="firstName">
              <span class="label-text">First Name</span>
            </label>
            <input
              type="text"
              id="firstName"
              bind:value={firstName}
              class="input input-bordered w-full"
              placeholder="Enter your first name"
              required
              disabled={loading}
            />
          </div>

          <div class="form-control">
            <label class="label" for="lastName">
              <span class="label-text">Last Name</span>
            </label>
            <input
              type="text"
              id="lastName"
              bind:value={lastName}
              class="input input-bordered w-full"
              placeholder="Enter your last name"
              required
              disabled={loading}
            />
          </div>

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
          </div>

          <div class="form-control">
            <label class="label" for="confirmPassword">
              <span class="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              id="confirmPassword"
              bind:value={confirmPassword}
              class="input input-bordered w-full"
              placeholder="Confirm your password"
              required
              disabled={loading}
            />
          </div>

          <div class="form-control mt-6">
            <button type="submit" class="btn btn-primary w-full" disabled={loading}>
              {#if loading}
                <span class="loading loading-spinner"></span>
              {/if}
              {loading ? 'Signing up...' : 'Sign Up'}
            </button>
          </div>

          <div class="text-center mt-4">
            Already have an account?
            <a href="/signin" class="link link-primary ml-1">
              Sign in
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

<style>
  /* Add any component-specific styles here if needed */
</style>
