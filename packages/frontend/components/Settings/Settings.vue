<template>
  <v-container v-if="editMode" class="pa-5 mb-10">
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
          <div class="d-flex justify-space-between">
            <div>
              <label>Month</label>
              <v-text-field outlined v-model="month" :rules="rules.month" />
            </div>
            <div>
              <label>Day</label>
              <v-text-field outlined v-model="day" :rules="rules.day" />
            </div>
            <div>
              <label>Year</label>
              <v-text-field outlined v-model="year" :rules="rules.year" />
            </div>
          </div>

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
        year: [
          (v: any) => Number.isInteger(Number(v)) || 'Have to be a number',
          (v: any) =>
            Number.parseInt(v) <= new Date().getFullYear() ||
            'Are you from the future?',
          (v: any) => Number.parseInt(v) >= 1900 || 'Are you a time traveler?',
          (v: any) => (v || '').length <= 4 || 'Year have to have 4 digits',
          (v: any) => (v || '').length >= 4 || 'Year have to have 4 digits',
        ],
        day: [
          (v: any) => Number.isInteger(Number(v)) || 'Have to be a number',
          (v: any) => Number.parseInt(v) <= 31 || 'Have to be less then 31',
          (v: any) => (v || '').length <= 2 || 'Day have to have 2 digits',
          (v: any) => (v || '').length >= 2 || 'Dat have to have 2 digits',
        ],
        month: [
          (v: any) => Number.isInteger(Number(v)) || 'Have to be a number',
          (v: any) => Number.parseInt(v) <= 12 || 'There are only 12 months',
          (v: any) => (v || '').length <= 2 || 'Month have to have 2 digits',
          (v: any) => (v || '').length >= 2 || 'Month have to have 2 digits',
        ],
      },
    }
  }

  location = ''
  givenName = ''
  familyName = ''
  dob = ''
  day = ''
  month = ''
  year = ''
  dhsCaseNumber = ''

  settingsFirstRun = this.$t('navigation.settingsFirstRun') as string

  mounted() {
    this.accountProfile.dob && this.dobDistruct(this.accountProfile.dob)

    this.location = window.location.pathname

    this.givenName = this.accountProfile.givenName
    this.familyName = this.accountProfile.familyName
    this.dhsCaseNumber = this.accountProfile.dhsCaseNumber
      ? this.accountProfile.dhsCaseNumber
      : 'CL-'
  }

  dobDistruct(dob: string) {
    const arr = dob.split('-')
    this.day = arr[1]
    this.month = arr[0]
    this.year = arr[2]

    this.dob = dob
  }

  dobConstruct() {
    return this.month + '-' + this.day + '-' + this.year
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
    if (
      !!this.givenName &&
      !!this.familyName &&
      !!this.day &&
      !!this.month &&
      !!this.year &&
      !!this.dhsCaseNumber
    ) {
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
    this.dob = this.dobConstruct()

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