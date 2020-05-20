import type VueI18n from 'vue-i18n';

export type VueI18nPhraseFormatterOptions = {
    prefix: string;
    suffix: string;
};
export class VueI18nPhraseFormatter implements VueI18n.Formatter {
    prefix: string;

    suffix: string;

    constructor(options: VueI18nPhraseFormatterOptions) {
        this.prefix = options.prefix;
        this.suffix = options.suffix;
    }

    interpolate(message: string, values: unknown, path: string) {
        return [this.prefix, 'phrase_', path, this.suffix];
    }
}
