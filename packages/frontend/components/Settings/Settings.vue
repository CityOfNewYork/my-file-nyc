<template>
  <v-container v-if="editMode" class="pa-5">
    <div class="mt-1" style="text-align: center">
      <CityLogo class="mx-auto my-8" />
      <p class="my-8" v-html="boldMyFile"></p>
    </div>
    <ValidationObserver ref="observer">
      <v-form @submit.prevent>
        <ValidationProvider rules="required|max:255">
          <p class="subtitle-1 mt-1">
            {{ $t('account.whatIsYourFirstName') }}
          </p>
          <v-text-field
            required
            :rules="rules.required"
            outlined
            v-model="givenName"
            type="text"
            :placeholder="
              accountProfile.givenName ? '' : $t('account.firstName')
            "
          />
          <p class="subtitle-1">{{ $t('account.whatIsYourLastName') }}</p>
          <v-text-field
            required
            :rules="rules.required"
            outlined
            v-model="familyName"
            type="text"
            :placeholder="
              accountProfile.familyName ? '' : $t('account.lastName')
            "
          />
          <p class="subtitle-1">{{ $t('account.whatIsYourDob') }}</p>

          <div>
            <v-menu
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  required
                  :rules="rules.required"
                  v-model="dob"
                  label="Select your birthday"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="dob"
                :max="
                  new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                    .toISOString()
                    .substr(0, 10)
                "
                min="1920-01-01"
              ></v-date-picker>
            </v-menu>
          </div>

          <!-- <v-text-field
            outlined
            v-model="dob"
            :placeholder="accountProfile.dob ? '' : $t('account.dob')"
          /> -->

          <div>
            <p class="subtitle-1">
              {{ $t('account.whatIsYourDshCaseNumber') }}
            </p>
            <p>{{ $t('account.dhsShow') }}</p>
            <v-text-field
              required
              :rules="rules.caseNumber"
              outlined
              v-model="dhsCaseNumber"
              type="text"
              :placeholder="
                accountProfile.caseNumber ? '' : $t('account.caseNumber')
              "
            />
          </div>
        </ValidationProvider>
      </v-form>
    </ValidationObserver>
    <v-btn
      color="primary white--text"
      class="px-8 d-flex justify-center"
      style="
        background-color: #2157e4;
        height: 3rem;
        align-items: center;
        margin: auto;
        bottom: 1rem;
      "
      :disabled="isValid"
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
    </div>
    <div
      :class="
        $vuetify.breakpoint.smAndUp ? 'mt-10  justify-space-between' : 'mt-10'
      "
    >
      <div>
        <p class="subtitle-1">{{ $t('account.firstName') }}</p>
        <p :key="givenName">
          {{ givenName }}
        </p>
      </div>
      <div>
        <p class="subtitle-1">{{ $t('account.lastName') }}</p>
        <p :key="familyName">
          {{ familyName }}
        </p>
      </div>
      <div>
        <p class="subtitle-1">{{ $t('account.dob') }}</p>
        <p :key="dob">{{ dob }}</p>
      </div>
      <div>
        <p class="subtitle-1">{{ $t('account.caseNumber') }}</p>
        <p :key="dhsCaseNumber">
          {{ dhsCaseNumber }}
        </p>
      </div>
    </div>
    <v-btn
      color="primary white--text"
      class="px-8 d-flex justify-center -10"
      style="
        background-color: #2157e4;
        height: 3rem;
        align-items: center;
        margin: auto;
      "
      @click="edit"
    >
      {{ $t('controls.edit') }}
    </v-btn>
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
  @Prop({ default: () => () => {} }) hasAccepted: () => void

  @Prop({ default: false }) editMode: boolean
  @Prop({ default: {} }) accountProfile: any

  data() {
    return {
      givenName: this.givenName,
      familyName: this.familyName,
      dob: this.dob,
      dhsCaseNumber: this.dhsCaseNumber,
      editMode: this.editMode,
      rules: {
        required: [
          (v: any) => (v || '').length > 0 || 'This field is required',
        ],
        caseNumber: [
          (v: any) => (v || '').length > 3 || 'Case number is required',
        ],
      },
    }
  }

  location = ''
  givenName = ''
  familyName = ''
  dob = ''
  dhsCaseNumber = ''

  settingsFirstRun = this.$t('navigation.settingsFirstRun') as string

  mounted() {
    this.location = window.location.pathname

    this.givenName = this.accountProfile.givenName
    this.familyName = this.accountProfile.familyName
    this.dob = this.accountProfile.dob
    this.dhsCaseNumber = this.accountProfile.dhsCaseNumber
      ? this.accountProfile.dhsCaseNumber
      : 'CL-'
  }

  async patchUser(data: object) {
    const response = await this.$store.dispatch('user/patchProfile', data)
    this.givenName = response.givenName
    this.familyName = response.familyName
    this.dob = response.dob
    this.dhsCaseNumber = response.dhsCaseNumber
    this.editMode = !this.editMode
  }

  get isValid() {
    if (!!this.givenName && !!this.familyName && !!this.dob) {
      return false
    } else {
      return true
    }
  }

  get boldMyFile() {
    if (!this.hasAccepted) {
      return this.settingsFirstRun.replace('#', '<b>').replace('&', '</b>')
    }
    return this.$t('navigation.settings')
  }

  edit() {
    this.editMode = !this.editMode
  }

  async save() {
    const data = {
      givenName: this.givenName,
      familyName: this.familyName,
      dob: this.dob,
      dhsCaseNumber: this.dhsCaseNumber,
    }

    if (this.location == '/account') {
      this.patchUser(data)
    } else {
      this.submit(data)
    }
  }

  get myFileLogo(): string {
    return require('@/assets/images/my-file-logo.svg')
  }
}
</script>

<style scoped lang="scss">
</style>