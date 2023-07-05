<template>
  <div
    :class="
      $vuetify.breakpoint.smAndUp
        ? 'd-flex justify-space-between pt-2 pb-2 footer-large'
        : 'mt-2 pt-3 footer-small'
    "
    style="bottom: 0%; width: 100%; background-color: #031553"
  >
    <v-img
      :class="
        $vuetify.breakpoint.smAndUp
          ? 'ml-3 mt-1 mb-2 d-flex'
          : 'd-flex ml-1 mr-3 mt-1'
      "
      style="max-width: 25rem; filter: invert(1)"
      :src="require('@/assets/images/city-logo-footer.svg')"
    />
    <div
      :class="
        $vuetify.breakpoint.smAndUp
          ? 'd-flex justify-center ml-5 pr-10'
          : 'd-flex flex-column align-start'
      "
      style="text-decoration: underline"
    >
      <v-btn
        text
        class="white--text button-list"
        :to="localePath('/terms-of-use')"
        style="text-decoration: underline"
      >
        {{ $t('navigation.termsOfUse') }}
      </v-btn>
      <v-btn
        text
        class="white--text button-list"
        :to="localePath('/about')"
        style="text-decoration: underline"
      >
        {{ $t('navigation.about') }}
      </v-btn>
      <v-btn
        text
        class="white--text button-list"
        :to="localePath('/faq')"
        style="text-decoration: underline"
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
  position: fixed;
  bottom: 0;
}

.footer-small {
  position: absolute;
  bottom: 0;
}
</style>
