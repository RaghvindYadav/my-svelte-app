import { init, register, locale, getLocaleFromNavigator } from 'svelte-i18n';

register('en', () => import('./en.json'));
register('de', () => import('./de.json'));
register('hi', () => import('./hi.json')); // Add Hindi

const initI18n = () => {
  let initialLocale = 'en';

  if (typeof window !== 'undefined') {
    const savedLocale = localStorage.getItem('preferred-locale');
    if (savedLocale && ['en', 'de', 'hi'].includes(savedLocale)) { // Add Hindi to the array
      initialLocale = savedLocale;
    } else {
      const browserLocale = getLocaleFromNavigator()?.split('-')[0];
      if (browserLocale && ['en', 'de', 'hi'].includes(browserLocale)) { // Add Hindi here too
        initialLocale = browserLocale;
      }
    }
  }

  init({
    fallbackLocale: 'en',
    initialLocale,
  });
};

initI18n();

// Subscribe to locale changes
if (typeof window !== 'undefined') {
  locale.subscribe((value) => {
    if (value) {
      document.documentElement.lang = value;
    }
  });
}
