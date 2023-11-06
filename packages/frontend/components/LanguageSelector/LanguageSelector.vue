<template>
  <div :class="!outlined ? 'langContainer' : 'langContainerOutlined'">
    <v-select
      v-model="locale"
      :class="!outlined ? 'selectField' : 'reset'"
      class="language-selection-style"
      :items="$i18n.availableLocales"
      dense
      :outlined="outlined && 'outlined'"
      :style="{
        color: textColor,
        textAlign: textOrientation,
        marginTop: '10px',
        padding: padding,
      }"
    >
      <template v-slot:selection="{ item }">
        <div style="margin-top: 5px">
          <v-icon style="margin-right: 10px; color: #2f3033">
            mdi-translate
          </v-icon>
          {{ languagesObject[item] }}
        </div>
      </template>
      <template v-slot:item="{ item }">
        {{ languagesObject[item] }}
      </template>
    </v-select>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class LanguageSelector extends Vue {
  @Prop({ default: false }) outlined: boolean
  @Prop({ default: 'white' }) textColor: string
  @Prop({ default: 'center' }) textOrientation: string
  @Prop({ default: '-1px 19px;' }) padding: string
  @Prop({ default: 'en' }) locale: string
  @Prop({ default: () => () => {} }) localeChange: (local: string) => void

  updated() {
    this.localeChange(this.locale)
  }

  languagesObject = {
    en: 'English',
    es: 'Español',
    ar: 'عرب',
    ch: '中文',
    ru: 'Русский',
    urd: 'اردو',
    ko: '한국인',
    fr: 'Français',
    ht: 'Kreyol Ayisyen',
    bn: 'বাংলা',
    pl: 'Polskie',
    uk: 'Українська',
    pt: 'Português',
  }
}
</script>

<style lang="scss">
.reset {
  max-width: 100%;
  height: 100%;
}

.langContainerOutlined {
  width: 100% !important;
  height: 100px;
  .v-text-field.v-text-field--enclosed:not(.v-text-field--rounded)
    > .v-input__control
    > .v-input__slot {
    padding: 8px 12px;
  }

  fieldset {
    border-width: 1.5px;
  }
}

.langContainer {
  padding: -1px 19px;
}

.selectField {
  max-width: 80px;
  height: 30px;
}

.selectField.v-text-field > .v-input__control > .v-input__slot:before {
  border-style: none;
}
.selectField.v-text-field > .v-input__control > .v-input__slot:after {
  border-style: none;
}

.selectField.v-text-field
  > .v-input__control
  > .v-input__slot
  > .v-select__selections {
  line-height: 30px;
}

.selectField.v-text-field.v-input--dense:not(.v-text-field--enclosed):not(.v-text-field--full-width)
  .v-input__append-inner
  .v-input__icon
  > .v-icon {
  color: white;
  margin-bottom: 15px;
  padding-left: 10px;
}
</style>
