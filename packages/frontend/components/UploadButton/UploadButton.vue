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
        textButton ? 'text' : 'v-btn',
        { disabled: isLoading },
        { 'v-btn--outlined': outlined },
        { 'font-weight-bold': textButton },
        'upload-label-style',
      ]"
    >
      <v-icon
        v-if="prependIcon"
        class="mr-4 upload-container-icon-style"
        small
        v-text="prependIcon"
      />
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
      @click:outside="closeDialog"
    >
      <template>
        <v-container>
          <UploadButtonFileInput :on-file-input="onFileInput" :reset="reset" />
        </v-container>
      </template>
    </v-dialog>
    <v-dialog
      v-model="showDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      class="upload-dialog"
    >
      <template v-slot:activator="{ on, attrs }">
        <slot name="activator" v-bind="attrs" v-on="on" />
      </template>
      <v-card>
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
        <v-container class="form-container">
          <ValidationObserver ref="observer">
            <v-form @submit.prevent>
              <ValidationProvider
                v-slot="{ errors }"
                name="name"
                rules="required|max:255"
              >
                <p class="form-title">
                  {{ $t('document.documentName') }}
                  <v-tooltip
                    v-model="isShowToolTipDocument"
                    :open-on-click="true"
                    :open-on-hover="false"
                    :right="$vuetify.breakpoint.smAndUp"
                    :bottom="$vuetify.breakpoint.xsOnly"
                    :max-width="$vuetify.breakpoint.smAndUp ? '200px' : '150px'"
                  >
                    <template v-slot:activator="{ attrs }">
                      <v-icon
                        v-bind="attrs"
                        :small="$vuetify.breakpoint.xsOnly"
                        @click="hideToolTipDocument"
                      >
                        $info
                      </v-icon>
                    </template>
                    <span class="form-tooltip">
                      You can type either identity, prove of residency,
                      application, etc.
                    </span>
                  </v-tooltip>
                </p>
                <v-responsive class="mx-auto">
                  <v-text-field
                    v-model="documentName"
                    class="form-input"
                    :error-messages="errors"
                    outlined
                    :placeholder="$t('document.enterNamePlaceholder')"
                  />
                </v-responsive>
                <p class="form-title">
                  {{ $t('document.enterDescriptionPlaceholder') }}
                  <v-tooltip
                    v-model="isShowToolTipDescription"
                    :open-on-click="true"
                    :open-on-hover="false"
                    :right="$vuetify.breakpoint.smAndUp"
                    :bottom="$vuetify.breakpoint.xsOnly"
                    :max-width="$vuetify.breakpoint.smAndUp ? '200px' : '150px'"
                  >
                    <template v-slot:activator="{ attrs }">
                      <v-icon
                        v-bind="attrs"
                        :small="$vuetify.breakpoint.xsOnly"
                        @click="hideToolTipDescription"
                      >
                        $info
                      </v-icon>
                    </template>
                    <span class="form-tooltip">
                      Provide a brief description of the files you uploaded for
                      clarification.
                    </span>
                  </v-tooltip>
                </p>

                <v-textarea
                  v-model="documentDescription"
                  class="form-text-area hidden-xs-and-down"
                  auto-grow
                  :rows="$vuetify.breakpoint.xs ? 2 : 6"
                  outlined
                  dense
                  :placeholder="$t('document.enterDescriptionPlaceholder')"
                />

                <p class="form-title-your-files">Your files</p>

                <input
                  ref="file3"
                  type="file"
                  style="display: none"
                  accept="application/pdf, image/jpeg, image/png, image/tiff"
                  @change="onAdditionalFileInput"
                />
                <v-btn
                  min-height="26"
                  :small="$vuetify.breakpoint.xsOnly"
                  :large="$vuetify.breakpoint.mdAndUp"
                  outlined
                  color="primary"
                  elevation="2"
                  class="form-upload-button"
                  @click="$refs.file3.click()"
                >
                  Upload new file
                </v-btn>

                <div class="form-divider"></div>
                <p class="form-dnd-description">
                  You can change positions of your files in any order by
                  <b>drag and drop.</b>
                </p>
              </ValidationProvider>
              <div>
                <draggable v-model="files">
                  <div
                    v-for="(fileElement, index) in files"
                    :key="fileElement.file.name"
                    class="drag-and-drop-div"
                  >
                    <div class="file-information">
                      <div class="file-information-title">
                        <b>#{{ index + 1 }}</b>
                        {{ fileNameOverflow(fileElement.file.name) }}
                      </div>
                      <button class="remove-button" @click="removeItem(index)">
                        Remove
                      </button>
                    </div>
                    <div
                      v-if="fileElement.file.type === 'application/pdf'"
                      class="pdf-image"
                    >
                      <v-img
                        max-height="100"
                        max-width="70"
                        :src="pdfLogo"
                      ></v-img>
                    </div>
                    <v-img
                      v-else
                      max-height="400"
                      max-width="600"
                      class="mb-14"
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
          class="body-1 mx-auto d-flex"
          :style="
            $vuetify.breakpoint.smAndDown
              ? 'width: 100%; position: fixed; bottom: -0.5rem; height: 20px'
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
import SnackParams from '@/types/snackbar'
import draggable from 'vuedraggable'
import UploadButtonFileInput from '../UploadButtonFileInput/UploadButtonFileInput.vue'
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

  get pdfLogo(): string {
    return require('@/assets/images/PDF-with-text.svg')
  }

  multiple = false
  showSelectionDialog = false
  showDialog = false
  isShowToolTipDocument = false
  isShowToolTipDescription = false

  timeout: any = null

  files: any = []
  newFile: any = []

  snackMessage = ''
  documentName = ''
  documentDescription = ''

  updated() {
    console.log('FILES', this.files)
  }

  get isLoading() {
    return snackbarStore.isVisible && snackbarStore.progress !== null
  }

  removeItem(index: any) {
    this.files.splice(index, 1)
  }

  fileNameOverflow(fileName: any): String {
    if (fileName.length > 15 && this.$vuetify.breakpoint.name === 'xs') {
      return fileName.substring(0, 15) + '...'
    } else if (fileName.length > 25 && this.$vuetify.breakpoint.smAndUp) {
      return fileName.substring(0, 25) + '...'
    } else {
      return fileName
    }
  }

  hideToolTipDocument() {
    this.isShowToolTipDocument = !this.isShowToolTipDocument
    // this.timeout = setTimeout(() => (this.isShowToolTipDocument = false), 4000)
  }

  hideToolTipDescription() {
    this.isShowToolTipDescription = !this.isShowToolTipDescription
    // this.timeout = setTimeout(
    //   () => (this.isShowToolTipDescription = false),
    //   4000,
    // )
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

  handleAdditionalFileInput(event: any) {
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
        this.files.unshift(obj)
      }
    }
  }

  onAdditionalFileInput(event: any) {
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

      this.handleAdditionalFileInput(event)
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
@media (min-width: 1280px) {
  .pdf-image {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.898);
    height: fit-content;
    width: 100%;
    margin-bottom: 20px;
  }
  .drag-and-drop-div {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-bottom: 10px;
    .file-information {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 12px;
      .file-information-title {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: #000000;
      }
      .remove-button {
        text-decoration: underline;
        color: #1642df;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
      }
    }
  }

  .form-container {
    width: 100%;
    margin-top: 20px;
    .form-title {
      font-style: normal;
      font-weight: 700;
      font-size: 23px;
      line-height: 32px;
    }

    .form-tooltip {
      font-style: normal !important;
      font-weight: 400 !important;
      font-size: 14px !important;
      line-height: 24px !important;
    }

    .form-input {
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
      padding: 0px;
      margin-bottom: 18px;
    }

    .form-divider {
      border-top: 2px solid #000000 !important;
      width: 100% !important;
      padding-bottom: 24px !important;
    }

    .form-title-your-files {
      font-style: normal;
      font-weight: 700;
      font-size: 23px;
      line-height: 32px;
    }

    .form-upload-button {
      font-size: 16px !important;
      font-weight: 500 !important;
      letter-spacing: 2% !important;
      line-height: 24px !important;
      box-sizing: content-box !important;
      margin-bottom: 24px;
    }

    .form-dnd-description {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 32px;
    }
  }
}

