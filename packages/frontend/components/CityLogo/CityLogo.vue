<template>
  <v-img
    img="role"
    :alt="`${$t('myFileLogo')}`"
    :src="myFileLogo"
    :width="width"
  />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class CityLogo extends Vue {
  @Prop({ default: '250px' })
  width: string

  get myFileLogo(): string {
    return require('@/assets/images/my-file-logo.svg')
  }
}
</script>
