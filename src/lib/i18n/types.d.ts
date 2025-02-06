declare module 'svelte-i18n' {
    export function _(key: string, options?: Record<string, any>): string;
    export function init(options: {
        fallbackLocale: string;
        initialLocale: string;
    }): void;
    export function register(locale: string, loader: () => Promise<any>): void;
    export const t: import('svelte/store').Readable<(key: string, options?: Record<string, any>) => string>;
}
