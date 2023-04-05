import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VueI18nPhrase from '../../index';

Vue.use(VueI18n);

const projectId = 'some_project_id';
let vueI18n: VueI18n;
let vueI18nPhrase: VueI18nPhrase;
let phraseScript: HTMLScriptElement | null;

beforeEach(() => {
    vueI18n = new VueI18n({});
});
afterEach(() => {
    document.head.innerHTML = '';
    document.body.innerHTML = '';
});

const initializeICE = (options: {phraseEnabled: boolean} = {phraseEnabled: true}) => {
    phraseScript = null;
    vueI18nPhrase = new VueI18nPhrase(vueI18n, {
        projectId,
        phraseEnabled: options.phraseEnabled,
    });
    phraseScript = document.querySelector('script');
};

describe('constructor', () => {
    describe('when phraseEnabled = true', () => {
        it('should add script tag to the document', () => {
            initializeICE();
            expect(phraseScript).not.toBeNull();
        });
        it('should add script tag with phrase url', () => {
            initializeICE();
            expect(phraseScript?.src.substring(0, 19)).toBe('https://phrase.com/');
        });
        it('should add script tag with new ice url', () => {
            const originalLocation = window.location;
            delete window.location;
            window.location = {search: '?editor=v4'} as Location;
            initializeICE();
            
            expect(phraseScript?.src.includes('d2bgdldl6xit7z.cloudfront')).toBe(true);
            window.location = originalLocation;
        });
        it('should set window.PHRASEAPP_ENABLED', () => {
            initializeICE();
            expect(window.PHRASEAPP_ENABLED).toBeTruthy();
        });
        describe('when script element already exists in the document', () => {
            let script: HTMLScriptElement;
            beforeEach(() => {
                phraseScript?.remove();
                script = document.createElement('script');
                document.head.append(script);
                initializeICE();
            });

            it('should add phrase script right before the first script element', () => {
                expect(phraseScript?.nextElementSibling).toBe(script);
            });
        });
    });

    describe('when phraseEnabled = false', () => {
        beforeEach(() => {
            initializeICE({phraseEnabled: false});
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
            initializeICE();
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
        initializeICE();
    });

    it('should return phraseEnabled correctly', () => {
        expect(vueI18nPhrase.phraseEnabled).toBeTruthy();
        vueI18nPhrase.phraseEnabled = false;
        expect(vueI18nPhrase.phraseEnabled).toBeFalsy();
    });
});
