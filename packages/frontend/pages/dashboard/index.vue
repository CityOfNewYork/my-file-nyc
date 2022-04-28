<template>
  <ClientDashboard v-if="showClientDashboard" />
  <CboDashboard v-else-if="showCboDashboard" />
  <AgentDashboard v-else-if="showAgencyDashboard" />
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { userStore, snackbarStore } from '@/plugins/store-accessor'
import SnackParams from '@/types/snackbar'
import ClientDashboard from '@/layouts/dashboard.vue'

@Component({
  layout: 'dashboard',
  head() {
    return {
      title: this.$t('tabTitles.dashboard') as string,
    }
  },
})
export default class DashboardPage extends Vue {
  userStore = userStore

  mounted() {
    if (this.$route.query.showSnack) {
      snackbarStore.setVisible(true)
    }
    this.$store.dispatch('user/fetchRole')
  }

  get showClientDashboard() {
    return (
      localStorage.getItem('entry-role') === '0' ||
      !localStorage.getItem('entry-role')
    )
  }

  get showCboDashboard() {
    return localStorage.getItem('entry-role') === '1'
  }

  get showAgencyDashboard() {
    return localStorage.getItem('entry-role') === '2'
  }
}
</script>
