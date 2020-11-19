<template>
  <div class="landing-container">
    <CityLogo />
    <h2 class="heading-2 mt-4 mb-4 primary--text">
      {{ capitalize($t('login.welcomeTitle')) }}
    </h2>
    <div class="body-1 welcome-message mb-8">
      {{ capitalize($t('login.welcomeMessage')) }}
    </div>
    <ButtonLarge
      :label="$t('getStarted')"
      @click.native="setRoleLoginRedirect(role)"
    />
  </div>
</template>

<script lang="ts">
import { Component, mixins, Prop } from 'nuxt-property-decorator'
import { capitalize } from '@/assets/js/stringUtils'
import { Login } from '@/mixins/login'

@Component({
  name: 'LandingMessage',
  layout: 'landing',
  auth: false,
  mixins: [Login],
})
export default class Landing extends mixins(Login) {
  @Prop({ default: null, required: true }) role: null

  capitalize = capitalize
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
    height: 100vh;
  }
  .landing-container {
    width: rem(240px);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .welcome-message {
    font-size: rem(15px) !important;
  }
}
</style>