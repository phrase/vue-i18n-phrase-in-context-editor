import '@sagi.io/globalthis';
import { DeepPartial } from './typings/helpers';
import { VueI18nPhraseFormatter } from './vue-i18n-phrase-formatter';
import { PhraseConfig } from './phrase-config.type';

export type VueI18nPhraseOptions = Omit<DeepPartial<PhraseConfig>, 'phraseEnabled' | 'projectId'> & Pick<PhraseConfig, 'phraseEnabled' | 'projectId'>;

export default class VueI18nPhrase {
    private static defaultConfig: Partial<PhraseConfig> = {
      prefix: '{{__',
      suffix: '__}}',
      fullReparse: true,
    };

    private phraseScript?: HTMLScriptElement;

    private previousVueI18nFormatter!: Vue['$i18n']['formatter'];

    vueI18n!: Vue['$i18n'];

    constructor(vueI18n: Vue['$i18n'], options: VueI18nPhraseOptions) {
      this.vueI18n = vueI18n;
      this.config = { ...globalThis.PHRASEAPP_CONFIG, ...options } as PhraseConfig;
      this.phraseEnabled = options.phraseEnabled;
    }

    private loadInContextEditor() {
      this.phraseScript = document.createElement('script');
      this.phraseScript.type = 'text/javascript';
      this.phraseScript.async = true;
      this.phraseScript.src = `https://phrase.com/assets/in-context-editor/2.0/app.js?${new Date().getTime()}`;
      const script = document.getElementsByTagName('script')[0];
      if (script?.parentNode) {
        script.parentNode.insertBefore(this.phraseScript, script);
      } else {
        document.body.appendChild(this.phraseScript);
      }
    }

    set phraseEnabled(phraseEnabled: boolean) {
      globalThis.PHRASEAPP_ENABLED = phraseEnabled;
      if (phraseEnabled) {
        if (!this.phraseScript) {
          this.loadInContextEditor();
        }

        this.previousVueI18nFormatter = this.vueI18n.formatter;
        this.vueI18n.formatter = new VueI18nPhraseFormatter({
          prefix: this.config.prefix,
          suffix: this.config.suffix,
        });
      } else if (this.previousVueI18nFormatter) {
        this.vueI18n.formatter = this.previousVueI18nFormatter;
      }
    }

    get phraseEnabled() {
      return globalThis.PHRASEAPP_ENABLED;
    }

    set config(options: PhraseConfig) {
      globalThis.PHRASEAPP_CONFIG = { ...VueI18nPhrase.defaultConfig, ...options };
    }

    get config() {
      return globalThis.PHRASEAPP_CONFIG;
    }
}
