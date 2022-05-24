<template>
  <v-img
    img="role"
    :alt="`${$t('cityLogoFooter')}`"
    :src="cityLogoFooter"
    v-bind:style="
      (this.$vuetify.breakpoint.width >= 650 &&
        this.$vuetify.breakpoint.smandUp) ||
      (this.$vuetify.breakpoint.width < 650 &&
        !this.$vuetify.breakpoint.smAndDown)
        ? `position: relative;  ${width}`
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
    console.log(this.$vuetify.breakpoint.width <= 650)
    return require('@/assets/images/city-logo-footer.svg')
  }
}
</script>