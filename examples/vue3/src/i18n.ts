import { createI18n, type VueI18n } from 'vue-i18n';
import VueI18nPhraseInContextEditor from 'vue-i18n-phrase-in-context-editor';
import '@sagi.io/globalthis';
import type { LocaleMessages, VueMessageType } from 'vue-i18n';

function loadLocaleMessages (): LocaleMessages<VueMessageType> {
    const locales = import.meta.globEager('./locales/*.json');
    const messages: LocaleMessages<VueMessageType> = {};
    for (const path in locales) {
        // eslint-disable-next-line @typescript-eslint/prefer-regexp-exec
        const matched = path.match(/([A-Za-z0-9-_]+)\./i);
        if (matched && matched.length > 1) {
            const locale = matched[1];
            messages[locale] = locales[path].default;
        }
    }

    return messages;
}

const i18n = createI18n({
    locale: import.meta.env.VITE_VUE_APP_I18N_LOCALE || 'en',
    fallbackLocale: import.meta.env.VITE_VUE_APP_I18N_FALLBACK_LOCALE || 'en',
    allowComposition: true,
    messages: loadLocaleMessages()
});


new VueI18nPhraseInContextEditor(i18n as unknown as Vue['$i18n'], {
    phraseEnabled: true,
    projectId: '00000000000000004158e0858d2fa45c'
});


// Basic support for composable methods
const interpolate = (s: string | number) => {
    return (i18n as unknown as Vue['$i18n'])
        ?.formatter?.interpolate('', undefined, s.toString())?.join('');
};

const isPhraseEnabled = () => {
    return (globalThis as unknown as {PHRASEAPP_ENABLED: boolean}).PHRASEAPP_ENABLED;
};

type TFuncParams = VueI18n['t'];
const usePhraseI18n = (intl: { t: (...args: TFuncParams[])=> unknown}) => {
    return {
        ...intl,
        t: (...args: TFuncParams[]) =>
            isPhraseEnabled()
                ? interpolate(args[0] as unknown as string | number)
                : intl.t(...args),
    };
};

export { usePhraseI18n };
export default i18n;

