(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{310:function(t,s,a){"use strict";a.r(s);var e=a(14),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),s("h2",{attrs:{id:"vuei18nphrase"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuei18nphrase"}},[t._v("#")]),t._v(" VueI18nPhrase")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("VueI18nPhrase")]),t._v(" class is the first-class citizen of our library and the main point of interaction between the "),s("strong",[t._v("Vue I18n Phrase In-Context Editor")]),t._v(" and the "),s("a",{attrs:{href:"https://kazupon.github.io/vue-i18n/",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[t._v("Vue I18n")]),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"constructor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#constructor"}},[t._v("#")]),t._v(" Constructor")]),t._v(" "),s("p",[s("em",[t._v("constructor")]),t._v("(\n"),s("strong",[t._v("vueI18n")]),t._v(": "),s("a",{attrs:{href:"https://kazupon.github.io/vue-i18n/api/#vuei18n-class",target:"_blank",rel:"noopener noreferrer"}},[s("Badge",{attrs:{text:"Vue['$i18n']",vertical:"middle"}}),s("OutboundLink")],1),t._v(",\n"),s("strong",[t._v("options")]),t._v(": "),s("a",{attrs:{href:"#vuei18nphraseoptions"}},[s("Badge",{attrs:{text:"VueI18nPhraseOptions",vertical:"middle"}})],1),t._v("\n)")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[s("strong",[t._v("options")]),t._v(" argument is assigned to the component using "),s("a",{attrs:{href:"#config"}},[s("code",[t._v("config setter")])])])]),t._v(" "),s("p",[s("a",{attrs:{name:"config"}})]),t._v(" "),s("h3",{attrs:{id:"properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),s("ul",[s("li",[s("h4",{attrs:{id:"vuei18n"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuei18n"}},[t._v("#")]),t._v(" vueI18n: "),s("a",{attrs:{href:"https://kazupon.github.io/vue-i18n/api/#vuei18n-class",target:"_blank",rel:"noopener noreferrer"}},[s("Badge",{attrs:{text:"Vue['$i18n']",vertical:"middle"}}),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("h4",{attrs:{id:"config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#config"}},[t._v("#")]),t._v(" config: "),s("a",{attrs:{href:"#phraseconfig"}},[s("Badge",{attrs:{text:"PhraseConfig",vertical:"middle"}})],1)])]),t._v(" "),s("li",[s("h4",{attrs:{id:"phraseenabled-property-controlling-the-status-of-the-in-context-editor-propagates-the-change-to-globalthis-phraseapp-enabled"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#phraseenabled-property-controlling-the-status-of-the-in-context-editor-propagates-the-change-to-globalthis-phraseapp-enabled"}},[t._v("#")]),t._v(" phraseEnabled: "),s("Badge",{attrs:{text:"boolean",vertical:"middle"}}),s("span",{staticClass:"fw-normal"},[t._v(" - property controlling the status of the In-Context Editor. Propagates the change to "),s("code",[t._v("globalThis.PHRASEAPP_ENABLED")]),t._v(".")])],1)])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("If the "),s("strong",[t._v("In-Context Editor")]),t._v(" is not yet loaded, changing "),s("code",[t._v("phraseEnabled")]),t._v(" to "),s("code",[t._v("true")]),t._v(" will trigger loading of the minified js source of the "),s("strong",[t._v("In-Context Editor")]),t._v(".")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Whenever disabled, the "),s("strong",[t._v("Vue I18n Phrase In-Context Editor")]),t._v(" will try to bring back the original "),s("strong",[t._v("Vue I18n")]),t._v(" formatter. For more information on how the formatters are being handled, please head to the "),s("RouterLink",{attrs:{to:"/guide/"}},[t._v("introduction")]),t._v(".")],1)]),t._v(" "),s("h2",{attrs:{id:"vuei18nphraseoptions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuei18nphraseoptions"}},[t._v("#")]),t._v(" VueI18nPhraseOptions")]),t._v(" "),s("p",[t._v("Partial type of the "),s("a",{attrs:{href:"#phraseconfig"}},[s("Badge",{attrs:{text:"PhraseConfig",vertical:"middle"}})],1),t._v(" with only 2 properties required: "),s("code",[t._v("phraseEnabled")]),t._v(" and "),s("code",[t._v("projectId")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"vuei18nphraseformatter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuei18nphraseformatter"}},[t._v("#")]),t._v(" VueI18nPhraseFormatter")]),t._v(" "),s("p",[t._v("Implements "),s("a",{attrs:{href:"https://github.com/kazupon/vue-i18n/blob/master/types/index.d.ts#L83",target:"_blank",rel:"noopener noreferrer"}},[s("Badge",{attrs:{text:"Formatter",vertical:"middle"}}),t._v(" interface"),s("OutboundLink")],1),t._v(". When installing the plugin, instance of this class is being used as "),s("strong",[t._v("Vue I18n")]),t._v("'s "),s("a",{attrs:{href:"https://kazupon.github.io/vue-i18n/api/#formatter",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("formatter")]),t._v(" property"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"constructor-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#constructor-2"}},[t._v("#")]),t._v(" Constructor")]),t._v(" "),s("p",[s("em",[t._v("constructor")]),t._v("(\n"),s("strong",[t._v("options")]),t._v(": "),s("a",{attrs:{href:"#vuei18nphraseformatteroptions"}},[s("Badge",{attrs:{text:"VueI18nPhraseFormatterOptions",vertical:"middle"}})],1),t._v("\n)")]),t._v(" "),s("h3",{attrs:{id:"properties-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties-2"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),s("ul",[s("li",[s("h4",{attrs:{id:"prefix-prefix-added-to-the-interpolated-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prefix-prefix-added-to-the-interpolated-message"}},[t._v("#")]),t._v(" prefix: "),s("Badge",{attrs:{text:"string",vertical:"middle"}}),s("span",{staticClass:"fw-normal"},[t._v(" - prefix added to the interpolated message.")])],1)]),t._v(" "),s("li",[s("h4",{attrs:{id:"suffix-suffix-added-to-the-interpolated-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#suffix-suffix-added-to-the-interpolated-message"}},[t._v("#")]),t._v(" suffix: "),s("Badge",{attrs:{text:"string",vertical:"middle"}}),s("span",{staticClass:"fw-normal"},[t._v(" - suffix added to the interpolated message.")])],1)])]),t._v(" "),s("h3",{attrs:{id:"methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),s("ul",[s("li",[s("em",[t._v("interpolate")]),t._v("(\n"),s("strong",[t._v("message")]),t._v(": "),s("Badge",{attrs:{text:"string",vertical:"middle"}}),t._v(",\n"),s("strong",[t._v("values")]),t._v(": "),s("Badge",{attrs:{text:"unknown[]",vertical:"middle"}}),t._v(",\n"),s("strong",[t._v("path")]),t._v(": "),s("Badge",{attrs:{text:"string",vertical:"middle"}}),t._v("\n): "),s("Badge",{attrs:{text:"string[]",vertical:"middle"}})],1)]),t._v(" "),s("h2",{attrs:{id:"vuei18nphraseformatteroptions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuei18nphraseformatteroptions"}},[t._v("#")]),t._v(" VueI18nPhraseFormatterOptions")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[t._v("prefix"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\nsuffix"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n")])])]),s("h2",{attrs:{id:"phraseconfig"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#phraseconfig"}},[t._v("#")]),t._v(" PhraseConfig")]),t._v(" "),s("p",[t._v("Type describing all possible "),s("strong",[t._v("Phrase In-Context Editor")]),t._v(" config options. Further details "),s("a",{attrs:{href:"https://help.phrase.com/help/configure-in-context-editor",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[t._v("phraseEnabled"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbaseUrl"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nprofileUrl"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napiBaseUrl"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\noauthEndpointUrl"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nhelpUrl"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlogoUrl"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nstylesheetUrl"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nversion"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\npriorityLocales"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nprojectId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbranch"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\najaxObserver"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndebugMode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nprefix"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{{__'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsuffix"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__}}'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nautoLowercase"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nforceLocale"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nloginDialogMessage"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nautoLogin"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    perform"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    email"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    password"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsso"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    enabled"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    enforced"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    provider"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    identifier"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfullReparse"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsanitize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);