@media (min-width: 600px) and (max-width: 1280px) {
  .pdf-image {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.898);
    height: fit-content;
    width: 100%;
    margin-bottom: 40px;
  }
  .drag-and-drop-div {
    display: flex;
    flex-direction: column;
    width: 70%;
    margin-bottom: 20px;
    .file-information {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 12px;
      .file-information-title {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: #000000;
      }
      .remove-button {
        text-decoration: underline;
        color: #1642df;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
      }
    }
  }
  .form-container {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    width: 80%;
    .form-title {
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 28px;
    }

    .form-tooltip {
      font-style: normal !important;
      font-weight: 400 !important;
      font-size: 14px !important;
      line-height: 220px !important;
    }

    .form-input {
      font-size: 14px;
      line-height: 24px;
      font-weight: 400;
      padding: 0;
      margin-bottom: 18px;
    }

    .form-text-area {
      font-size: 14px;
      line-height: 24px;
      font-weight: 400;
      padding: 0;
      margin-bottom: 18px;
    }
    .form-divider {
      border-top: 2px solid #000000 !important;
      width: 100% !important;
      padding-bottom: 24px !important;
    }

    .form-title-your-files {
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 28px;
    }

    .form-upload-button {
      width: 120px !important;
      min-height: 24px !important;
      padding: 0px !important;
      font-size: 14px !important;
      font-weight: 500 !important;
      letter-spacing: 2% !important;
      line-height: 24px !important;
      box-sizing: content-box !important;
      margin-bottom: 24px;
    }

    .form-dnd-description {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 32px;
    }
  }
}

