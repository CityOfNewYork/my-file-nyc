<template>
  <v-app :class="rtlDirection && 'rtl'">
    <AppBar v-if="this.$router.currentRoute.path !== '/'" :empty="true">
      <template v-slot:nav-action>
        <BackButton tabindex="0" />
      </template>
    </AppBar>
    <v-main
      :class="this.$router.currentRoute.path !== '/' ? '' : 'blue-super-light'"
    >
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <FooterGlobal />

    <SnackBar />
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class DefaultLayout extends Vue {
  get rtlDirection() {
    const langs: any = {
      ar: 'ar',
      urd: 'urd',
    }

    if (langs[this.$i18n.locale]) {
      return true
    }
    return false
  }
}
</script>
