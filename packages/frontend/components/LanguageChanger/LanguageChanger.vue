<template>
  <div :class="!outlined ? 'langContainer' : 'langContainerOutlined'">
    <v-select
      :class="!outlined ? 'selectField' : 'reset'"
      class="language-selection-style"
      v-model="$i18n.locale"
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
        {{ languagesObject[item] }}
      </template>
      <template v-slot:item="{ item }">
        {{ languagesObject[item] }}
      </template>
    </v-select>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { userStore } from '@/plugins/store-accessor'

@Component
export default class LanguageChanger extends Vue {
  @Prop({ default: false }) outlined: boolean
  @Prop({ default: 'white' }) textColor: string
  @Prop({ default: 'center' }) textOrientation: string
  @Prop({ default: '-1px 19px;' }) padding: string
  userStore = userStore as any


  // Update usere locale in database and app state
  async userPatch() {
    const data = {
      givenName: this.userStore.profile.givenName,
      familyName: this.userStore.profile.familyName,
      dob: this.userStore.profile.dob,
      dhsCaseNumber: this.userStore.profile.dhsCaseNumber,
      locale: this.$i18n.locale,
    }

    const response = await this.$store.dispatch('user/patchProfile', data)
    this.$i18n.locale = response.locale
  }
  
  updated() {
    this.$router.push(`/${this.$i18n.locale}/${window.location.toString().split("/").pop()}`)
    if (this.userStore.profile.locale === this.$i18n.locale) {
      this.userPatch()
    }
  }

  languagesObject = {
    en: 'English',
    es: 'Español',
    ar: 'عرب',
    ch: '中國人',
    ru: 'Русский',
    urd: 'اردو',
    ko: '한국인',
    fr: 'Français',
    ht: 'Kreyol Ayisyen',
    bn: 'বাংলা',
    pl: 'Polskie',
  }
}
</script>

<style lang="scss">
.reset {
  max-width: 100%;
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