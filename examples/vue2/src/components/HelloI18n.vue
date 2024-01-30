<template>
  <div>
    <h2>{{ $data.t('hero_title') }}</h2>
    <h3>{{ $data.t('headline') }}</h3>
    <h3>{{ $data.t('hero_link_docs') }}</h3>
    <p v-t="{path: 'text'}"></p>

    <i18n path="text" tag="p"></i18n>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { usePhraseI18n } from '../i18n'
import VueI18n, { IVueI18n } from 'vue-i18n';

@Component({
  data: function () {
    const { t } = usePhraseI18n(this.$i18n as VueI18n & IVueI18n )
    return { t }
  },
})
export default class HelloI18n extends Vue {}
</script>

<i18n>
{
  "en": {
    "hero_title": "Dummy title",
    "headline": "",
    "hero_link_docs": "",
    "text": ""
  }
}
</i18n>
