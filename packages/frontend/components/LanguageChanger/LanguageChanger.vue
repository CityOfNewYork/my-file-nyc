<template>
  <select v-model="$i18n.locale">
    <option
      v-for="(lang, i) in $i18n.availableLocales"
      :key="`Lang${i}`"
      :value="lang"
    >
      {{ lang }}
    </option>
  </select>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class LanguageChanger extends Vue {}
</script>