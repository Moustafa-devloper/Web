import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

export const locales = ['en', 'ar'] as const;
export type Locale = (typeof locales)[number];

export function isValidLocale(locale: string) {
  return locales.includes(locale as Locale);
}

export async function getLocaleMessages(locale: string) {
  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = (await import(`@/messages/${locale}.json`)).default;
  return messages;
}

export default getRequestConfig(async ({ locale }) => {
  const safeLocale = locale || 'en';

  if (!isValidLocale(safeLocale)) {
    return {
      locale: 'en',
      messages: await import('@/messages/en.json').then((module) => module.default),
    };
  }

  return {
    locale: safeLocale,
    messages: await import(`@/messages/${safeLocale}.json`).then((module) => module.default),
  };
});
