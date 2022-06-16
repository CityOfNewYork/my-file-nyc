<template>
  <div
    :class="
      (document & $vuetify.breakpoint.smAndUp && 'd-flex justify-flex-start') ||
      ($vuetify.breakpoint.smAndUp ? 'd-flex justify-space-between' : 'mt-2')
    "
    style="position: fixed; bottom: 0%; width: 100%; background-color: #f1f5fe"
  >
    <v-img
      :class="
        $vuetify.breakpoint.smAndUp ? 'ml-1 d-flex' : 'd-flex ml-1 mr-3 mt-1'
      "
      style="max-width: 25rem"
      :src="require('@/assets/images/city-logo-footer.svg')"
    />
    <div
      :class="
        $vuetify.breakpoint.smAndUp & document
          ? 'd-flex justify-center ml-5'
          : 'd-flex justify-center mr-4'
      "
      style="text-decoration: underline"
    >
      <v-btn
        v-if="$vuetify.breakpoint.smAndDown"
        text
        :to="localePath('/dashboard')"
        class="white--text align-start py-2 mb-1 no-background-hover"
      >
        <v-img
          v-if="$vuetify.breakpoint.smAndDown"
          contain
          style="max-width: 38px"
          :src="require('@/assets/images/my-file-logo-head.svg')"
          class="mr-2 mb-1 ml-5"
        />
      </v-btn>
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