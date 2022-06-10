<template>
  <v-container v-if="editMode" class="pa-8">
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
    <p class="subtitle-1 mt-10">
      {{ $t('account.firstName') }}
    </p>
    <p class="subtitle-1 mt-10">{{ $t('account.lastName') }}</p>
    <p class="subtitle-1 mt-10">{{ $t('account.dob') }}</p>
    <p class="subtitle-1 mt-10">{{ $t('account.caseNumber') }}</p>
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
      {{ $t('controls.edit') }}
    </v-btn>
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