<template>
  <div>
    <!-- <v-progress-circular indeterminate color="primary" /> -->
    <LandingMessage />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { UserRole } from '../types/user'
import { userStore } from '../plugins/store-accessor'

@Component({
  name: 'DefaultLandingPage',
  auth: false,
  layout: 'landing',
  head() {
    return {
      title: this.$t('tabTitles.welcome') as string,
    }
  },
})
export default class DefaultLandingPage extends Vue {
  UserRole = UserRole

  mounted() {
    ;(window as { [key: string]: any })[
      `ga-disable-${this.$config.googleAnalytics.id}`
    ] = false
    // if (!this.$auth.loggedIn) {
    // console.log(UserRole);
    // switch (userStore.role) {
    //   case UserRole.CBO:
    //     this.$router.push(this.localePath('/community'))
    //     break
    //   case UserRole.AGENT:
    //     this.$router.push(this.localePath('/agency'))
    //     break
    //   default:
    //     this.$router.push(this.localePath('/client'))
    //     break
    // }
    // }
  }
}
</script>
