<template>
  <v-app>
    <v-overlay style="text-align: center" :z-index="10000" :value="overlay">
      <p>You are required to login again if using MyFile more than 1 hour.</p>
      <v-btn class="white--text" color="teal" @click="logout()">
        Login Again
      </v-btn>
    </v-overlay>
    <v-snackbar
      v-model="showTimeoutWarningMessage"
      :timeout="warningMsgTimeoutMs"
      color="red darken-3"
      text
      absolute
      bottom
      right
      outlined
      style="z-index: 10;"
    >
      <div style="display: flex; flex-direction: row;">
        <div style="flex-grow: 1; align-self: center;">{{ timeoutWarningMessage }}</div>

        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="showTimeoutWarningMessage = false"
        >
          Close
        </v-btn>
      </div>
    </v-snackbar>

    <SideNav />
    <nuxt />
    <FooterLinks />
    <SnackBar />
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { parseJwt } from '../lib/utils'

@Component
export default class DashboardLayout extends Vue {
  overlay = false
  authTokenKey = 'auth._token.oauth2'
  logoutUrl =
    'https://accounts-nonprd.nyc.gov/account/idpLogout.htm?x-frames-allow-from=https%3A%2F%2Fd3gtg3qw3q3xz9.cloudfront.net'
  warningMsgTimeoutMs = 10 * 1000
  showTimeoutWarningMessage = true
  timeoutWarningMessage = ''

  mounted() {
    if (this.$route.params.showSnack) {
      this.$store.dispatch('snackbar/show')
    }
    this.checkTimeout()
  }
  async logout() {
    // this.overlay = false
    window.open(this.logoutUrl, '_blank')
    window.focus()
    // @ts-ignore
    await window.cookieStore.delete(this.authTokenKey)
    localStorage.removeItem(this.authTokenKey)
    let thisRef = this
    setTimeout(() => {
      thisRef.$auth.login()
    }, 500)
  }

  checkTimeout() {
    const intervalInSeconds = 1
    let expDateOfToken: Date | undefined = undefined
    let storedBearer = localStorage.getItem(this.authTokenKey)
    let token: string | undefined = undefined
    let warning1Displayed = false
    let warning2Displayed = false
    let forceLoginModalOpen = false
    const warning1AtMinute = 5
    const warning2AtMinute = 2
    const timeoutAtMinute = 0

    let intervalId: number | undefined = undefined

    if (intervalId) {
      clearInterval(intervalId as number)
    }

    // @ts-ignore
    intervalId = setInterval(() => {
      if (!storedBearer) {
        storedBearer = localStorage.getItem(this.authTokenKey)
      }
      if (expDateOfToken === undefined && storedBearer) {
        token = storedBearer.replace('Bearer ', '')
        const jwt = parseJwt(token)
        if (jwt && jwt.exp) {
          expDateOfToken = new Date(jwt.exp * 1000)
        }
      }
      if (expDateOfToken) {
        const timeRemaining =
          (expDateOfToken.getTime() - Date.now()) / 1000 / 60
        const minutes = Math.floor(timeRemaining)
        const seconds = Math.floor((timeRemaining % 1) * 60)
        console.log(`${minutes}m ${seconds}s remaining.`)
        if (timeRemaining <= warning1AtMinute && !warning1Displayed) {
          warning1Displayed = true
          this.timeoutWarningMessage = `You will be forced to login again in less than ${
            warning1AtMinute - timeoutAtMinute
          } minutes.`
          this.showTimeoutWarningMessage = true
          console.log(this.timeoutWarningMessage)
        } else if (timeRemaining < warning2AtMinute && !warning2Displayed) {
          warning2Displayed = true
          this.timeoutWarningMessage = `You will be forced to login again in less than ${
            warning2AtMinute - timeoutAtMinute
          } minutes.`
          this.showTimeoutWarningMessage = true
          console.log(this.timeoutWarningMessage)
        } else if (timeRemaining <= timeoutAtMinute && !forceLoginModalOpen) {
          console.log('Pop up modal and force login')
          clearInterval(intervalId as number)
          this.overlay = true
        }
      }
    }, intervalInSeconds * 1000)
  }
}
</script>
