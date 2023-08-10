<template>
  <div class="landing-container">
    <CityLogo class="city-logo" />
    <MarkdownContent
      id="welcome-copy"
      :key="welcomeMarkdown['default']"
      :content-path="welcomeMarkdown"
      class="pl-2"
    />
    <v-btn
      x-large
      outlined
      color="primary"
      class="create-account-btn"
      @click="signUp"
    >
      {{ $t('login.createAccountButton') }}
    </v-btn>
    <ButtonLarge
      :label="$t('login.loginButton')"
      @click.native="logIn(0)"
      @keydown.native.enter="logIn"
    />
    <div class="my-4 question">
      <a :href="`/${$i18n.locale}/nycid`">{{ $t('navigation.nycId') }}</a>
    </div>
    <div class="divider"></div>
    <LanguageChanger outlined="true" text-color="black" />
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
  welcomeMarkdown = '' as any
  locale = this.$i18n.locale

  signUp() {
    window.open(
      this.$config.registrationEndpoint,
      '_blank',
    )
  }

  beforeUpdate() {
    if (this.$i18n) {
      // const locale = this.$i18n.locale
      this.welcomeMarkdown = require(`@/assets/content/welcome/${this.locale}.md`)
    }
  }

  created() {
    if (this.$i18n) {
      const locale = this.$i18n.locale
      this.welcomeMarkdown = require(`@/assets/content/welcome/${this.locale}.md`)
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

    if (this.$i18n.locale !== 'en') {
      // this.$router keep redirecting to /en rout, had to use window to force navigation to nycid
      window.location.replace(this.localePath(`/login?loginAs=${role}`))
    } else {
      this.$router.push(this.localePath(`/login?loginAs=${role}`))
    }
  }
}
</script>

<style lang="scss" scoped>
.landing-container {
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 55px;

  .create-account-btn {
    width: 320px !important;
    font-weight: 700 !important;
    height: 10px !important;
    border-radius: 5px !important;
    margin-bottom: 16px;
  }

  .question {
    font-weight: 700;
  }

  .divider {
    margin-top: 16px;
    border-top: 2px solid black;
    width: 320px;
    margin-bottom: 16px;
  }
}

@media (max-height: 900px) and (max-width: 500px) {
  .landing-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: start;
    justify-content: center;
    padding-left: 10px;
    padding-right: 10px;
    width: 100%;
    padding-bottom: 150px;

    .create-account-btn {
      width: 90% !important;
      font-weight: 700 !important;
      border-radius: 5px !important;
    }

    .question {
      font-weight: 700;
    }

    .divider {
      margin-top: 25px;
      border-top: 2px solid black;
      width: 90%;
      margin-bottom: 25px;
    }
  }
  #welcome-copy {
    font-size: rem(16px) !important;
  }
}
</style>
