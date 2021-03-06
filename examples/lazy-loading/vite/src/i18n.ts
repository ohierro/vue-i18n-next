import { createI18n } from 'vue-i18n'
import type { I18n, Locale } from 'vue-i18n'

import en from './locales/en'

export function setupI18n(locale: Locale = 'en'): I18n {
  const i18n = createI18n({
    locale,
    fallbackLocale: 'en',
    messages: {
      en
    }
  }) as I18n
  setI18nLanguage(i18n, locale)
  return i18n
}

export function setI18nLanguage(i18n: I18n, locale: Locale): void {
  i18n.global.locale.value = locale
  /**
   * NOTE:
   * If you need to specify the language setting for headers, such as the `fetch` API, set it here.
   * The following is an example for axios.
   *
   * axios.defaults.headers.common['Accept-Language'] = locale
   */
  document.querySelector('html').setAttribute('lang', locale)
}
