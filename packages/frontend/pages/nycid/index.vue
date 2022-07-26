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

    <v-container :class="$vuetify.breakpoint.smAndUp ? ' mb-15' : 'my-10'">
      <v-row no-gutters align="center" justify="center">
        <v-col class="px-3" cols="12">
          <CityLogo
            :class="
              $vuetify.breakpoint.smAndUp ? 'mx-auto my-8' : ' mx-auto my-8'
            "
          />
          <MarkdownContent class="pa-0 my-0" :content-path="markdown" />
          <ButtonLarge
            :label="$t('login.loginButton')"
            @click.native="logIn(0)"
            @keydown.native.enter="logIn"
            class="mx-auto"
            style="display: block"
          />
        </v-col>
      </v-row>
    </v-container>
    <div v-if="$vuetify.breakpoint.smAndDown">
      <CityLogoFooter position="relative" class="mx-auto my-5" />
      <FooterLinks
        justify="center"
        color="primary"
        background-color="none"
        :always-show="true"
        :fixed="false"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { UserRole } from '../../types/user'

@Component({
  head() {
    return {
      title: this.$t('tabTitles.nycid') as string,
    }
  },
  auth: false,
})
export default class nycIdPage extends Vue {
  markdown = ''

  created() {
    const locale = this.$i18n.locale
    this.markdown = require(`@/assets/content/nycId/${locale}.md`)
  }

  logIn(role: UserRole = UserRole.CLIENT) {
    // localStorage.setItem('entry-role', role.toString())
    this.$router.push(this.localePath(`/login?loginAs=${role}`))
  }

  get myFileLogo(): string {
    return require('@/assets/images/my-file-logo.svg')
  }
}
</script>
