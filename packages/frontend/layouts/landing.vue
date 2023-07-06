<template>
  <v-app :class="rtlDirection && 'rtl'">
    <v-toolbar v-if="title" class="primary" elevation="0">
      <v-toolbar-title class="white--text text-center" style="width: 100vw">
        {{ $t(title) }}
      </v-toolbar-title>
    </v-toolbar>
    <v-main>
      <div class="landing-layout-container">
        <div class="landing-layout-container-inner">
          <nuxt />
        </div>
        <FooterLanding />
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { userStore } from '../plugins/store-accessor'

@Component({
  auth: false,
})
export default class DefaultLayout extends Vue {
  auth: false

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

  get title() {
    if (!this.$auth.loggedIn) {
      return ''
    } else if (userStore.isCbo) {
      return 'landing.community'
    } else if (userStore.isAgent) {
      return 'landing.agency'
    }
    return ''
  }
}
</script>

<style lang="scss" scoped>
.landing-layout-container {
  overflow: auto;
  min-height: 100vh;
}
.landing-layout-container-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
}

@media (max-height: 920px) and (max-width: 700px) {
  .landing-layout-container {
    position: relative;
    min-height: 100vh;
  }
  .landing-layout-container-inner {
    display: flex !important;
    align-items: start !important;
    justify-content: center !important;
    width: 100%;
  }
}
</style>
