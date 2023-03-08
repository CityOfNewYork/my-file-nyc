<template>
  <button
    class="upload-container"
    tabindex="0"
    @keydown.enter="openFileInput()"
  >
    <label
      for="file-input"
      :class="[
        'upload-label',
        'font-weight-medium',
        'body-1',
        `px-${px}`,
        textButton ? 'text' : 'v-btn',
        { disabled: isLoading },
        { 'v-btn--outlined': outlined },
        { 'font-weight-bold': textButton },
      ]"
    >
      <v-icon v-if="prependIcon" class="mr-4" small v-text="prependIcon" />
      {{ $t(label) }}
      <input
        id="file-input"
        @click="singleOrMultyDialog()"
        @keydown.enter="singleOrMultyDialog()"
      />
    </label>
    <v-dialog
      v-model="showSelectionDialog"
      max-width="fit-content"
      transition="dialog-bottom-transition"
      @click:outside="closeDialog"
    >
      <template>
        <v-container>
          <UploadButtonFileInput :onFileInput="onFileInput" />
          <!-- <div class="multyple">
            <label>{{ $t('document.signleOrMultyple') }}</label>
            <v-radio-group v-model="multiple" mandatory>
              <v-radio label="One file" :value="false"></v-radio>
              <v-radio label="Multiple files" :value="true"></v-radio>
            </v-radio-group>
            <label
              :class="[
                'upload-label',
                'font-weight-medium',
                'body-1',
                `px-${px}`,
                textButton ? 'text' : 'v-btn',
                { disabled: isLoading },
                { 'v-btn--outlined': outlined },
                { 'font-weight-bold': textButton },
              ]"
            >
              <v-icon
                v-if="prependIcon"
                class="mr-4"
                small
                v-text="prependIcon"
              />
              {{
                multiple
                  ? $t('controls.uploadFiles')
                  : $t('controls.uploadFile')
              }}

              <input
                id="file-input"
                ref="fileInput"
                type="file"
                :multiple="multiple"
                class="fileInput"
                accept="application/pdf, image/jpeg, image/png, image/tiff"
                @click="resetSelection"
                @keydown.enter="resetSelection()"
                @change="onFileInput"
              />
            </label>
          </div> -->
        </v-container>
      </template>
    </v-dialog>
    <v-dialog
      v-model="showDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <slot name="activator" v-bind="attrs" v-on="on" />
      </template>
      <v-card>
        <v-toolbar flat>
          <!-- <v-btn class="ml-3 a11y-focus" icon @click.stop="reset">
            <v-icon small class="mr-2">$arrow-left</v-icon>
            <span class="px-2 grey-8--text" style="font-size: 22px">
              {{ $t('navigation.back') }}
            </span>
          </v-btn> -->
          <BackButton :reset="reset" />

          <!-- <v-toolbar-title>
            {{ $t('document.editDetailsTitle') }}
          </v-toolbar-title> -->
          <v-spacer />
        </v-toolbar>
        <v-container class="pa-8">
          <ValidationObserver ref="observer">
            <v-form @submit.prevent>
              <ValidationProvider
                v-slot="{ errors }"
                name="name"
                rules="required|max:255"
              >
                <p class="subtitle-1 mt-10">
                  {{ $t('document.documentName') }}
                </p>
                <v-text-field
                  v-model="documentName"
                  :error-messages="errors"
                  outlined
                  :placeholder="$t('document.enterNamePlaceholder')"
                />
                <p class="subtitle-1 mt-10">
                  {{ $t('document.enterDescriptionPlaceholder') }}
                </p>
                <v-textarea
                  v-model="documentDescription"
                  outlined
                  :placeholder="$t('document.enterDescriptionPlaceholder')"
                />
              </ValidationProvider>
              <div>
                <draggable v-model="files">
                  <div
                    v-for="fileElement in files"
                    :key="fileElement.file.name"
                  >
                    {{ fileElement.file.name }}
                    <v-img
                      max-height="236"
                      max-width="331"
                      :src="fileElement.img"
                    ></v-img>
                  </div>
                </draggable>
              </div>
            </v-form>
          </ValidationObserver>
        </v-container>

        <v-btn
          color="primary white--text"
          class="body-1 my-2 mx-auto d-flex"
          :style="
            $vuetify.breakpoint.smAndDown
              ? 'width: 100%; position: fixed; bottom: -0.5rem;'
              : ''
          "
          :disabled="!documentName"
          @keydown.enter="uploadDocument()"
          @click="uploadDocument"
        >
          {{ $t('controls.uploadDocument') }}
        </v-btn>
      </v-card>
    </v-dialog>
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { snackbarStore } from '@/plugins/store-accessor'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import UploadButtonFileInput from '../UploadButtonFileInput/UploadButtonFileInput.vue'
import SnackParams from '@/types/snackbar'
import draggable from 'vuedraggable'

