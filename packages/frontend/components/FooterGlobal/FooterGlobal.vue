<template>
  <div
    :class="
      (document & $vuetify.breakpoint.smAndUp && 'd-flex justify-flex-start') ||
      ($vuetify.breakpoint.smAndUp ? 'd-flex justify-space-between' : 'mt-2')
    "
  >
    <v-img
      :class="$vuetify.breakpoint.smAndUp ? 'ml-1 d-flex' : 'd-flex ml-1 mr-3'"
      style="max-width: 25rem"
      :src="require('@/assets/images/city-logo-footer.svg')"
    />
    <div class="d-flex justify-center" style="text-decoration: underline">
      <v-btn text :to="localePath('/terms-of-use')">
        {{ $t('navigation.termsOfUse') }}
      </v-btn>
      <v-icon large :class="['d-inline', `black--text`]">
        mdi-circle-small
      </v-icon>
      <v-btn text :to="localePath('/about')">
        {{ $t('navigation.about') }}
      </v-btn>
      <v-icon large :class="['d-inline', `black--text`]">
        mdi-circle-small
      </v-icon>
      <v-btn text :to="localePath('/faq')">
        {{ $t('navigation.faq') }}
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class FooterGlobal extends Vue {
  //   @Prop({ default: '' }) title: string
  //   @Prop({ required: true }) body: string
  document = false

  mounted() {
    this.locationDetect()
    console.log(this.document)
  }

  locationDetect() {
    if (window.location.pathname.split('/')[1] == 'documents') {
      this.document = true
    }
  }
}
</script>

<style scoped lang="scss">
</style>