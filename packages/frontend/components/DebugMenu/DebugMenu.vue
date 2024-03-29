<template>
  <div>
    <!-- Note: corrupting the token doesn't really happen in normal usage -->
    <v-btn @click="expireToken">Expire token</v-btn>
    <v-btn @click="logIn">log in</v-btn>
    <v-btn @click="logOut">log out</v-btn>
    <v-btn @click="getDocuments">request documents</v-btn>
    <v-btn @click="sendEvent">send test upload event</v-btn>
    <v-select :items="userRoles" :value="initialRole" @change="setUserRole" />
    <v-row>
      <v-text-field v-model="delegateToAccept" />
      <v-btn :disabled="!delegateToAccept" @click="acceptDelegate">
        accept delegate
      </v-btn>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { UserRole } from '@/types/user'
import decode from 'jwt-claims'

@Component
export default class DebugMenu extends Vue {
  userRoles = [
    {
      text: 'client',
      value: UserRole.CLIENT,
    },
    {
      text: 'cbo',
      value: UserRole.CBO,
    },
    {
      text: 'agent',
      value: UserRole.AGENT,
    },
  ]

  initialRole = UserRole.CLIENT

  delegateToAccept = ''

  showConfirmation = false

  mounted() {
    if (this.$auth.loggedIn) {
      const claims = decode(this.$auth.getToken(this.$config.authStrategy))
      this.$store.commit(
        'user/setUserId',
        claims[this.$config.authTokenIdClaim],
      )
    } else {
      this.$store.commit('user/setUserId', 'testUserId')
    }
    this.$store.dispatch('user/fetchRole').then((role: UserRole) => {
      this.initialRole = role
    })
  }

  expireToken() {
    this.$auth.setToken(this.$config.authStrategy, 'bleh')
  }

  logIn() {
    this.$auth.login()
  }

  logOut() {
    this.$auth.logout()
  }

  setUserRole(v: UserRole) {
    this.$store.dispatch('user/setRole', v)
  }

  sendEvent() {
    this.$ga.event({
      eventCategory: 'debug',
      eventAction: 'click',
      eventLabel: 'client',
    })
  }

  acceptDelegate() {
    this.$store.dispatch('delegate/acceptInvite', this.delegateToAccept)
  }
}
</script>
