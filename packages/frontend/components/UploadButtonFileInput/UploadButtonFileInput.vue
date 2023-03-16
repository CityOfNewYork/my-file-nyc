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
    <p class="header">{{ $t('document.signleOrMultyple') }}</p>
    <div class="cards-container">
      <v-card width="390" height="276" class="card">
        <v-card-item class="card-title-position">
          <v-card-title class="card-title">One-file</v-card-title>
        </v-card-item>
        <v-card-text class="card-text">
          The one-file option gives you the ability to upload a file or an image
          from your device management system. If you're using a mobile phone or
          tablet you can take a photo with your camera.
        </v-card-text>
        <v-card-actions class="card-button-position">
          <input
            type="file"
            ref="file"
            style="display: none"
            accept="application/pdf, image/jpeg, image/png, image/tiff"
            @change="onFileInput"
          />
          <v-btn
            @click="$refs.file.click()"
            color="primary"
            class="card-button"
          >
            {{ $t('controls.uploadFile') }}
          </v-btn>
        </v-card-actions>
      </v-card>

      <div class="divider"></div>

      <v-card width="390" height="276" class="card">
        <v-card-item class="card-title-position">
          <v-card-title class="card-title">Multiple-files</v-card-title>
        </v-card-item>
        <v-card-text class="card-text">
          The multiple-files option gives you the ability to upload as many
          files or images from your device management system. If you're using a
          mobile phone or tablet you can take photos with your camera.
        </v-card-text>
        <v-card-actions class="card-button-position">
          <input
            type="file"
            ref="file2"
            style="display: none"
            multiple
            accept="application/pdf, image/jpeg, image/png, image/tiff"
            @change="onFileInput"
          />
          <v-btn
            @click="$refs.file2.click()"
            color="primary"
            class="card-button"
          >
            {{ $t('controls.uploadFiles') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class UploadButtonFileInput extends Vue {
  @Prop({ default: null })
  onFileInput: () => void

  @Prop({ default: () => () => {} }) reset: () => void

  back() {
    if (window.history.length) {
      this.$router.back()
    } else {
      this.$router.push(this.localePath('/dashboard'))
    }
  }

  navigationEvent() {
    if (window.location.pathname == '/dashboard') {
      this.reset()
    } else {
      this.back()
    }
  }
}
</script>

<style scoped lang="scss">
@media (min-width: 1300px) {
  .dialog-container {
    background-color: rgb(255, 255, 255);
    width: 1150px;
    height: 600px;
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
      margin-bottom: 50px;
      color: black;
      font-style: normal;
      font-weight: 700;
      font-size: 33px;
      line-height: 46px;
    }
    .cards-container {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      height: 386px;
      .card {
        display: flex;
        flex-direction: column;
        height: 100%;
      }
      .card-title-position {
        padding: 0px;
        margin-bottom: 16px;
        height: 15%;
      }

      .card-title {
        padding: 0px;
        font-style: normal;
        font-weight: 700;
        font-size: 23px;
        line-height: 32px;
      }
      .card-text {
        height: 70%;
        padding: 0px;
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
        color: #000000;
        margin-bottom: 32px;
      }

      .card-button {
        width: 143px;
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
        height: 100%;
        padding-left: 0px;
        padding-right: 0px;
        margin-left: 0px;
        margin-right: 0px;
      }
    }
  }
}

@media (min-width: 733px) and (max-width: 1300px) {
  .dialog-container {
    background-color: rgb(255, 255, 255);
    width: 554px;
    height: 690px;
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
      height: 100vh !important;
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
          width: 143px;
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
    width: 330px;
    height: 720px;
    display: flex;
    flex-direction: column;
    padding-left: 24px;
    padding-right: 24px;
    overflow: hidden;
    position: relative;
    .close-button {
      position: absolute;
      top: 3px;
      right: 5px;
    }
    .header {
      text-align: center;
      margin-top: 32px;
      color: black;
      font-style: bold;
      font-weight: 700;
      font-size: 25px;
      line-height: 36px;
      padding: 0 0 24px 0;
    }
    .cards-container {
      display: flex !important;
      flex-direction: column !important;
      width: 100%;
      height: 100vh !important;
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
          width: 120px;
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
