<template>
  <v-img
    img="role"
    :alt="`${$t('cityLogoFooter')}`"
    :src="cityLogoFooter"
    :style="
      this.$vuetify.breakpoint.smAndUp
        ? `position: ${position};  bottom: 5%; width: ${width}`
        : `position: ${position}; bottom: 5%; width: 270px;`
    "
  />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class CityLogoFooter extends Vue {
  @Prop({ default: '340px' }) width: string
  @Prop({ default: '' }) position: string

  get cityLogoFooter(): string {
    return require('@/assets/images/city-logo-footer.svg')
  }
}
</script>