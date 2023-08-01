<template>
  <v-skeleton-loader v-if="loading" type="image"></v-skeleton-loader>
  <div v-else-if="isInfected">
    File is infected and should not be downloaded
  </div>
  <div v-else-if="isPdf">
    <div v-if="isPdfBrowser" id="adobe-dc-view" class="adobe-container"></div>
    <div v-else-if="!isPdfBrowser && !isMobile" class="adobe-container">
      <div class="unsupported">
        <div class="warning-text">
          <h1 class="warning-header">
            <v-icon color="black" class="warning-icon" :size="iconHeight">
              mdi-alert-outline
            </v-icon>
            Unsupported Browser
          </h1>
          <p class="warning-paragraph">
            PDF Viewer does not support Firefox or Internet Explorer. Please use
            a different web browser such as
            <a
              class="warning-link"
              href="https://www.google.com/chrome/"
              target="_blank"
            >
              Google Chrome
            </a>
            ,
            <a
              class="warning-link"
              href="https://www.microsoft.com/en-us/edge"
              target="_blank"
            >
              Microsoft Edge
            </a>
            or
            <a
              class="warning-link"
              href="https://support.apple.com/downloads/safari"
              target="_blank"
            >
              Safari
            </a>
            .
          </p>
        </div>
      </div>
    </div>
    <div
      v-else-if="!isPdfBrowser && isMobile"
      class="adobe-container unsupported"
    >
      <div class="warning-text">
        <h1 class="warning-header">
          <v-icon color="black" class="warning-icon" :size="iconHeight">
            mdi-alert-outline
          </v-icon>
          Unsupported Browser
        </h1>
        <p class="warning-paragraph">
          PDF Viewer does not support Microsoft Edge, Firefox, Samsung Internet,
          or Internet Explorer. Please use a different web browser such as
          <a
            class="warning-link"
            href="https://www.google.com/chrome/"
            target="_blank"
          >
            Google Chrome
          </a>
          or
          <a
            class="warning-link"
            href="https://support.apple.com/downloads/safari"
            target="_blank"
          >
            Safari
          </a>
          .
        </p>
      </div>
    </div>
  </div>
  <div v-else class="text-center image viewer">
    <v-dialog v-model="dialog">
      <template v-slot:activator="{ on, attrs }">
        <img
          v-bind="attrs"
          :style="$vuetify.breakpoint.smAndUp && 'width: 50%'"
          :src="url"
          :alt="`${documentName} (${fileName})`"
          v-on="on"
        />
      </template>
      <v-card>
        <div class="text-center image viewer">
          <v-card-title class="d-block text-h5">
            {{ $t(document.name) }}
          </v-card-title>
          <img :src="url" :alt="`${documentName} (${fileName})`" />
          <v-card-actions class="d-block">
            <v-btn class="text-center" text @click="dialog = false">
              Close Document
            </v-btn>
          </v-card-actions>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import {
  Document,
  FileContentTypeEnum,
  DocumentFile as DocumentFileType,
  FileDownloadDispositionTypeEnum,
} from 'api-client'
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class DocumentFile extends Vue {
  @Prop({ required: true }) document: Document
  @Prop({ required: true }) file: DocumentFileType
  url = ''
  loading = true
  dialog = false
  isPdfBrowser = false
  isMobile = false

  get iconHeight() {
    if (this.$vuetify.breakpoint.xs) {
      return '24'
    } else if (this.$vuetify.breakpoint.smAndUp) {
      return '44'
    } else {
      return
    }
  }

  getBrowserName() {
    const userAgent = navigator.userAgent
    console.log(navigator)
    // @ts-ignore
    this.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    console.log(this.isMobile)
    let browserName = 'Another Browser'

    if (!this.isMobile) {
      if (userAgent.includes('Chrome')) {
        browserName = 'Google Chrome'
        this.isPdfBrowser = true
      } else if (userAgent.includes('Safari')) {
        browserName = 'Apple Safari'
        this.isPdfBrowser = true
      } else if (userAgent.includes('Edge')) {
        browserName = 'Microsoft Edge'
        this.isPdfBrowser = true
      } else {
        this.isPdfBrowser = false
      }
    } else {
      if (userAgent.includes('Chrome')) {
        browserName = 'Google Chrome'
        this.isPdfBrowser = true
      } else if (userAgent.includes('Safari')) {
        browserName = 'Apple Safari'
        this.isPdfBrowser = true
      } else {
        this.isPdfBrowser = false
      }
    }

    return browserName
  }

  pdfrender(url: any, documentName: any, adobeClientId: any) {
    // @ts-ignore
    if (window.AdobeDC) {
      // @ts-ignore
      const adobeDCView = new AdobeDC.View({
        clientId: adobeClientId,
        divId: 'adobe-dc-view',
      })

      adobeDCView.previewFile({
        content: {
          location: {
            url,
          },
        },
        metaData: { fileName: documentName },
      })
    } else {
      document.addEventListener('adobe_dc_view_sdk.ready', () => {
        // @ts-ignore
        const adobeDCView = new AdobeDC.View({
          clientId: adobeClientId,
          divId: 'adobe-dc-view',
        })

        adobeDCView.previewFile({
          content: {
            location: {
              url,
            },
          },
          metaData: { fileName: documentName },
        })
      })
    }
  }

  updated() {
    if (this.isPdfBrowser) {
      this.pdfrender(this.url, this.document.name, this.adobeCredentials())
    }
  }

  async mounted() {
    if (this.document.pdf) {
      this.url = this.document.pdf
      this.getBrowserName()
    } else {
      this.url = await this.$store.dispatch('document/downloadFile', {
        document: this.document,
        file: this.file,
        disposition: FileDownloadDispositionTypeEnum.Inline,
      })
    }

    if (this.isTiff) {
      await this.processTif()
    }

    this.loading = false
  }

  adobeCredentials() {
    if (window.location.host.split(':')[0] === 'localhost') {
      return this.$config.adobeClientIdLocal
    }
    return this.$config.adobeClientId
  }

  get fileName() {
    return this.file.name
  }

  get documentName() {
    return this.document.name
  }

  get isTiff() {
    return this.file.contentType === FileContentTypeEnum.ImageTiff
  }

  get isInfected() {
    return this.file.scanStatus === 'infected'
  }

  get isPdf() {
    if (this.document.pdf || this.document.files[0].name.slice(-3) === 'pdf') {
      return true
    } else {
      return false
    }
  }

  async processTif() {
    if (!this.url.includes('.tiff') && !this.url.includes('.tif')) return

    const UTIF = await import('utif')
    const req = await fetch(this.url)
    const buff = await req.arrayBuffer()
    const ifds = UTIF.decode(buff)
    let vsns = ifds
    let ma = 0
    let page = vsns[0]
    if (ifds[0].subIFD) vsns = vsns.concat(ifds[0].subIFD as any[])
    for (let i = 0; i < vsns.length; i++) {
      const img = vsns[i]
      if (img.t258 == null || (img.t258 as Array<string | number>).length < 3)
        continue
      const ar = (img.t256 as number) * (img.t257 as number)
      if (ar > ma) {
        ma = ar
        page = img
      }
    }
    UTIF.decodeImage(buff, page, ifds)
    const rgba = UTIF.toRGBA8(page)
    const w = page.width
    const h = page.height
    const cnv = document.createElement('canvas')
    cnv.width = w
    cnv.height = h
    const ctx = cnv.getContext('2d') as CanvasRenderingContext2D
    const imgd = new ImageData(new Uint8ClampedArray(rgba.buffer), w, h)
    ctx.putImageData(imgd, 0, 0)
    this.url = cnv.toDataURL()
  }
}
</script>

