<template>
  <div class="pdf-container"></div>
</template>

<script lang="ts">
/**
 * PSPDFKit for Web example component.
 */
import { Vue, Component, Prop, Watch } from 'nuxt-property-decorator'

@Component
export default class PSPDFKitContainer extends Vue {
  /**
   * The component receives `pdfFile` as a prop, which is type of `String` and is required.
   */
  @Prop({ required: true }) pdfFile: String
  PSPDFKit: any = null
  loaded: any = null

  @Watch('pdfFile')
  pdfFileVal(val: any) {
    if (val) {
      this.loadPSPDFKit()
    }
  }

  async loadPSPDFKit() {
    //@ts-ignore
    import('pspdfkit')
      .then((PSPDFKit) => {
        console.log(PSPDFKit)
        this.PSPDFKit = PSPDFKit
        //@ts-ignore
        PSPDFKit.unload('.pdf-container')
        //@ts-ignore
        return PSPDFKit.load({
          document: this.pdfFile,
          container: '.pdf-container',
          baseUrl: window.location.origin + '/',
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  mounted() {
    this.loadPSPDFKit().then((instance) => {
      console.log(instance)
      this.$emit('loaded', instance)
    })
  }
  /**
   * Watch for `pdfFile` prop changes and trigger unloading and loading when there's a new document to load.
   */

  /**
   * Our component has the `loadPSPDFKit` method. This unloads and cleans up the component and triggers document loading.
   */
}
</script>

<style scoped>
.pdf-container {
  width: 100%;
  height: calc(100vh - 17rem);
}
</style>
