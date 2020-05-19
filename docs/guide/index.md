# Introduction

**Vue I18n Phrase In-Context Editor** is a simple yet powerful package which helps you integrating [Phrase In-Context Editor](https://phrase.com/blog/posts/use-phrase-in-context-editor) into your existing VueJS app. The one and only prerequisite is to use awesome [Vue I18n](https://kazupon.github.io/vue-i18n/) library to handle all translation-related logic in your web application.

## Why

Haven't you always wanted to allow the translators edit the content directly within your application? Well, you're in luck, because now you can do that with [Phrase In-Context Editor](https://help.phrase.com/help/translate-directly-on-your-website). Our library allows you to write the text strings directly when clicking through the production-ready application. So, there is now way to get the translations of the context.

## How does it work

Let's say you have an application using [Vue I18n](https://www.npmjs.com/package/vue-i18n). Whenever installed and properly included, **Vue I18n Phrase In-Context Editor** hooks up directly with the core of **Vue I18n** API and works as a middleware for all your translations. 

Basically, what we do is to override the **Vue I18n**'s `formatter` option the same way as one would do while trying to use a [custom formatter](https://kazupon.github.io/vue-i18n/guide/formatting.html#custom-formatting). With formatter replaced every translation key is being converted into the format understandable by the **Phrase In-Context Editor**. This allows to gather & synchronize texts between [Phrase.com](https://phrase.com/) and your app instance.
