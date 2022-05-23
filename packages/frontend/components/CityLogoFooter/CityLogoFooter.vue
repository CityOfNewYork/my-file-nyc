<template>
  <v-img
    img="role"
    :alt="`${$t('cityLogoFooter')}`"
    :src="cityLogoFooter"
    :style="{ width, top }"
  />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class CityLogoFooter extends Vue {
  @Prop({ default: '340px' }) width: string
  @Prop({ default: '200px' }) top: string

  get cityLogoFooter(): string {
    return require('@/assets/images/city-logo-footer.svg')
  }
}
</script>
