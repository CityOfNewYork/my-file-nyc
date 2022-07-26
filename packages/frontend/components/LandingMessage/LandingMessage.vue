<template>
  <div class="landing-container">
    <CityLogo />
    <MarkdownContent
      class="pa-1"
      id="welcome-copy"
      :content-path="welcomeMarkdown"
    />
    <ButtonLarge
      :label="$t('login.loginButton')"
      @click.native="logIn(0)"
      @keydown.native.enter="logIn"
    />
    <div @click="nycIdShowTOggle" class="my-5">
      <a href="/nycid">{{ $t('navigation.nycId') }}</a>
    </div>
    <CityLogoFooter position="fixed" v-if="showFooterLogo" class="mt-10 mb-3" />
    <FooterLinks
      justify="center"
      color="primary"
      background-color="none"
      :always-show="true"
      :fixed="$vuetify.breakpoint.height > 615"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import { UserRole } from '../../types/user'
import { userStore } from '../../plugins/store-accessor'

@Component({
  name: 'LandingMessage',
  layout: 'landing',
  auth: false,
})
export default class LandingMessage extends Vue {
  welcomeMarkdown = ''

  created() {
    if (this.$i18n) {
      const locale = this.$i18n.locale
      this.welcomeMarkdown = require(`@/assets/content/welcome/${locale}.md`)
    }
  }

  get message() {
    return userStore.role !== null
      ? `login.welcomeMessage.${UserRole[userStore.role]}`
      : ''
  }

  get showFooterLogo(): boolean {
    return this.$config.footerLogo === '0'
  }

  logIn(role: UserRole = UserRole.CLIENT) {
    // localStorage.setItem('entry-role', role.toString())
    this.$router.push(this.localePath(`/login?loginAs=${role}`))
  }
}
</script>

<style lang="scss">
.v-application {
  .landing-layout-container {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
  .landing-layout-container-inner {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .landing-container {
    width: rem(320px);
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .welcome-message.body-1 {
    font-size: rem(15px) !important;
  }
  @media (min-height: 515px) {
    .landing-layout-container-inner {
      height: 100vh;
    }
  }
  #welcome-copy {
    margin: 50px 20px 32px !important;
  }
}
</style>