<style scoped lang="scss">
.unsupported {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  // text-align: center;
}

@media (max-width: 480px) {
  .warning-header {
    color: #000;
    text-align: center;
    font-size: 1.225rem;
    font-weight: bold;
    line-height: 1.75rem;
    margin-bottom: 2rem;
  }

  .warning-paragraph {
    color: #000;
    text-align: center;
    font-size: 1rem;
    font-weight: Regular;
    line-height: 1.5rem;
    max-width: 500px;
    text-align: start;

    // Link text
  }

  .warning-link {
    color: #1642df;
    font-weight: 700;
    text-decoration: underline;
  }

  .warning-text {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
@media (min-width: 481px) and (max-width: 1024px) {
  .warning-header {
    color: #000;
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 2.938rem;
    margin-bottom: 2rem;
  }

  .warning-paragraph {
    color: #000;
    text-align: center;
    font-size: 1.125rem;
    font-weight: Regular;
    line-height: 28px;
    max-width: 400px;
    text-align: start;

    // Link text
  }

  .warning-link {
    color: #1642df;
    font-weight: 700;
    text-decoration: underline;
  }

  .warning-text {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
/* Media Query for Laptops and Desktops */
@media (min-width: 1025px) {
  .warning-header {
    color: #000;
    text-align: center;
    font-size: 3.438rem;
    font-weight: bold;
    line-height: 4rem;
    margin-bottom: 2rem;
  }

  .warning-paragraph {
    color: #000;
    text-align: center;
    font-size: 1.188rem;
    font-weight: Regular;
    line-height: 28px;
    max-width: 600px;
    text-align: start;

    // Link text
  }

  .warning-link {
    color: #1642df;
    font-weight: 700;
    text-decoration: underline;
  }

  .warning-text {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
/* Media Query for low resolution  Tablets, Ipads */

// .warning-header {
//   color: #000;
//   text-align: center;
//   font-size: 3.438rem;
//   font-weight: bold;
//   line-height: 4rem;
//   margin-bottom: 2rem;
// }

// .warning-paragraph {
//   color: #000;
//   text-align: center;
//   font-size: 1.188rem;
//   font-weight: Regular;
//   line-height: 28px;
//   max-width: 600px;
//   text-align: start;

//   // Link text
// }

// .warning-link {
//   color: #1642df;
//   font-weight: 700;
//   text-decoration: underline;
// }

// .warning-text {
//   width: 60%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// }
.adobe-container {
  width: 100%;
  height: calc(100vh - 18rem);
}

.viewer {
  &.pdf {
    width: 100%;
    height: calc(100vh - 10.5rem);
  }
  &.image {
    img {
      max-width: 90%;
      object-fit: contain;
      border-radius: 0.5rem;
    }
  }
}
</style>
