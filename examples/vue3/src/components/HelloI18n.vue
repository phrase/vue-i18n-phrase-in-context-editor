<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { usePhraseI18n } from  '../i18n';
const { t } = usePhraseI18n(useI18n());
</script>

<template>
  <div>
    <h2>{{ t('not_existing') }}</h2>
    <h3>{{ t('headline') }}</h3>
    <h3>{{ t('intro', 1) }}</h3>
  </div>
</template>
