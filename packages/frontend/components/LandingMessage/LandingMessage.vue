<template>
  <div class="landing-container">
    <CityLogo class="city-logo" />
    <MarkdownContent
      id="welcome-copy"
      :key="this.welcomeMarkdown['default']"
      class="pa-1"
      :content-path="welcomeMarkdown"
    />
    <ButtonLarge
      :label="$t('login.loginButton')"
      @click.native="logIn(0)"
      @keydown.native.enter="logIn"
    />
    <div class="my-5">
      <a href="/nycid">{{ $t('navigation.nycId') }}</a>
    </div>
    <LanguageChanger
      outlined="true"
      justify="center"
      text-color="black"
      padding="0 20px"
    />
    <CityLogoFooter v-if="showFooterLogo" position="fixed" class="mt-10 mb-3" />
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

  beforeUpdate() {
    if (this.$i18n) {
      const locale = this.$i18n.locale
      this.welcomeMarkdown = require(`@/assets/content/welcome/${locale}.md`)
    }
  }

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
    padding: 0;
    min-height: 100vh;
    justify-content: center;
  }
  .landing-layout-container-inner {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .landing-container {
    width: 320px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .welcome-message.body-1 {
    font-size: rem(18px) !important;
  }
  @media (max-height: 700px) and (max-width: 400px) {
    .landing-layout-container {
      display: flex;
      padding: 0;
      height: 100dvh;
      justify-content: start;
    }

    .landing-layout-container-inner {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .landing-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-bottom: 0px !important;
      width: 320px !important;
    }
    #welcome-copy {
      font-size: rem(15px) !important;
    }
  }
  // #welcome-copy {
  //   margin: 50px 20px 32px;
  // }
}
</style>
