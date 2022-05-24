<template>
  <v-img
    img="role"
    :alt="`${$t('cityLogoFooter')}`"
    :src="cityLogoFooter"
    v-bind:style="
      (this.$vuetify.breakpoint.width >= 667 && this.$vuetify.breakpoint.xs) ||
      (this.$vuetify.breakpoint.width >= 653 &&
        this.$vuetify.breakpoint.smAndDown)
        ? `position: relative;  width: ${width}`
        : 'position: fixed; bottom: 5%; width: 270px;'
    "
  />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class CityLogoFooter extends Vue {
  @Prop({ default: '340px' }) width: string

  get cityLogoFooter(): string {
    return require('@/assets/images/city-logo-footer.svg')
  }
}
</script>