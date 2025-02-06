import { init, register, locale, getLocaleFromNavigator } from 'svelte-i18n';

register('en', () => import('./en.json'));
register('de', () => import('./de.json'));
register('hi', () => import('./hi.json'));
register('ar', () => import('./ar.json')); // Add Arabic

const initI18n = () => {
  let initialLocale = 'en';

  if (typeof window !== 'undefined') {
    const savedLocale = localStorage.getItem('preferred-locale');
    if (savedLocale && ['en', 'de', 'hi', 'ar'].includes(savedLocale)) { // Add Arabic to the array
      initialLocale = savedLocale;
    } else {
      const browserLocale = getLocaleFromNavigator()?.split('-')[0];
      if (browserLocale && ['en', 'de', 'hi', 'ar'].includes(browserLocale)) { // Add Arabic here too
        initialLocale = browserLocale;
      }
    }

    // Set RTL direction for Arabic
    document.documentElement.dir = initialLocale === 'ar' ? 'rtl' : 'ltr';
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
      document.documentElement.dir = value === 'ar' ? 'rtl' : 'ltr';
    }
  });
}