@Component({
  components: {
    ValidationObserver,
    ValidationProvider,
    UploadButtonFileInput,
    draggable,
  },
})
export default class UploadButton extends Vue {
  @Prop({ default: 'controls.upload' })
  label: string

  @Prop({ default: null })
  prependIcon: string

  @Prop({ default: false })
  textButton: boolean

  @Prop({ default: false }) outlined: boolean

  @Prop({ default: '4' }) px: string | number
  @Prop({ default: () => () => {} }) docsPresent: () => void

  multiple = false
  showSelectionDialog = false
  showDialog = false
  files: any = []

  snackMessage = ''
  documentName = ''
  documentDescription = ''

  updated() {
    console.log('UPDATED', typeof this.files)
  }

  closeDialog() {
    this.multiple = false
  }

  resetSelection(event: any) {
    event.target.value = ''
  }

  handleFileUpload(event: any) {
    const arr: any = []
    let obj: any = {}
    let img: any = ''
    for (let i = 0; i < event.target.files.length; i++) {
      const file = event.target.files[i]
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        img = reader.result
        obj = {
          img,
          file,
        }
        arr.push(obj)
      }
    }
    this.files = arr
  }

  onFileInput(event: any) {
    if (event?.target?.files && event.target.files.length) {
      for (const file of event.target.files) {
        if (file.size > this.$config.maxFileSize) {
          snackbarStore.setParams({
            message: 'toast.fileTooLarge',
          })
          snackbarStore.setVisible(true)
          return
        }
      }

      this.handleFileUpload(event)
      this.showDialog = true
      this.showSelectionDialog = false
    }
  }

  documentNameSanitation(str: any) {
    const chars = {
      '&': '&',
      '≈': '≈',
      '/': '/',
      '#': `#`,
      ',': ',',
      '+': '+',
      '(': '(',
      ')': ')',
      $: '$',
      '~': '~',
      '%': '%',
      "'": "'",
      '"': '"',
      '*': '*',
      '?': '?',
      '<': '<',
      '>': '>',
      '{': '{',
      '}': '}',
      '^': '^',
      '!': '!',
    } as any

    let newStr = ''

    for (const i in str) {
      const char = str[i]
      if (char !== chars[char]) {
        newStr = newStr + char
      }
    }
    return newStr
  }

  singleOrMultyDialog() {
    this.showSelectionDialog = true
  }

  async uploadDocument() {
    snackbarStore.setParams({
      message: 'toast.uploading',
      dismissable: false,
      timeoutMilliseconds: 0,
    } as SnackParams)
    snackbarStore.setProgress(0)
    snackbarStore.setVisible(true)

    this.showDialog = false
    // this.multiple = false
    console.log(`multiple: ${this.multiple}`)
    const document = await this.$store.dispatch('user/uploadDocument', {
      fileList: this.files,
      name: this.documentNameSanitation(this.documentName),
      description: this.documentDescription,
      multiple: this.multiple,
      onUploadProgress: (e: ProgressEvent) => {
        snackbarStore.setProgress(Math.round((e.loaded / e.total) * 100))
      },
    })

    snackbarStore.setParams({
      message: 'toast.uploadComplete',
      actions: [
        {
          name: 'controls.view',
          to: `/documents/${document.id}`,
        },
      ],
    })

    this.$emit('complete')
    this.reset()
    this.docsPresent()
  }

  get isLoading() {
    return snackbarStore.isVisible && snackbarStore.progress !== null
  }

  openFileInput() {
    ;(this as any).$refs.fileInput.click()
  }

  reset() {
    this.showDialog = false
    this.showSelectionDialog = false
    this.multiple = false
    this.files = []
    this.snackMessage = ''
    this.documentName = ''
    this.documentDescription = ''
  }
}
</script>

<style scoped lang="scss">
.multyple {
  background-color: #f1f2f4;
  padding: 10px;
}

.upload-label {
  min-width: $button-min-width;
  justify-content: start;

  &:not(.disabled) {
    cursor: pointer;
  }
  &.v-btn {
    padding: 0.5rem 0.7rem 0.5rem 0.5rem;
    background-color: var(--primary);
    color: var(--white);
    height: 36px;
    &.v-btn--outlined {
      background-color: transparent !important;
      color: var(--primary);
      box-shadow: none !important;
    }
    &.disabled {
      background-color: var(--grey-3);
      color: var(--grey-5);
      .v-icon {
        color: var(--grey-5);
      }
    }
    .v-icon {
      padding: 0;
      color: var(--white);
    }
  }
  &.text {
    color: var(--primary);
    &.disabled {
      color: var(--grey-5);
    }
  }
  & > input {
    display: none;
  }

  .upload-text .v-snack__content {
    padding-top: 0;
  }

  .uploadSubmit {
    position: fixed;
    bottom: 0%;
    justify-content: space-evenly;
    background-color: #2157e4;
    height: 3rem;
    align-items: center;
    width: 100%;
  }
}
</style>