@media (max-width: 600px) {
  .pdf-image {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.898);
    height: fit-content;
    width: 100%;
    margin-bottom: 20px;
  }
  .drag-and-drop-div {
    display: flex;
    flex-direction: column;
    width: 70%;
    margin-bottom: 10px;
    .file-information {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 12px;
      .file-information-title {
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        text-align: center;
        color: #000000;
      }
      .remove-button {
        text-decoration: underline;
        color: #1642df;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
      }
    }
  }
  .form-container {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    width: 80%;
    .form-title {
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
    }

    .form-tooltip {
      width: 90px !important;
      height: 50px !important;
      font-style: normal !important;
      font-weight: 400 !important;
      font-size: 10px !important;
      line-height: 220px !important;
    }

    .form-input {
      font-size: 14px;
      line-height: 24px;
      font-weight: 400;
      padding: 0;
    }

    .form-text-area {
      font-size: 14px;
      line-height: 24px;
      font-weight: 400;
      padding: 0;
    }

    .form-divider {
      border-top: 2px solid #000000 !important;
      width: 100% !important;
      padding-bottom: 24px !important;
    }

    .form-title-your-files {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 28px;
    }

    .form-upload-button {
      width: 120px !important;
      min-height: 24px !important;
      padding: 0px !important;
      font-size: 12px !important;
      font-weight: 500 !important;
      letter-spacing: 2% !important;
      line-height: 24px !important;
      box-sizing: content-box !important;
      margin-bottom: 24px;
    }

    .form-dnd-description {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 32px;
    }
  }
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
    // height: 36px;
    // &.v-btn--outlined {
    //   background-color: transparent !important;
    //   color: var(--primary);
    //   box-shadow: none !important;
    // }
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
    align-items: center;
    width: 100%;
  }
}
</style>
