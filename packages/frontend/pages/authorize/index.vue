<template>
  <v-row>
    <v-col cols="12" align="center">
      <h3>{{ $t('navigation.loggingIn') }}</h3>
      <v-progress-circular
        indeterminate
        color="primary"
        class="mt-6"
      ></v-progress-circular>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
console.log(`https://localhost:3000/authorize${location.hash}`)

@Component({
  layout: 'centered',

  head() {
    return {
      title: this.$t('tabTitles.authorizing') as string,
    }
  },
})
export default class Authorize extends Vue {}
</script>
