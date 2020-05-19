import VueI18n from 'vue-i18n';
import { VueI18nPhraseFormatter } from '../../index';

describe('interpolate', () => {
    const msg = 'some message';
    const prefix = '[[__';
    const suffix = '__]]';
    const values: string[] = [];
    const msgPath = 'some.message';
    let formatter: VueI18n.Formatter;
    beforeEach(() => {
        formatter = new VueI18nPhraseFormatter({ prefix, suffix });
    });

    it('should add prefix & suffix to interpolated message path', () => {
        expect(formatter.interpolate(msg, values, msgPath)).toEqual([prefix, 'phrase_', msgPath, suffix]);
    });
});
