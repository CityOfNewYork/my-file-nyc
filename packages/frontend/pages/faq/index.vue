<template>
  <div>
    <AppBar :empty="true">
      <template v-slot:nav-action>
        <BackButton
          tabindex="0"
          :style="
            $vuetify.breakpoint.smAndUp
              ? ''
              : 'position: fixed; left: 0%; width: 100%;'
          "
          :class="$vuetify.breakpoint.smAndUp ? '' : 'mt-10'"
        />
      </template>
    </AppBar>

    <v-divider v-if="$vuetify.breakpoint.smAndDown" class="my-5" />

    <v-container :class="$vuetify.breakpoint.smAndUp ? ' mb-15' : 'my-5'">
      <v-row no-gutters align="center" justify="center">
        <v-col class="px-3" cols="12">
          <CityLogo
            :class="
              $vuetify.breakpoint.smAndUp ? 'mx-auto my-8' : ' mx-auto my-8'
            "
          />
          <MarkdownContent :content-path="markdown" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  head() {
    return {
      title: this.$t('tabTitles.faq') as string,
    }
  },
  auth: false,
})
export default class FaqPage extends Vue {
  markdown = ''

  created() {
    const locale = this.$i18n.locale
    this.markdown = require(`@/assets/content/faq/${locale}.md`)
  }

  get myFileLogo(): string {
    return require('@/assets/images/my-file-logo.svg')
  }
}
</script>
