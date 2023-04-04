<template>
  <v-navigation-drawer
    ref="sideNav"
    v-model="isVisible"
    tabindex="-1"
    fixed
    temporary
    class="a11y-focus-hide"
  >
    <v-btn
      text
      :to="localePath('/dashboard')"
      class="black--text d-flex text-heading-1 align-start py-2 no-background-hover mb-1 justify-start"
    >
      <v-img
        contain
        style="max-width: 38px"
        :src="require('@/assets/images/my-file-logo-head.svg')"
        class="mr-2 mb-1"
      />
      {{ $t('application.title') }}
    </v-btn>

    <NavItemList :items="navItems" />
    <LanguageChanger outlined="true" text-color="black" padding="0 12px" />

    <v-footer fixed class="pa-0">
      <!-- Turning off build version and time -->
      <!-- <div v-if="$config.showBuildInfo" class="px-4 mt-4"> -->
      <!-- <p>
          <span class="font-weight-bold">Build number:</span>
          {{ $config.buildNumber }}
        </p>
        <span class="font-weight-bold">Build time:</span>
        {{ buildTime }} -->
      <!-- </div> -->

      <NavItemList :items="footerNavItems" />
      <v-img
        class="ml-2 mb-2"
        style="max-width: 15rem"
        :src="require('@/assets/images/city-logo-footer.svg')"
      />
    </v-footer>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { browser } from 'process'
import { Component, mixins } from 'nuxt-property-decorator'
import { format } from 'date-fns'
import { userStore, navBarStore } from '@/plugins/store-accessor'
import { UserRole } from '@/types/user'
import { NavItem } from '@/types/nav'
import { RawLocation } from 'vue-router'
import Navigation from '@/mixins/navigation'

@Component({
  mixins: [Navigation],
})
export default class SideNav extends mixins(Navigation) {
  format = format
  navBarStore = navBarStore
  userStore = userStore
  focusTimer: number = 0

  get isVisible() {
    return navBarStore.side
  }

  // Turning off build version and time.
  // get buildTime() {
  //   const buildTime = parseInt(this.$config.buildTime)
  //   if (buildTime) {
  //     return format(new Date(buildTime), 'd/M/y h:mma')
  //   }
  //   return ''
  // }

  set isVisible(value: boolean) {
    this.setSideNav(value)
  }

  numDelegatedClients = 0

  activityNavItem: NavItem = {
    label: 'navigation.activity',
    to: '/activity',
    icon: '$clock',
  }

  clientNavItems: NavItem[] = [
    {
      label: 'navigation.settings',
      to: '/account',
      icon: '$profile',
    },
    this.activityNavItem,
    {
      divider: true,
    },
  ]

  footerNavItems: NavItem[] = [
    {
      label: 'navigation.faq',
      to: '/faq',
    },
    {
      label: 'navigation.termsOfUse',
      click: () => {
        this.closeSideNav()
        this.$router.push(this.localePath('/terms-of-use'))
      },
    },
    {
      label: 'navigation.about',
      to: '/about',
    },
    {
      divider: true,
    },
    {
      label: 'navigation.signOut',
      click: async () => {
        const authTokenKey = 'auth._token.oauth2'
        localStorage.removeItem(authTokenKey)
        localStorage.clear()
        sessionStorage.clear()
        await this.$auth.logout()
        window.location.reload()
      },
    },
  ]

  async mounted() {
    this.$nuxt.$on('focusSideNav', this.focusSideNav)

    window.addEventListener('keydown', this.keyCloseMenu, true)

    await this.$store.dispatch('user/fetchRole')
    if (userStore.isCbo) {
      const delegatedClients = await this.$store.dispatch(
        'user/fetchDelegatedClients',
      )
      this.numDelegatedClients = delegatedClients.length
    }
  }

  focusSideNav() {
    this.focusTimer = window.setTimeout(() => {
      const sideNavEl = (this as any).$refs.sideNav.$el
      sideNavEl.focus()
    }, 1000) // small buffer to counter el render delay
  }

  keyCloseMenu(e: any): void {
    if (e.key === 'Escape') {
      this.closeSideNav()
    }
  }

  beforeDestroy() {
    window.removeEventListener('keydown', this.keyCloseMenu, true)
    clearTimeout(this.focusTimer)
  }

  // async signOut() {
  //   const authTokenKey = 'auth._token.oauth2'

  //   // @ts-ignore
  //   await window.cookieStore.delete(authTokenKey)
  //   localStorage.removeItem(authTokenKey)
  //   localStorage.clear()

  //   const host = window.location.hostname
  //   const protocol = window.location.protocol
  //   let path = ''
  //   if (host === 'localhost') {
  //     path = protocol + '//' + host + ':3000'
  //   } else {
  //     path = protocol + '//' + host
  //   }

  // }

  get cboNavItems() {
    return ([] as NavItem[])
      .concat(userStore.isActingAsDelegate ? [this.activityNavItem] : [])
      .concat(
        this.numDelegatedClients > 0
          ? [
              {
                label: 'navigation.switchAccount',
                click: () => {
                  userStore.clearOwnerId()
                  this.closeSideNav()
                  this.$router.push(
                    this.localeRoute({
                      path: '/dashboard',
                      query: {
                        tab: 'switch',
                      },
                    }) as RawLocation,
                  )
                },
                icon: '$switch-account',
              },
              {
                label: 'navigation.manageAccounts',
                click: () => {
                  userStore.clearOwnerId()
                  this.closeSideNav()
                  this.$router.push(
                    this.localeRoute({
                      path: '/dashboard',
                      query: {
                        tab: 'manage',
                      },
                    }) as RawLocation,
                  )
                },
                icon: '$cog',
              },
            ]
          : [],
      )
  }

  get navItems() {
    switch (userStore.role) {
      case UserRole.CBO:
        return this.cboNavItems

      case UserRole.AGENT:
        return [] // TODO

      default:
        // UserRole.CLIENT
        return this.clientNavItems
    }
  }
}
</script>
