<template>
  <v-img
    img="role"
    :alt="`${$t('myFileLogo')}`"
    :src="myFileLogo"
    :width="$vuetify.breakpoint.smAndUp ? width : 250"
    :class="$vuetify.breakpoint.xsOnly ? 'ma-4' : 'ma-2'"
  />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class CityLogo extends Vue {
  @Prop({ default: '280px' })
  width: string

  get myFileLogo(): string {
    return require('@/assets/images/my-file-logo.svg')
  }
}
</script>
