# Introduction

**Vue I18n Phrase In-Context Editor** is a simple yet powerful package which helps you to integrate the [Phrase In-Context Editor](https://phrase.com/blog/posts/use-phrase-in-context-editor) into your existing VueJS app. The one and only prerequisite is to use the awesome [Vue I18n](https://kazupon.github.io/vue-i18n/) library to handle all translation-related logic in your web application.

## Why

Haven't you always wanted to allow translators to edit the content directly within your application? Well, you're in luck, because now you can do that with the [Phrase In-Context Editor](https://help.phrase.com/help/translate-directly-on-your-website). Our library allows you to edit translations while browsing the production-ready application. From now on, you will always see the content right where it belongs.

## How does it work

Let's say you have an application that uses the [Vue I18n](https://www.npmjs.com/package/vue-i18n). Whenever installed and properly included, the **Vue I18n Phrase In-Context Editor** hooks up directly with the core of the **Vue I18n** API and works as a middleware for all your translations.

Basically, what we do is we override the **Vue I18n**'s `formatter` option the same way as one would do while trying to use a [custom formatter](https://kazupon.github.io/vue-i18n/guide/formatting.html#custom-formatting). Our custom formatter ([<Badge text="VueI18nPhraseFormatter" vertical="middle" />](../api#vuei18nphraseformatteroptions)) converts every translation key into the format understandable by the [**Phrase In-Context Editor**](https://help.phrase.com/help/configure-in-context-editor). This allows us to gather an synchronize texts between [Phrase.com](https://phrase.com/) and your app.
