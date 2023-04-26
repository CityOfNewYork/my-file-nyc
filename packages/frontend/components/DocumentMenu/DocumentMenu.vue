<template>
  <v-menu
    v-if="userRole != 2"
    v-model="showMenu"
    offset-y
    absolute
    :min-width="$vuetify.breakpoint.smAndDown ? '94%' : ''"
    :left="$vuetify.breakpoint.smAndDown ? '0px' : ''"
    :close-on-content-click="false"
    :close-on-click="true"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        :title="`${$t('document.documentMenu')}`"
        v-bind="attrs"
        icon
        class="mr-10 text-body-1 font-weight-medium documentMenu a11y-focus"
        :color="color"
        v-on="on"
        @click.prevent="() => {}"
        @keydown.enter="focusDocumentMenuList"
        @keydown.space="focusDocumentMenuList"
      >
        <v-row align="center">
          <v-btn
            v-if="$vuetify.breakpoint.smAndUp"
            class="text-body-1 font-weight-medium documentMenu a11y-focus"
          >
            <v-icon class="mr-2" style="top: 1rm">$edit</v-icon>
            {{ $t('document.documentOptions') }}
          </v-btn>
          <v-icon
            v-else-if="$vuetify.breakpoint.xs"
            :style="$vuetify.breakpoint.width <= 280 && 'left: 2.5rem;'"
            class="iconDocumentMenue"
          >
            $edit
          </v-icon>
        </v-row>
      </v-btn>
    </template>
    <DocumentActions
      ref="documentMenuList"
      :document="document"
      :on-delete="onDelete"
      :close-menu="closeMenu"
      tabindex="-1"
    />
  </v-menu>
  <v-btn v-else class="justify-start" text @click.stop="download">
    <v-icon class="mr-2" color="primary">$download</v-icon>
    {{ $t('controls.download') }}
  </v-btn>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import {
  Document,
  DocumentListItem,
  FileDownloadDispositionTypeEnum,
} from 'api-client'
import download from '@/assets/js/download'

@Component
export default class DocumentMenu extends Vue {
  @Prop({ default: 'grey-7' }) color: string
  @Prop({ required: true }) document: DocumentListItem | Document
  @Prop({ default: () => {} }) onDelete: () => void

  showMenu = false
  userRole = 0 as any

  mounted() {
    this.userRole = localStorage.getItem('myfile.role')
  }

  closeMenu() {
    this.showMenu = false
  }

  async download() {
    const fullDocument: Document = await this.$store.dispatch(
      'document/getById',
      this.document.id,
    )
    const urls = await this.$store.dispatch('document/download', {
      document: fullDocument,
      disposition: FileDownloadDispositionTypeEnum.Attachment,
    })
    download(
      urls,
      fullDocument.files.map((f) => f.name),
    )
  }

  focusDocumentMenuList() {
    setTimeout(() => {
      const documentMenuListEl = (this as any).$refs.documentMenuList.$el
      documentMenuListEl.focus()
    }, 300) // small buffer to counter el render delay
  }
}
</script>
