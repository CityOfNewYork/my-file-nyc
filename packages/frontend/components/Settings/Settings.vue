<template>
  <v-container v-if="editMode" class="pa-8">
    <div class="mt-1 ml-2 v-toolbar__title">
      {{ `${$t('navigation.settings')}` }}
    </div>
    <ValidationObserver ref="observer">
      <v-form @submit.prevent>
        <ValidationProvider rules="required|max:255">
          <p class="subtitle-1 mt-10">
            {{ $t('account.firstName') }}
          </p>
          <v-text-field outlined :placeholder="$t('account.firstName')" />
          <p class="subtitle-1 mt-10">{{ $t('account.lastName') }}</p>
          <v-text-field outlined :placeholder="$t('account.lastName')" />
          <p class="subtitle-1 mt-10">{{ $t('account.dob') }}</p>
          <v-text-field outlined :placeholder="$t('account.dob')" />
          <p class="subtitle-1 mt-10">{{ $t('account.caseNumber') }}</p>
          <v-text-field outlined :placeholder="$t('account.caseNumber')" />
        </ValidationProvider>
      </v-form>
    </ValidationObserver>
    <v-btn
      color="primary white--text"
      class="px-8 d-flex justify-center"
      style="
        bottom: 0%;
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
    <p class="subtitle-1 mt-10">
      {{ $t('account.firstName') }}
    </p>
    <p class="subtitle-1 mt-10">{{ $t('account.lastName') }}</p>
    <p class="subtitle-1 mt-10">{{ $t('account.dob') }}</p>
    <p class="subtitle-1 mt-10">{{ $t('account.caseNumber') }}</p>
  </v-container>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'nuxt-property-decorator'
import { userStore } from '@/plugins/store-accessor'
import { ValidationObserver, ValidationProvider } from 'vee-validate'

@Component({
  components: {
    ValidationObserver,
    ValidationProvider,
  },
})
export default class Settings extends Vue {
  @Prop({ default: () => () => {} }) submit: () => void
  editMode = false
  location = ''

  mounted() {
    this.location = window.location.pathname
  }

  save() {
    this.location === '/account'
      ? (this.editMode = !this.editMode)
      : this.submit
  }
}
</script>

<style scoped lang="scss">
</style>