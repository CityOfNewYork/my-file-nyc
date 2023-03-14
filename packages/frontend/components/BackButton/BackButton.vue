<template>
  <v-toolbar flat>
    <v-btn
      :title="`${$t('navigation.back')}`"
      icon
      small
      class="xs-ml-3 sm-and-up-ml-40 a11y-focus"
      @click="navigationEvent"
    >
      <v-icon
        :small="$vuetify.breakpoint.smAndUp"
        :x-small="$vuetify.breakpoint.xsOnly"
      >
        $chevron-left
      </v-icon>
    </v-btn>
    <v-toolbar-title class="toolbar-font">
      {{ $t('navigation.back') }}
    </v-toolbar-title>
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

<style scoped>
@media (max-width: 600px) {
  .toolbar-font {
    font-weight: 500;
    font-size: 17px;
    line-height: 24px;
  }
}
</style>
