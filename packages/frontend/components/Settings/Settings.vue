<template>
  <v-container v-if="loading">
    <v-container v-if="editMode" class="pa-5 mb-10">
      <div class="mt-1" style="text-align: center">
        <CityLogo class="mx-auto my-8" />
        <!-- <p class="my-8" v-html="boldMyFile"></p> -->
      </div>
      <ValidationObserver ref="observer" v-slot="{ invalid }">
        <v-form ref="form" style="margin-bottom: 40px" @submit.prevent>
          <ValidationProvider
            v-slot="{ errors }"
            name="First Name"
            rules="required|max:50|min:2|alpha_spaces_with_chars"
          >
            <p class="subtitle-1 mt-1">
              {{ $t('account.whatIsYourFirstName') }}
            </p>
            <v-text-field
              v-model="givenName"
              outlined
              type="text"
              :placeholder="
                accountProfile.givenName ? '' : $t('account.firstName')
              "
            />
            <!-- Display errors for each validation rule with translations -->
            <span v-if="givenName.length === 0" class="invalid">
              {{ $t('validationMsg.firstNameRequired') }}
            </span>
            <span v-else-if="givenName.length > 50" class="invalid">
              {{ $t('validationMsg.firstNameMaxLength') }}
            </span>
            <span v-else-if="givenName.length < 2" class="invalid">
              {{ $t('validationMsg.firstNameMinLength') }}
            </span>
            <span
              v-else-if="
                !givenName.match(
                  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'`-]+$/u,
                )
              "
              class="invalid"
            >
              {{ $t('validationMsg.firstNameAlpha') }}
            </span>
          </ValidationProvider>
          <ValidationProvider
            v-slot="{ errors }"
            name="Last Name"
            rules="required|max:50|min:2|alpha_spaces_with_chars"
          >
            <p class="subtitle-1">{{ $t('account.whatIsYourLastName') }}</p>
            <v-text-field
              v-model="familyName"
              outlined
              type="text"
              :placeholder="
                accountProfile.familyName ? '' : $t('account.lastName')
              "
            />
            <span v-if="familyName.length === 0" class="invalid">
              {{ $t('validationMsg.lastNameRequired') }}
            </span>
            <span v-else-if="familyName.length > 50" class="invalid">
              {{ $t('validationMsg.lasttNameMaxLength') }}
            </span>
            <span v-else-if="familyName.length < 2" class="invalid">
              {{ $t('validationMsg.lastNameMinLength') }}
            </span>
            <span
              v-else-if="
                !familyName.match(
                  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'`-]+$/u,
                )
              "
              class="invalid"
            >
              {{ $t('validationMsg.lastNameAlpha') }}
            </span>
          </ValidationProvider>

          <p class="subtitle-1">{{ $t('account.whatIsYourDob') }}</p>
          <div class="d-flex justify-space-between">
            <div class="inputContainer">
              <ValidationProvider
                v-slot="{ errors }"
                name="Month"
                rules="between:1,12|required|max:2"
              >
                <label>{{ $t('account.month') }}</label>
                <v-text-field
                  v-model="month"
                  type="number"
                  outlined
                  :class="$vuetify.breakpoint.mdAndDown ? 'input' : ''"
                />
                <span v-if="month.length === 0" class="invalid">
                  {{ $t('validationMsg.monthRequired') }}
                </span>
                <span
                  v-if="
                    month.length > 2 ||
                    parseInt(month) <= 0 ||
                    parseInt(month) > 12
                  "
                  class="invalid"
                >
                  {{ $t('validationMsg.monthNotValid') }}
                </span>
              </ValidationProvider>
            </div>
            <div class="inputContainer">
              <ValidationProvider
                v-slot="{ errors }"
                name="Day"
                rules="required|between:1,31|max:2"
              >
                <label>{{ $t('account.day') }}</label>
                <v-text-field
                  v-model="day"
                  type="number"
                  outlined
                  :class="$vuetify.breakpoint.mdAndDown ? 'input' : ''"
                />
                <span v-if="day.length === 0" class="invalid">
                  {{ $t('validationMsg.dayRequired') }}
                </span>
                <span
                  v-if="parseInt(day) <= 0 || parseInt(day) > 31"
                  class="invalid"
                >
                  {{ $t('validationMsg.dayNotValid') }}
                </span>
              </ValidationProvider>
            </div>
            <div class="inputContainer">
              <ValidationProvider
                v-slot="{ errors }"
                name="Year"
                rules="required|between:1900,2022|max:4"
              >
                <label>{{ $t('account.year') }}</label>
                <v-text-field
                  v-model="year"
                  type="number"
                  outlined
                  :class="$vuetify.breakpoint.mdAndDown ? 'input' : ''"
                />
                <span v-if="year.length === 0" class="invalid">
                  {{ $t('validationMsg.yearRequired') }}
                </span>
                <span
                  v-if="
                    (year.length !== 4 && year.length !== 0) ||
                    parseInt(year) < 1920 ||
                    parseInt(year) > 2022
                  "
                  class="invalid"
                >
                  {{ $t('validationMsg.yearNotValid') }}
                </span>
              </ValidationProvider>
            </div>
          </div>
          <div>
            <p class="subtitle-1">
              <!-- {{ $t('account.whatIsYourDshCaseNumber') }} -->
              {{ $t('account.preferredLanguage') }}
            </p>
            <LanguageSelector
              :locale="locale"
              :locale-change="localeChange"
              text-color="black"
              outlined="true"
            />
          </div>

          <ValidationProvider
            v-slot="{ errors }"
            name="Case Number"
            rules="required|max:20|min:4"
          >
            <div>
              <p class="subtitle-1">
                {{ $t('account.whatIsYourDshCaseNumber') }}
              </p>
              <p>{{ $t('account.dhsShow') }}</p>
              <v-text-field
                v-model="dhsCaseNumber"
                outlined
                type="text"
                :placeholder="
                  accountProfile.caseNumber ? '' : $t('account.caseNumber')
                "
              />
              <span v-if="dhsCaseNumber.length === 0" class="invalid">
                {{ $t('validationMsg.caseNumberRequired') }}
              </span>
              <span v-if="dhsCaseNumber.length > 20" class="invalid">
                {{ $t('validationMsg.caseNumberMaxLength') }}
              </span>
              <span
                v-if="dhsCaseNumber.length < 4 && dhsCaseNumber.length !== 0"
                class="invalid"
              >
                {{ $t('validationMsg.caseNumberMinLength') }}
              </span>
            </div>
          </ValidationProvider>
          <!-- language changer component -->
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
    <v-container
      v-else
      class="pa-8 d-flex justify-space-between flex-column"
      style="width: 80%"
    >
      <div class="d-flex justify-space-between">
        <h2 class="pt-2" style="color: black">
          {{ `${$t('navigation.settings')}` }}
        </h2>
      </div>
      <div
        :class="
          $vuetify.breakpoint.smAndUp
            ? 'mt-6 d-flex flex-column justify-center'
            : 'mt-6'
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
        <div>
          <p class="subtitle-1">{{ $t('account.locale') }}</p>
          <p :key="locale">
            {{ localToRender }}
          </p>
        </div>
      </div>
      <v-btn
        color="primary white--text"
        class="px-8 d-flex justify-center my-10"
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
  </v-container>
  <div v-else>
    <v-card
      v-for="i in new Array(5)"
      :key="i"
      class="mx-auto mb-4"
      max-width="700"
      outlined
    >
      <v-skeleton-loader type="list-item-two-line"></v-skeleton-loader>
    </v-card>
  </div>
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

