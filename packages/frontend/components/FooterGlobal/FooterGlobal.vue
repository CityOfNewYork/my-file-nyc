<template>
  <div
    v-if="$vuetify.breakpoint.smAndUp"
    :class="
      ((document || agency) & $vuetify.breakpoint.smAndUp &&
        'd-flex justify-flex-start pt-2') ||
      ($vuetify.breakpoint.smAndUp
        ? 'd-flex justify-space-between pt-2'
        : 'mt-2')
    "
    style="position: fixed; bottom: 0%; width: 100%; background-color: #031553"
  >
    <v-img
      v-if="$vuetify.breakpoint.smAndUp"
      :class="
        $vuetify.breakpoint.smAndUp
          ? 'ml-3 mt-1 mb-2 d-flex'
          : 'd-flex ml-1 mr-3 mt-1'
      "
      style="max-width: 23rem; filter: invert(1)"
      :src="require('@/assets/images/city-logo-footer.svg')"
    />
    <div
      :class="
        $vuetify.breakpoint.smAndUp & document
          ? 'd-flex justify-center ml-5'
          : 'd-flex justify-center mr-4'
      "
      style="text-decoration: underline"
    >
      <v-btn
        v-if="$vuetify.breakpoint.smAndDown"
        text
        :to="localePath('/dashboard')"
        class="white--text align-start py-2 mb-1 no-background-hover"
      >
        <v-img
          v-if="$vuetify.breakpoint.smAndDown"
          contain
          style="max-width: 34px"
          :src="require('@/assets/images/my-file-logo-head.svg')"
          class="mr-2 mb-1 ml-5"
        />
      </v-btn>
      <v-btn text class="white--text" :to="localePath('/terms-of-use')">
        {{ $t('navigation.termsOfUse') }}
      </v-btn>
      <v-icon large :class="['d-inline', `white--text`]">
        mdi-circle-small
      </v-icon>
      <v-btn text class="white--text" :to="localePath('/about')">
        {{ $t('navigation.about') }}
      </v-btn>
      <v-icon large :class="['d-inline', `white--text`]">
        mdi-circle-small
      </v-icon>
      <v-btn text class="white--text" :to="localePath('/faq')">
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
    if (window.location.pathname.split('/')[1] == 'documents') {
      this.document = true
    }
  }

  isAgency() {
    let userRole = 0 as any
    userRole = localStorage.getItem('myfile.role')

    if (userRole == 2) {
      this.agency = true
    }
  }
}
</script>

<style scoped lang="scss">
</style>