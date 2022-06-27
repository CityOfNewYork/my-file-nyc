<template>
  <v-container v-if="editMode" class="pa-8">
    <div class="mt-1 v-toolbar__title" style="text-align: center">
      <p>{{ hasAccepted ? '' : `${$t('navigation.welcomeFirstRun')}` }}</p>
      <p>
        {{
          hasAccepted
            ? `${$t('navigation.settings')}`
            : `${$t('navigation.settingsFirstRun')}`
        }}
      </p>
    </div>
    <ValidationObserver ref="observer">
      <v-form @submit.prevent>
        <ValidationProvider rules="required|max:255">
          <p class="subtitle-1 mt-1">
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
              accountProfile.familyName ? '' : $t('account.lastName')
            "
          />
          <p class="subtitle-1">{{ $t('account.dob') }}</p>

          <div>
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="dob"
                  label="Birthday date"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="dob"
                :active-picker.sync="activePicker"
                :max="
                  new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                    .toISOString()
                    .substr(0, 10)
                "
                min="1950-01-01"
                @change="save"
              ></v-date-picker>
            </v-menu>
          </div>

          <!-- <v-text-field
            outlined
            v-model="dob"
            :placeholder="accountProfile.dob ? '' : $t('account.dob')"
          /> -->
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
      class="px-8 d-flex justify-center"
      style="
        background-color: #2157e4;
        height: 3rem;
        align-items: center;
        margin: auto;
        bottom: 1rem;
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
    </div>
    <div
      :class="
        $vuetify.breakpoint.smAndUp
          ? 'mt-10 d-flex justify-space-between'
          : 'mt-10'
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
    }
  }

  location = ''
  givenName = ''
  familyName = ''
  dob = ''
  dhsCaseNumber = ''

  mounted() {
    console.log(this.hasAccepted)
    this.location = window.location.pathname

    this.givenName = this.accountProfile.givenName
    this.familyName = this.accountProfile.familyName
    this.dob = this.accountProfile.dob
    this.dhsCaseNumber = this.accountProfile.dhsCaseNumber
  }

  async patchUser(data: object) {
    const response = await this.$store.dispatch('user/patchProfile', data)
    this.givenName = response.givenName
    this.familyName = response.familyName
    this.dob = response.dob
    this.dhsCaseNumber = response.dhsCaseNumber
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
      this.editMode = !this.editMode
    } else {
      this.submit(data)
    }
  }
}
</script>

<style scoped lang="scss">
</style>