<template>
  <v-toolbar flat>
    <v-btn
      :title="`${$t('navigation.back')}`"
      icon
      class="mr-2 a11y-focus"
      @click="navigationEvent"
    >
      <v-icon small>$chevron-left</v-icon>
    </v-btn>
    <v-toolbar-title>{{ $t('navigation.back') }}</v-toolbar-title>
  </v-toolbar>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class BackButton extends Vue {
  @Prop({ default: () => () => {} }) reset: () => void

  back() {
    if (window.history.length) {
      this.$router.back()
    } else {
      this.$router.push(this.localePath('/dashboard'))
    }
  }

  navigationEvent() {
    if (window.location.pathname == '/dashboard') {
      this.reset()
    } else {
      this.back()
    }
  }
}
</script>
