<template>
  <v-toolbar flat>
    <v-btn
      :title="`${$t('navigation.back')}`"
      icon
      small
      class="ml-xs-20 ml-sm-8 mt-sm-3 ml-lg-20 ml-xl-40 a11y-focus"
      @click="navigationEvent"
    >
      <v-icon
        :small="$vuetify.breakpoint.smAndUp"
        :x-small="$vuetify.breakpoint.xsOnly"
      >
        $chevron-left
      </v-icon>
    </v-btn>
    <v-toolbar-title class="toolbar-font mt-sm-3">
      {{ $t('navigation.back') }}
    </v-toolbar-title>
  </v-toolbar>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class BackButton extends Vue {
  @Prop({ default: () => () => {} }) reset: () => void

  languageDashboard: string[] = [
    '/ar/dashboard',
    '/bn/dashboard',
    '/en/dashboard',
    '/es/dashboard',
    '/fr/dashboard',
    '/ht/dashboard',
    '/ko/dashboard',
    '/pl/dashboard',
    '/ru/dashboard',
    '/urd/dashboard',
    '/ch/dashboard',
  ]

  languages: string[] = [
    '/ar',
    '/bn',
    '/en',
    '/es',
    '/fr',
    '/ht',
    '/ko',
    '/pl',
    '/ru',
    '/urd',
    '/ch',
  ]

  navigationEvent() {
    const pathForCompare = window.location.pathname
      .toString()
      .split('/')
      .slice(0, 5)
      .join('/')

    const isDashboard = this.languageDashboard.includes(pathForCompare)

    if (!this.$auth.loggedIn) {
      const path = window.location.pathname.toString().split('/')[1]
      window.location.replace(`/${path}/`)
    }

    if (isDashboard || window.location.pathname === '/dashboard') {
      return this.reset()
    } else {
      const langPref = pathForCompare
        .toString()
        .split('/')
        .slice(0, 2)
        .join('/')

      const hasLangPrefix = this.languages.includes(langPref)
      if (hasLangPrefix) {
        return this.$router.push(langPref + '/dashboard')
      } else {
        return this.$router.push('/dashboard')
      }
    }
  }
}
</script>

<style scoped>
@media (max-width: 600px) {
  .toolbar-font {
    font-weight: 500;
    font-size: 17px;
    line-height: 24px;
  }
}
</style>
