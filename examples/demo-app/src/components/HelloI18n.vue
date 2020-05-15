<template>
  <div>
    <p>{{ $t('hello') }}</p>
    <p>{{ $t('message.hello', { msg: 'hello' }) }}</p>
    <p>{{ $tc('apple', 1) }}</p>
    <p v-t="{path: 'message.hello', args: { msg: 'You' }}"></p>

    <i18n path="term" tag="p">
      <span>{{ $t('tos') }}</span>
    </i18n>

    <i18n path="info" tag="p">
      <template v-slot:limit>
        <span>{{ changeLimit }}</span>
      </template>
      <template v-slot:action>
        <a :href="changeUrl">{{ $t('change') }}</a>
      </template>
    </i18n>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class HelloI18n extends Vue {
  changeUrl = '/change';
  changeLimit = 8;
}
</script>

<i18n>
{
  "en": {
    "apple": "no apples | one apple | {count} apples",
    "hello": "Hello i18n in SFC!",
    "message": {
      "hello": "hello {msg}"
    },
    "tos": "Term of Service",
    "term": "I accept {0}.",
    "info": "You can {action} until {limit} minutes from departure.",
    "change": "change your flight",
    "refund": "refund the ticket"
  }
}
</i18n>
