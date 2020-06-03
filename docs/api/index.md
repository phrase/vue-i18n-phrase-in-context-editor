# API

## VueI18nPhrase

The `VueI18nPhrase` class is the first-class citizen of our library and the main point of interaction between the **Vue I18n Phrase In-Context Editor** and the [**Vue I18n**](https://kazupon.github.io/vue-i18n/).

### Constructor

_constructor_(
    **vueI18n**: [<Badge text="Vue['$i18n']" vertical="middle" />](https://kazupon.github.io/vue-i18n/api/#vuei18n-class),
    **options**: [<Badge text="VueI18nPhraseOptions" vertical="middle" />](#vuei18nphraseoptions)
)

::: tip
**options** argument is assigned to the component using [`config setter`](#config)
:::

<a name="config"></a>

### Properties

- #### vueI18n: [<Badge text="Vue['$i18n']" vertical="middle" />](https://kazupon.github.io/vue-i18n/api/#vuei18n-class)

- #### config: [<Badge text="PhraseConfig" vertical="middle" />](#phraseconfig)

- #### phraseEnabled: <Badge text="boolean" vertical="middle" /><span class="fw-normal"> - property controlling the status of the In-Context Editor. Propagates the change to `globalThis.PHRASEAPP_ENABLED`.</span>

::: warning
If the **In-Context Editor** is not yet loaded, changing `phraseEnabled` to `true` will trigger loading of the minified js source of the **In-Context Editor**.
:::

:::tip
Whenever disabled, the **Vue I18n Phrase In-Context Editor** will try to bring back the original **Vue I18n** formatter. For more information on how the formatters are being handled, please head to the [introduction](../guide/).
:::

## VueI18nPhraseOptions

Partial type of the [<Badge text="PhraseConfig" vertical="middle" />](#phraseconfig) with only 2 properties required: `phraseEnabled` and `projectId`.

## VueI18nPhraseFormatter

Implements [<Badge text="Formatter" vertical="middle" /> interface](https://github.com/kazupon/vue-i18n/blob/master/types/index.d.ts#L83). When installing the plugin, instance of this class is being used as **Vue I18n**'s [`formatter` property](https://kazupon.github.io/vue-i18n/api/#formatter).

### Constructor

_constructor_(
    **options**: [<Badge text="VueI18nPhraseFormatterOptions" vertical="middle" />](#vuei18nphraseformatteroptions)
)

### Properties

- #### prefix: <Badge text="string" vertical="middle" /><span class="fw-normal"> - prefix added to the interpolated message.</span>

- #### suffix: <Badge text="string" vertical="middle" /><span class="fw-normal"> - suffix added to the interpolated message.</span>

### Methods

- _interpolate_(
    **message**: <Badge text="string" vertical="middle" />,
    **values**: <Badge text="unknown[]" vertical="middle" />,
    **path**: <Badge text="string" vertical="middle" />
): <Badge text="string[]" vertical="middle" />

## VueI18nPhraseFormatterOptions

```typescript
prefix: string
suffix: string
```

## PhraseConfig

Type describing all possible **Phrase In-Context Editor** config options.

```typescript
phraseEnabled: boolean;
baseUrl: string;
profileUrl: string;
apiBaseUrl: string;
oauthEndpointUrl: string;
helpUrl: string;
logoUrl: string;
stylesheetUrl: string;
version: string;
priorityLocales: string[];
projectId: string;
branch: string;
ajaxObserver: boolean;
debugMode: boolean;
prefix: string = '{{__';
suffix: string = '__}}';
autoLowercase: boolean;
forceLocale: boolean;
loginDialogMessage: string;
autoLogin: {
    perform: boolean;
    email: string;
    password: string;
};
sso: {
    enabled: boolean;
    enforced: boolean;
    provider: string;
    identifier: string;
};
fullReparse: boolean = true;
```
