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
}
</script>
