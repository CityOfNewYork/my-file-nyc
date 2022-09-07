<template>
  <v-container v-if="editMode" class="pa-5 mb-10">
    <div class="mt-1" style="text-align: center">
      <CityLogo class="mx-auto my-8" />
      <p class="my-8" v-html="boldMyFile"></p>
    </div>
    <ValidationObserver ref="observer" v-slot="{ invalid }">
      <v-form @submit.prevent ref="form">
        <ValidationProvider
          rules="required|max:50|min:2|alpha_spaces"
          v-slot="{ errors }"
        >
          <p class="subtitle-1 mt-1">
            {{ $t('account.whatIsYourFirstName') }}
          </p>
          <v-text-field
            outlined
            v-model="givenName"
            type="text"
            :placeholder="
              accountProfile.givenName ? '' : $t('account.firstName')
            "
          />
          <span class="invalid">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider
          rules="required|max:50|min:2|alpha_spaces"
          v-slot="{ errors }"
        >
          <p class="subtitle-1">{{ $t('account.whatIsYourLastName') }}</p>
          <v-text-field
            outlined
            v-model="familyName"
            type="text"
            :placeholder="
              accountProfile.familyName ? '' : $t('account.lastName')
            "
          />
          <span class="invalid">{{ errors[0] }}</span>
        </ValidationProvider>

        <p class="subtitle-1">{{ $t('account.whatIsYourDob') }}</p>
        <div class="d-flex justify-space-between">
          <div class="inputContainer">
            <ValidationProvider
              rules="between:1,12|required"
              v-slot="{ errors }"
            >
              <label>Month</label>
              <v-text-field
                type="number"
                outlined
                v-model="month"
                :class="$vuetify.breakpoint.mdAndDown ? 'input' : ''"
              />
              <span class="invalid">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="inputContainer">
            <ValidationProvider
              rules="required|between:1,31"
              v-slot="{ errors }"
            >
              <label>Day</label>
              <v-text-field
                type="number"
                outlined
                v-model="day"
                :class="$vuetify.breakpoint.mdAndDown ? 'input' : ''"
              />
              <span class="invalid">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="inputContainer">
            <ValidationProvider
              rules="required|between:1900,2022|max:4"
              v-slot="{ errors }"
            >
              <label>Year</label>
              <v-text-field
                type="number"
                outlined
                v-model="year"
                :class="$vuetify.breakpoint.mdAndDown ? 'input' : ''"
              />
              <span class="invalid">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
        </div>
        <ValidationProvider rules="required|max:10|min:7" v-slot="{ errors }">
          <div>
            <p class="subtitle-1">
              {{ $t('account.whatIsYourDshCaseNumber') }}
            </p>
            <p>{{ $t('account.dhsShow') }}</p>
            <v-text-field
              outlined
              v-model="dhsCaseNumber"
              type="text"
              :placeholder="
                accountProfile.caseNumber ? '' : $t('account.caseNumber')
              "
            />
            <span class="invalid">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
      </v-form>
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
        :disabled="invalid"
        @click="save"
      >
        {{ $t('controls.save') }}
      </v-btn>
    </ValidationObserver>
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
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import {
  required,
  between,
  max,
  alpha_spaces,
  min,
} from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'This field is required',
})

extend('max', {
  ...max,
  message: 'Input is invalid',
})

extend('min', {
  ...min,
  message: 'Input is invalid',
})

extend('between', {
  ...between,
  message: 'Input is invalid',
})

extend('alpha_spaces', {
  ...alpha_spaces,
  message: 'Input is invalid',
})

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
      // rules: {
      //   required: [
      //     (v: any) => (v || '').length > 0 || 'This field is required',
      //   ],
      //   caseNumber: [
      //     (v: any) => (v || '').length > 3 || 'Case number is required',
      //   ],
      //   year: [
      //     (v: any) => (v || '').length > 0 || 'This field is required',
      //     (v: any) => Number.isInteger(Number(v)) || 'Have to be a number',
      //     (v: any) => (v || '').length <= 4 || 'Year have to have 4 digits',
      //     (v: any) => (v || '').length >= 4 || 'Year have to have 4 digits',
      //     (v: any) =>
      //       Number.parseInt(v) <= new Date().getFullYear() ||
      //       'Are you from the future?',
      //     (v: any) => Number.parseInt(v) >= 1900 || 'Are you a time traveler?',
      //   ],
      //   day: [
      //     (v: any) => Number.isInteger(Number(v)) || 'Have to be a number',
      //     (v: any) => Number.parseInt(v) <= 31 || 'Have to be less then 31',
      //     (v: any) => Number.parseInt(v) > 0 || 'Day have to be above 0',
      //     (v: any) => (v || '').length <= 2 || 'Day have to have 2 digits',
      //     (v: any) =>
      //       (v || '').length >= 1 || 'Date have to have at least 1 digit',
      //   ],
      //   month: [
      //     (v: any) => Number.isInteger(Number(v)) || 'Have to be a number',
      //     (v: any) => Number.parseInt(v) <= 12 || 'There are only 12 months',
      //     (v: any) => Number.parseInt(v) > 0 || 'Month have to be above 0',
      //     (v: any) => (v || '').length <= 2 || 'Month have to have 2 digits',
      //     (v: any) =>
      //       (v || '').length >= 1 || 'Month have to have at least 1 digit',
      //   ],
      // },
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
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
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
    } else {
      console.log('Input is invalid')
    }
  }

  get myFileLogo(): string {
    return require('@/assets/images/my-file-logo.svg')
  }
}
</script>

<style scoped lang="scss">
.input {
  width: 80%;
  height: 4rem;
}

.inputContainer {
  margin-bottom: 10px;
}

.invalid {
  color: red;
}
</style>