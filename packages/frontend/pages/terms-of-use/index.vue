<template>
  <div>
    <AppBar v-if="hasAccepted || !$auth.loggedIn" :empty="true">
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

    <SideNav v-if="hasAccepted && $auth.loggedIn" />

    <v-divider
      v-if="hasAccepted || !$auth.loggedIn"
      :class="$vuetify.breakpoint.smAndUp ? 'my-12' : 'my-5'"
    />

    <v-container v-if="step < 1" :class="{ 'mt-8': hasAccepted }">
      <v-row no-gutters align="center" justify="center">
        <v-col class="px-3" cols="12">
          <CityLogo
            :class="
              $vuetify.breakpoint.smAndUp ? 'mx-auto my-8' : ' mx-auto my-8'
            "
          />
          <MarkdownContent
            :content-path="markdown"
            :class="$vuetify.breakpoint.smAndUp ? '' : 'mb-15'"
          />
        </v-col>
      </v-row>
      <v-row
        v-if="!hasAccepted && $auth.loggedIn"
        no-gutters
        justify="center"
        class="pa-12 pt-1"
      >
        <v-btn
          :disabled="loading"
          outlined
          class="mx-2 mb-2 px-6 font-weight-bold"
          style="border-color: #2157e4; color: #2157e4; width: 105%"
          @click="cancel"
        >
          {{ $t('controls.declineAndLogOut') }}
        </v-btn>
        <v-btn
          :loading="loading"
          width="105%"
          class="mx-2 primary px-10"
          @click="accept"
        >
          {{ $t('controls.accept') }}
        </v-btn>
      </v-row>
    </v-container>
    <div v-else-if="!agent">
      <Settings :hasAccepted="hasAccepted" :submit="submit" editMode="true" />
    </div>
    <SnackBar v-if="hasAccepted && $auth.loggedIn" />
  </div>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator'
import { userStore } from '@/plugins/store-accessor'
import Navigation from '@/mixins/navigation'

@Component({
  layout: 'empty',
  head() {
    return {
      title: this.$t('tabTitles.termsOfUse') as string,
    }
  },
  mixins: [Navigation],
  auth: false,
})
export default class TermsOfUse extends mixins(Navigation) {
  loading = false
  markdown = ''
  step = 0
  agent = false

  mounted() {
    this.agent = userStore.isAgent
  }

  created() {
    const locale = this.$i18n.locale
    this.markdown = require(`@/assets/content/terms-of-use/${locale}.md`)
  }

  get hasAccepted() {
    return userStore.profile && userStore.profile.termsOfUseAccepted
  }

  async accept() {
    if (this.agent) {
      // TODO This is temporary solution. Moving forward we going to need separat API call for the agent or allow accept amty data for current API call.
      const data: object = {
        familyName: 'Agent',
        givenName: 'Agent',
        dob: 'N/A',
        dhsCaseNumber: 'N/A',
        lang: 'en',
      }
      await this.$store.dispatch('user/acceptTerms', data)
      this.step = 0
      this.$router.push(this.localePath('/dashboard'))
    } else {
      this.step++
    }
  }

  async submit(data: object) {
    this.loading = true
    await this.$store.dispatch('user/acceptTerms', data)
    this.step = 0
    this.$router.push(this.localePath('/dashboard'))
  }

  cancel() {
    this.$router.push(this.localePath('/logout'))
  }

  back() {
    if (window.history.length) {
      this.$router.back()
    } else {
      this.$router.push(this.localePath('/dashboard'))
    }
  }

  get myFileLogo(): string {
    return require('@/assets/images/my-file-logo.svg')
  }
}
</script>
