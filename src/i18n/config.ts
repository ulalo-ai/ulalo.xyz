export type Locale = (typeof locales)[number];

export const locales = ['en', 'fr', 'es', 'nl', 'ge'] as const;
export const defaultLocale: Locale = 'en'