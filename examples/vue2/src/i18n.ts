import Vue from 'vue'
import VueI18n, { LocaleMessages } from 'vue-i18n'
import VueI18nPhraseInContextEditor from 'vue-i18n-phrase-in-context-editor'

Vue.use(VueI18n)

function loadLocaleMessages (): LocaleMessages {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages: LocaleMessages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

const vueI18n = new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages()
});

new VueI18nPhraseInContextEditor(vueI18n, {
  phraseEnabled: true,
  projectId: '00000000000000004158e0858d2fa45c'
});

export default vueI18n
