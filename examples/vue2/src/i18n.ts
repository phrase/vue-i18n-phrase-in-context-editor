import Vue from 'vue'
import VueI18n, { IVueI18n, LocaleMessages } from 'vue-i18n'
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

const vueI18n = new VueI18n({ // vue-i18n >= 9.x.x doesn't support this way of instantiation, please use `createI18n` instead
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages()
});

new VueI18nPhraseInContextEditor(vueI18n, {
  phraseEnabled: true,
  projectId: '00000000000000004158e0858d2fa45c',
  accountId: '0bed59e5'
});

// Basic support for composable methods
const interpolate = (s: string | number) => {
  return (vueI18n as unknown as Vue['$i18n'])
      ?.formatter?.interpolate('', undefined, s.toString())?.join('');
};

const isPhraseEnabled = () => {
  return (globalThis as unknown as {PHRASEAPP_ENABLED: boolean}).PHRASEAPP_ENABLED;
};

type TFuncParams = (VueI18n & IVueI18n)['t']
const usePhraseI18n = (intl: VueI18n & IVueI18n) => {
  return {
      ...intl,
      t: (...args: TFuncParams[]) => {
        return isPhraseEnabled()
        ? interpolate(args[0] as unknown as string | number) : intl.t(args[0] as unknown as string, args[1] as unknown as string, ...args.slice(2))
      },
  };
};

export { usePhraseI18n };

export default vueI18n
