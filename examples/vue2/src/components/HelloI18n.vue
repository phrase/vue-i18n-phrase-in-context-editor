<template>
  <div>
    <h2>{{ $t('title') }}</h2>
    <h3>{{ $t('headline') }}</h3>
    <p>{{ $tc('intro', 1) }}</p>
    <p v-t="{path: 'text'}"></p>

    <i18n path="text" tag="p"></i18n>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class HelloI18n extends Vue {
}
</script>

<i18n>
{
  "en": {
    "title": "Dummy title",
    "headline": "",
    "intro": "",
    "text": ""
  }
}
</i18n>
