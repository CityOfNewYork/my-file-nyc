<template>
  <div>
    <AppBar :empty="true">
      <template v-slot:nav-action>
        <BackButton
          tabindex="0"
          :style="$vuetify.breakpoint.smAndUp ? '' : 'width: 100%'"
          :class="$vuetify.breakpoint.smAndUp ? '' : 'mt-10 '"
        />
      </template>
    </AppBar>
    <v-img
      img="role"
      :alt="`${$t('myFileLogo')}`"
      :src="myFileLogo"
      style="width: 50%; left: 25%"
      :class="$vuetify.breakpoint.smAndUp ? 'mt-5' : 'mt-15'"
    />
    <MarkdownContent
      :content-path="markdown"
      :class="$vuetify.breakpoint.smAndUp ? '' : 'mb-15'"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  head() {
    return {
      title: this.$t('tabTitles.about') as string,
    }
  },
  auth: false,
})
export default class AboutPage extends Vue {
  markdown = ''

  created() {
    const locale = this.$i18n.locale
    this.markdown = require(`@/assets/content/about/${locale}.md`)
  }

  get myFileLogo(): string {
    return require('@/assets/images/my-file-logo.svg')
  }
}
</script>
