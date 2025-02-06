<script lang="ts">
  import { locale, t } from 'svelte-i18n';

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'de', name: 'Deutsch' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'ar', name: 'العربية' },
  ];

  function changeLocale(newLocale: string) {
    locale.set(newLocale);
    localStorage.setItem('preferred-locale', newLocale);
  }
</script>

<div class="dropdown dropdown-end">
  <label tabindex="0" class="btn btn-ghost btn-sm normal-case">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
    </svg>
    {#if $locale === 'en'}
      English
    {:else if $locale === 'de'}
      Deutsch
    {:else if $locale === 'hi'}
      हिंदी
    {:else}
      العربية
    {/if}
  </label>
  <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-2">
    {#each languages as { code, name }}
      <li>
        <button
          class="btn btn-ghost btn-sm justify-start {$locale === code ? 'text-primary' : ''}"
          on:click={() => changeLocale(code)}
        >
          {name}
        </button>
      </li>
    {/each}
  </ul>
</div>