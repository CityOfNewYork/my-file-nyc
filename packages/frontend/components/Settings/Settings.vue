<template>
  <v-container v-if="editMode" class="pa-8">
    <div class="mt-1 v-toolbar__title">
      {{ `${$t('navigation.settings')}` }}
    </div>
    <ValidationObserver ref="observer">
      <v-form @submit.prevent>
        <ValidationProvider rules="required|max:255">
          <p class="subtitle-1 mt-2">
            {{ $t('account.firstName') }}
          </p>
          <v-text-field
            outlined
            v-model="givenName"
            :placeholder="
              accountProfile.givenName ? '' : $t('account.firstName')
            "
          />
          <p class="subtitle-1">{{ $t('account.lastName') }}</p>
          <v-text-field
            outlined
            v-model="familyName"
            :placeholder="
              accountProfile.givenName ? '' : $t('account.lastName')
            "
          />
          <p class="subtitle-1">{{ $t('account.dob') }}</p>
          <v-text-field
            outlined
            v-model="dob"
            :placeholder="accountProfile.dob ? '' : $t('account.dob')"
          />
          <p class="subtitle-1">{{ $t('account.caseNumber') }}</p>
          <v-text-field
            outlined
            v-model="dhsCaseNumber"
            :placeholder="
              accountProfile.caseNumber ? '' : $t('account.caseNumber')
            "
          />
        </ValidationProvider>
      </v-form>
    </ValidationObserver>
    <v-btn
      color="primary white--text"
      class="px-8 d-flex justify-center mb-"
      style="
        bottom: 2%;
        background-color: #2157e4;
        height: 3rem;
        align-items: center;
        margin: auto;
      "
      @click="save"
    >
      {{ $t('controls.save') }}
    </v-btn>
  </v-container>
  <v-container class="pa-8" v-else>
    <div class="d-flex justify-space-between">
      <div class="pt-2 v-toolbar__title">
        {{ `${$t('navigation.settings')}` }}
      </div>
      <v-btn
        color="primary white--text"
        :class="$vuetify.breakpoint.smAndUp ? 'px-12' : 'px-8'"
        style="background-color: #2157e4; height: 3rem"
        @click="edit"
      >
        {{ $t('controls.edit') }}
      </v-btn>
    </div>
    <div class="mt-10">
      <p class="subtitle-1">{{ $t('account.firstName') }}</p>
      <p class="subtitle-1">{{ accountProfile.givenName }}</p>
      <p class="subtitle-1">{{ $t('account.lastName') }}</p>
      <p class="subtitle-1">{{ accountProfile.familyName }}</p>
      <p class="subtitle-1">{{ $t('account.dob') }}</p>
      <p class="subtitle-1">{{ accountProfile.dob }}</p>
      <p class="subtitle-1">{{ $t('account.caseNumber') }}</p>
      <p class="subtitle-1">{{ accountProfile.dhsCaseNumber }}</p>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'nuxt-property-decorator'
import { ValidationObserver, ValidationProvider } from 'vee-validate'

@Component({
  components: {
    ValidationObserver,
    ValidationProvider,
  },
})
export default class Settings extends Vue {
  @Prop({ default: () => () => {} }) submit: (data: object) => void
  @Prop({ default: false }) editMode: boolean
  @Prop({ default: {} }) accountProfile: object

  location = ''
  givenName = ''
  familyName = ''
  dob = ''
  dhsCaseNumber = ''

  mounted() {
    this.location = window.location.pathname
  }

  async patchUser(data: object) {
    await this.$store.dispatch('user/patchProfile', data)
  }

  edit() {
    this.editMode = !this.editMode
  }

  save() {
    const data = {
      givenName: this.givenName,
      familyName: this.familyName,
      dob: this.dob,
      dhsCaseNumber: this.dhsCaseNumber,
    }

    if (this.location == '/account') {
      this.patchUser(data)
      this.editMode = !this.editMode
    } else {
      this.submit(data)
    }
  }
}
</script>

<style scoped lang="scss">
</style>