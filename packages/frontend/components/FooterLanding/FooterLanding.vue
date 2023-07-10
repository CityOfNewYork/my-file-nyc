<template>
  <div
    :class="
      $vuetify.breakpoint.smAndUp
        ? 'd-flex align-center justify-space-between pt-2 pb-2 footer-large'
        : 'mt-2 pt-3 footer-small'
    "
    style="bottom: 0%; width: 100%; background-color: #031553"
  >
    <v-img
      :class="
        $vuetify.breakpoint.smAndUp
          ? 'd-flex ml-4 mt-1 mb-1'
          : 'd-flex ml-2 mt-1'
      "
      class="landing-img-footer"
      :style="
        $vuetify.breakpoint.smAndUp
          ? { maxWidth: '28rem', height: '55px', filter: 'invert(1)' }
          : { maxWidth: '23rem', height: '44px', filter: 'invert(1)' }
      "
      :src="require('@/assets/images/city-logo-footer.svg')"
    />
    <div
      :class="
        $vuetify.breakpoint.smAndDown
          ? 'd-flex flex-column align-start'
          : $vuetify.breakpoint.smOnly
          ? 'd-flex flex-column align-start'
          : $vuetify.breakpoint.mdAndUp
          ? 'd-flex flex-row justify-center ml-5 pr-10'
          : ''
      "
      style="text-decoration: underline"
    >
      <v-btn
        text
        class="white--text button-list"
        :to="`/${this.$i18n.locale}/terms-of-use`"
        style="text-decoration: underline; font-weight: 700"
      >
        {{ $t('navigation.termsOfUse') }}
      </v-btn>
      <v-btn
        text
        class="white--text button-list"
        :to="`/${this.$i18n.locale}/about`"
        style="text-decoration: underline; font-weight: 700"
      >
        {{ $t('navigation.about') }}
      </v-btn>
      <v-btn
        text
        class="white--text button-list"
        :to="`/${this.$i18n.locale}/faq`"
        style="text-decoration: underline; font-weight: 700"
      >
        {{ $t('navigation.faq') }}
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { userStore } from '@/plugins/store-accessor'

@Component
export default class FooterGlobal extends Vue {
  document = false
  agency = false

  mounted() {
    this.locationDetect()
    this.isAgency()
  }

  locationDetect() {
    if (window.location.pathname.split('/')[1] === 'documents') {
      this.document = true
    }
  }

  isAgency() {
    let userRole = 0 as any
    userRole = localStorage.getItem('myfile.role')

    if (userRole === 2) {
      this.agency = true
    }
  }
}
</script>

<style scoped lang="scss">
#__nuxt .v-btn.v-btn--flat {
  padding: 0 10px !important;
}

.footer-large {
  position: absolute;
  bottom: 0;
}

.footer-small {
  position: absolute;
  bottom: 0;
}
</style>
