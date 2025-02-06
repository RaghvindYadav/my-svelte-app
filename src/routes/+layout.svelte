
<script lang="ts">
  import "../app.css";
  import '$lib/i18n';
  import { waitLocale } from 'svelte-i18n';
</script>

{#await waitLocale()}
  <div class="min-h-screen flex items-center justify-center">
    <span class="loading loading-spinner loading-lg"></span>
  </div>
{:then}
  <slot />
{/await}
