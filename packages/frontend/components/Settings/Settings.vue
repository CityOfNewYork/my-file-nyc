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
            :placeholder="$t('account.firstName')"
          />
          <p class="subtitle-1">{{ $t('account.lastName') }}</p>
          <v-text-field
            outlined
            v-model="familyName"
            :placeholder="$t('account.lastName')"
          />
          <p class="subtitle-1">{{ $t('account.dob') }}</p>
          <v-text-field
            outlined
            v-model="dob"
            :placeholder="$t('account.dob')"
          />
          <p class="subtitle-1">{{ $t('account.caseNumber') }}</p>
          <v-text-field
            outlined
            v-model="dhsCaseNumber"
            :placeholder="$t('account.caseNumber')"
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
        @click="save"
      >
        {{ $t('controls.edit') }}
      </v-btn>
    </div>
    <div class="mt-10">
      <p class="subtitle-1">{{ $t('account.firstName') }}</p>
      <p class="subtitle-1">{{ $t('account.lastName') }}</p>
      <p class="subtitle-1">{{ $t('account.dob') }}</p>
      <p class="subtitle-1">{{ $t('account.caseNumber') }}</p>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'nuxt-property-decorator'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { userStore } from '@/plugins/store-accessor'

@Component({
  components: {
    ValidationObserver,
    ValidationProvider,
  },
})
export default class Settings extends Vue {
  @Prop({ default: () => () => {} }) submit: (data: object) => void
  @Prop({ default: false }) editMode: boolean

  location = ''
  givenName = ''
  familyName = ''
  dob = ''
  dhsCaseNumber = ''

  mounted() {
    this.location = window.location.pathname
  }

  save() {
    const data = {
      givenName: this.givenName,
      familyName: this.familyName,
      dob: this.dob,
      dhsCaseNumber: this.dhsCaseNumber,
    }

    this.location == '/account'
      ? (this.editMode = !this.editMode)
      : this.submit(data)
  }
}
</script>

<style scoped lang="scss">
</style>