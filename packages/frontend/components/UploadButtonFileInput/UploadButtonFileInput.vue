<template>
  <div class="dialog-container">
    <v-btn
      class="close-button pa-0"
      :x-small="$vuetify.breakpoint.xsOnly"
      icon
      color="black"
      @click="navigationEvent"
    >
      <v-icon :small="$vuetify.breakpoint.xsOnly">$close</v-icon>
    </v-btn>
    <p class="header">{{ $t('document.singleOrMultiple') }}</p>
    <div class="cards-container">
      <v-card width="280" height="300" class="card">
        <v-card-item class="card-title-position">
          <v-card-title class="card-title">
            {{ $t('uploadInputButton.oneFileTitle') }}
          </v-card-title>
        </v-card-item>
        <v-card-text class="card-text">
          {{ $t('uploadInputButton.oneFileDescription') }}
        </v-card-text>
        <v-card-actions class="card-button-position">
          <!-- eslint-disable-next-line vue-a11y/form-has-label -->
          <input
            ref="file"
            class="file-input"
            type="file"
            style="display: none"
            accept="application/pdf, image/jpeg, image/png, image/tiff"
            @change="onFileInput"
          />
          <v-btn color="primary" class="card-button" @click="oneFileClick">
            {{ $t('controls.uploadFile') }}
          </v-btn>
        </v-card-actions>
      </v-card>

      <div class="divider"></div>

      <v-card width="280" height="300" class="card">
        <v-card-item class="card-title-position">
          <v-card-title class="card-title">
            {{ $t('uploadInputButton.multipleFilesTitle') }}
          </v-card-title>
        </v-card-item>
        <v-card-text class="card-text">
          {{ $t('uploadInputButton.multipleFilesDescription') }}
        </v-card-text>
        <v-card-actions class="card-button-position">
          <!-- eslint-disable-next-line vue-a11y/form-has-label -->
          <input
            ref="file2"
            class="file-input"
            type="file"
            style="display: none"
            multiple
            accept="application/pdf, image/jpeg, image/png, image/tiff"
            required
            @change="onFileInput"
          />
          <v-btn color="primary" class="card-button" @click="multipleFileClick">
            {{ $t('controls.uploadFiles') }}
          </v-btn>
        </v-card-actions>
        <div></div>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class UploadButtonFileInput extends Vue {
  @Prop({ default: null }) onFileInput: () => void
  @Prop({ default: () => () => {} }) reset: () => void
  @Prop({ default: () => {} }) closeSelectionDialog: () => void
  @Prop({ default: false }) multipleInput: () => void
  oneFileClick() {
    return (this as any).$refs.file.click()
  }

  multipleFileClick() {
    this.multipleInput()
    return (this as any).$refs.file2.click()
  }

  back() {
    if (window.history.length) {
      this.$router.back()
    } else {
      this.$router.push(this.localePath('/dashboard'))
    }
  }

  navigationEvent() {
    this.closeSelectionDialog()
  }
}
</script>

<style scoped lang="scss">
@media (min-width: 1300px) {
  .dialog-container {
    background-color: rgb(255, 255, 255);
    width: 800px;
    height: 480px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .close-button {
      position: absolute;
      top: 23px;
      right: 15px;
    }
    .header {
      text-align: center;
      margin-top: 22px;
      color: black;
      font-style: normal;
      font-weight: 700;
      font-size: 33px;
      line-height: 46px;
    }
    .cards-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
      width: 100%;
      height: 66%;
      .card {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        align-items: start;
        justify-content: center;
      }
      .card-title-position {
        padding: 0px;
        margin-bottom: 16px;
        min-height: 15%;
      }

      .card-title {
        padding: 0px;
        font-style: normal;
        font-weight: 700;
        font-size: 23px;
        line-height: 32px;
      }
      .card-text {
        min-height: 20%;
        padding: 0px;
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
        color: #000000;
        margin-bottom: 30px;
      }

      .card-button {
        min-width: 143px;
        height: 56px;
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
      }
      .card-button-position {
        padding-left: 0px;
        height: 15%;
      }
      .divider {
        border-left: 3px solid #4157aa;
        height: 70%;
        padding-left: 0px;
        padding-right: 0px;
        margin-left: 0px;
        margin-right: 0px;
      }
    }
  }
}

@media (min-width: 733px) and (max-width: 1299px) {
  .dialog-container {
    background-color: rgb(255, 255, 255);
    width: 450px;
    min-height: 624px !important;
    overflow: scroll !important;
    display: flex;
    flex-direction: column;
    padding-left: 60px;
    padding-right: 60px;
    overflow: hidden;
    position: relative;
    .close-button {
      position: absolute;
      top: 20px;
      right: 15px;
    }
    .header {
      text-align: center;
      margin-top: 24px;
      color: black;
      font-style: bold;
      font-weight: 700;
      font-size: 28px;
      line-height: 38px;
      padding: 0 0 20px 0;
    }
    .cards-container {
      display: flex !important;
      flex-direction: column !important;
      width: 100%;
      height: 100% !important;
      align-items: center !important;
      justify-content: center !important;
      .card {
        display: flex !important;
        flex-direction: column !important;
        width: auto !important;
        height: max-content !important;
        margin-bottom: 40px;
        .card-title-position {
          padding: 0px;
          margin-bottom: 12px;
          width: 100%;
        }

        .card-title {
          padding: 0px;
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          line-height: 28px;
        }

        .card-text {
          padding: 0px;
          font-weight: 400;
          font-size: 17px;
          line-height: 24px;
          color: #000000;
          margin-bottom: 24px;
        }

        .card-button {
          min-width: 143px;
          height: 56px;
          font-weight: 500;
          font-size: 17px;
          line-height: 24px;
        }
        .card-button-position {
          padding: 0px;
        }
      }

      .divider {
        border-top: 3px solid #4157aa;
        width: 100%;
        padding-bottom: 40px;
      }
    }
  }
}

@media (max-width: 733px) {
  .dialog-container {
    background-color: rgb(255, 255, 255);
    width: 300px;
    min-height: 450px !important;
    overflow-y: auto !important;
    display: flex;
    flex-direction: column;
    padding-left: 24px;
    padding-right: 24px;
    overflow: hidden;
    position: relative;
    .close-button {
      position: absolute;
      top: 5px;
      right: 12px;
    }
    .header {
      text-align: left;
      margin-top: 26px;
      color: black;
      font-style: bold;
      font-weight: 700;
      font-size: 20px;
      line-height: 30px;
      padding: 0px 0px 0px 5px;
    }
    .cards-container {
      display: flex !important;
      flex-direction: column !important;
      width: 100%;
      height: 100% !important;
      justify-content: center !important;
      align-items: center !important;
      .card {
        display: flex !important;
        flex-direction: column !important;
        width: auto !important;
        height: max-content !important;
        margin-bottom: 24px;
        .card-title-position {
          padding: 0px;
          margin-bottom: 12px;
          width: 100%;
        }

        .card-title {
          padding: 0px;
          font-style: normal;
          font-weight: 700;
          font-size: 18px;
          line-height: 28px;
        }

        .card-text {
          padding: 0px;
          font-weight: 400;
          font-size: 14px;
          line-height: 24px;
          color: #000000;
          margin-bottom: 24px;
        }

        .card-button {
          min-width: 120px;
          height: 45px;
          font-weight: 500;
          font-size: 14px;
          line-height: 24px;
        }
        .card-button-position {
          padding: 0px;
        }
      }

      .divider {
        border-top: 3px solid #4157aa;
        width: 100%;
        padding-bottom: 24px;
      }
    }
  }
}
</style>
