<template>
  <div :class="!outlined ? 'langContainer' : 'langContainerOutlined'">
    <v-select
      v-model="$i18n.locale"
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
      @change="userPatch"
    >
      <template v-slot:selection="{ item }">
        <div class="input-language" style="display: flex; flex-direction: row">
          <v-icon size="20" style="margin-right: 10px; color: #2f3033">
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
import { userStore } from '@/plugins/store-accessor'

interface Languages {
  [key: string]: string
}
@Component
export default class LanguageChanger extends Vue {
  @Prop({ default: false }) outlined: boolean
  @Prop({ default: 'white' }) textColor: string
  @Prop({ default: 'center' }) textOrientation: string
  @Prop({ default: '-1px 19px;' }) padding: string
  @Prop({ default: () => () => {} }) loadingUpdate: () => void
  userStore = userStore as any

  // Update usere locale in database and app state
  async userPatch() {
    if (!this.userStore.profile) {
      this.prefixRouteUpdate(this.$router.currentRoute.fullPath.split('/'))
    } else {
      this.loadingUpdate()

      const data = {
        givenName: this.userStore.profile.givenName,
        familyName: this.userStore.profile.familyName,
        dob: this.userStore.profile.dob,
        dhsCaseNumber: this.userStore.profile.dhsCaseNumber,
        locale: this.$i18n.locale,
      }

      const response = await this.$store.dispatch('user/patchProfile', data)
      this.$i18n.locale = response.locale
      this.prefixRouteUpdate(this.$router.currentRoute.fullPath.split('/'))
    }
  }

  prefixRouteUpdate(route: any) {
    if (route.length <= 2) {
      route[0] = this.$i18n.locale
    } else if (route.length >= 3) {
      if (this.languagesObject[route[1]]) {
        route[1] = this.$i18n.locale
      } else {
        route.splice(1, 0, this.$i18n.locale)
      }
    }
    this.$router.push(route.join('/'))
    this.loadingUpdate()
  }

  // updated() {
  //   // if (this.userStore.profile) {
  //   //   if (this.userStore.profile.locale !== this.$i18n.locale) {
  //   //     this.userPatch()
  //   //   }
  //   // }

  //   console.log(this.$i18n.locale)
  // }

  languagesObject: Languages = {
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

@media (min-width: 501px) {
  .langContainerOutlined {
    width: 80%;
  }
}

@media (max-width: 500px) {
  .langContainerOutlined {
    width: 89%;
  }
}

.langContainerOutlined {
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
  // padding: -1px 19px;
  .v-icon {
    color: white !important;
  }
  margin-right: 10px;
  .input-language {
    width: 100px;
  }
}

.selectField {
  max-width: 115px;
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
  padding-left: 2px;
}
</style>
