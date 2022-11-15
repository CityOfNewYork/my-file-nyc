<template>
  <div class="inputContainer">
    <div>Select language:</div>

    <select v-model="$i18n.locale" class="input">
      <option disabled value="">Select language</option>
      <option
        v-for="(lang, i) in $i18n.availableLocales"
        :key="`Lang${i}`"
        :value="lang"
      >
        {{ lang }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class LanguageChanger extends Vue {}
</script>

<style scoped lang="scss">
.inputContainer {
  margin-bottom: 10px;
}
</style>