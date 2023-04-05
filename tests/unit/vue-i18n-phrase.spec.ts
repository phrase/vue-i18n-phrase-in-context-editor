import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VueI18nPhrase from '../../index';

Vue.use(VueI18n);

const projectId = 'some_project_id';
let vueI18n: VueI18n;
let vueI18nPhrase: VueI18nPhrase;

beforeEach(() => {
    vueI18n = new VueI18n({});
});
afterEach(() => {
    document.head.innerHTML = '';
    document.body.innerHTML = '';
});

describe('constructor', () => {
    let phraseScript: HTMLScriptElement | null;

    describe('when phraseEnabled = true', () => {
        beforeEach(() => {
            vueI18nPhrase = new VueI18nPhrase(vueI18n, {
                projectId,
                phraseEnabled: true,
            });
            phraseScript = document.querySelector('script');
        });

        it('should add script tag to the document', () => {
            expect(phraseScript).not.toBeNull();
        });
        it('should add script tag with phrase url', () => {
            expect(phraseScript?.src.substring(0, 19)).toBe('https://phrase.com/');
        });
        it('should add script tag with new ice url', () => {
            window.location = {search: '?editor=v4'} as Location;
            expect(phraseScript?.src.includes('d2bgdldl6xit7z.cloudfront')).toBeTruthy;
        });
        it('should set window.PHRASEAPP_ENABLED', () => {
            expect(window.PHRASEAPP_ENABLED).toBeTruthy();
        });
        describe('when script element already exists in the document', () => {
            let script: HTMLScriptElement;
            beforeEach(() => {
        // eslint-disable-next-line no-unused-expressions
        phraseScript?.remove();
        script = document.createElement('script');
        document.head.append(script);
        vueI18nPhrase = new VueI18nPhrase(vueI18n, {
            projectId,
            phraseEnabled: true,
        });
        phraseScript = document.querySelector('script');
            });

            it('should add phrase script right before the first script element', () => {
                expect(phraseScript?.nextElementSibling).toBe(script);
            });
        });
    });

    describe('when phraseEnabled = false', () => {
        beforeEach(() => {
            vueI18nPhrase = new VueI18nPhrase(vueI18n, {
                projectId,
                phraseEnabled: false,
            });
            phraseScript = document.querySelector('script');
        });

        it('should not add script tag to the document', () => {
            expect(phraseScript).toBeNull();
        });
        it('should set window.PHRASEAPP_ENABLED', () => {
            expect(window.PHRASEAPP_ENABLED).toBeFalsy();
        });
    });
});

describe('phraseEnabled setter', () => {
    describe('when phrase was enabled initially & trying to disable it', () => {
        let originalFormatter: VueI18n.Formatter;
        beforeEach(() => {
            originalFormatter = vueI18n.formatter;
            vueI18nPhrase = new VueI18nPhrase(vueI18n, {
                projectId,
                phraseEnabled: true,
            });
            vueI18nPhrase.phraseEnabled = false;
        });

        it('should revert the original formatter', () => {
            expect(vueI18n.formatter).toBe(originalFormatter);
        });

        describe('when enabling phrase once again', () => {
            beforeEach(() => {
                vueI18nPhrase.phraseEnabled = true;
            });

            it('should not load phrase script anymore', () => {
                expect(document.querySelectorAll('script').length).toBe(1);
            });
        });
    });
});

describe('phraseEnabled getter', () => {
    beforeEach(() => {
        vueI18nPhrase = new VueI18nPhrase(vueI18n, {
            projectId,
            phraseEnabled: true,
        });
    });

    it('should return phraseEnabled correctly', () => {
        expect(vueI18nPhrase.phraseEnabled).toBeTruthy();
        vueI18nPhrase.phraseEnabled = false;
        expect(vueI18nPhrase.phraseEnabled).toBeFalsy();
    });
});
