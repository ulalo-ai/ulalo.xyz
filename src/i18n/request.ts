import { getUserLocale } from '@/services/locale';
import { getRequestConfig } from 'next-intl/server';
import { defaultLocale } from '@/i18n/config';

export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  // Always load default locale messages as fallback
  const defaultMessages = (await import(`../../messages/${defaultLocale}.json`)).default;
  
  let messages = defaultMessages;
  
  // If current locale is different from default, merge the messages
  if (locale !== defaultLocale) {
    try {
      const localeMessages = (await import(`../../messages/${locale}.json`)).default;
      // Merge default messages with locale-specific messages
      // Locale-specific messages will override default ones where they exist
      messages = { ...defaultMessages, ...localeMessages };
    } catch (error) {
      console.warn(`Failed to load messages for locale ${locale}, falling back to ${defaultLocale}`, error);
      // messages already contains defaultMessages
    }
  }

  return {
    locale,
    messages
  };
});