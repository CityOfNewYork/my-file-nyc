<template>
  <div>
    <ApplicationHeader />

    <AppBar>
      <template v-slot:extensions>
        <v-row no-gutters class="white" outlined rounded="0">
          <v-col cols="12">
            <div class="pa-3">
              {{ $t('agent.selectClient') }}
            </div>
          </v-col>
        </v-row>
      </template>
    </AppBar>

    <v-main>
      <DesktopSideBar />

      <SharedOwnerList :inbox="getAgeencyEmail" />
      <!-- <SharedOwnerList inbox="Personal email" /> -->
    </v-main>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({
  head() {
    return {
      title: this.$t('tabTitles.shared') as string,
    }
  },
})
export default class AgentDashboard extends Vue {
  mounted() {}

  get getAgeencyEmail() {
    return this.$config.agencyEmail
  }
}
</script>
