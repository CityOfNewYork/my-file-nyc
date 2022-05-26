<template>
  <v-btn
    :title="`${$t('navigation.back')}`"
    icon
    class="a11y-focus"
    @click="back"
  >
    <v-icon small>$arrow-left</v-icon>
    <span class="px-2 grey-8--text" style="font-size: 22px">
      {{ $t('navigation.back') }}
    </span>
  </v-btn>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class BackButton extends Vue {
  back() {
    if (window.history.length) {
      this.$router.back()
    } else {
      this.$router.push(this.localePath('/dashboard'))
    }
  }
}
</script>