extend('required', required)

extend('max', max)

extend('min', min)

extend('between', between)

extend('alpha_spaces', alpha_spaces)

extend('name', alpha_spaces)

interface AllowedChars {
  [key: string]: string
}

const allowedChars: AllowedChars = {
  '-': '-',
  "'": "'",
  '`': '`',
}

extend('alpha_spaces_with_chars', {
  ...alpha_spaces,
  message:
    "The {_field_} may only contain letters, spaces, and the following characters: - '`",
  validate(value: any) {
    for (const char of value) {
      if (
        !/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'`-]+$/u.test(
          char,
        ) &&
        !allowedChars[char]
      ) {
        return false
      }
    }
    return true
  },
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
      loading: true,
      givenName: this.givenName,
      familyName: this.familyName,
      dob: this.dob,
      dhsCaseNumber: this.dhsCaseNumber,
      editMode: this.editMode,
      locale: this.$i18n.locale,
      localToRender: '',
      languagesObject: {
        en: 'English',
        es: 'Español',
        ar: 'عرب',
        ch: '中文',
        ru: 'Русский',
        urd: 'اردو',
        ko: '한국인',
        fr: 'Français',
        ht: 'Kreyol Ayisyen',
        bn: 'বাংলা',
        pl: 'Polskie',
        uk: 'Українська',
        pt: 'Português',
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
  locale = ''
  localToRender = ''
  languagesObject = ''
  loading = true

  settingsFirstRun = this.$t('navigation.settingsFirstRun') as string

  beforeMount() {
    if (!this.accountProfile.familyName && !this.accountProfile.givenName) {
      this.givenName = '  '
      this.familyName = '  '
      this.dhsCaseNumber = '  '
      this.accountProfile.dob = ''
      this.day = ' '
      this.month = ' '
      this.year = '   '
    } else {
      this.location = window.location.pathname

      this.accountProfile.dob && this.dobDistruct(this.accountProfile.dob)
      this.givenName = this.accountProfile.givenName
      this.familyName = this.accountProfile.familyName
      this.dhsCaseNumber = this.accountProfile.dhsCaseNumber
      this.locale = this.accountProfile.locale
      this.localToRender = this.languagesObject[this.locale as any]
    }
  }

  mounted() {
    if (!this.accountProfile.familyName && !this.accountProfile.givenName) {
      this.givenName = '  '
      this.familyName = '  '
      this.dhsCaseNumber = '    '
      this.day = ' '
      this.month = ' '
      this.year = '    '
      this.accountProfile.dob = ''
    } else {
      this.location = window.location.pathname

      this.accountProfile.dob && this.dobDistruct(this.accountProfile.dob)
      this.givenName = this.accountProfile.givenName
      this.familyName = this.accountProfile.familyName
      this.dhsCaseNumber = this.accountProfile.dhsCaseNumber
      this.locale = this.accountProfile.locale
      this.localToRender = this.languagesObject[this.locale as any]
    }
  }

  updated() {
    this.localToRender = this.languagesObject[this.locale as any]
  }

  localeChange(locale: string) {
    this.locale = locale
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
    this.loading = false
    const response = await this.$store.dispatch('user/patchProfile', data)

    this.givenName = response.givenName
    this.familyName = response.familyName
    this.dob = response.dob
    this.dhsCaseNumber = response.dhsCaseNumber
    this.locale = response.locale
    this.$i18n.locale = response.locale
    this.loading = true
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
        givenName: this.givenName.trim(),
        familyName: this.familyName.trim(),
        dob: this.dob.trim(),
        dhsCaseNumber: this.dhsCaseNumber.trim(),
        locale: this.locale,
      }

      console.log(data)
      if (
        `${this.location}` == `/${this.$i18n.locale}/account` ||
        `${this.location}` == `/account`
      ) {
        this.patchUser(data)
      } else {
        this.submit(data)
      }
      this.edit()
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
