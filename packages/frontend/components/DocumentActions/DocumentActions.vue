<template>
  <v-list v-if="$vuetify.breakpoint.smAndUp || dasbboardDocMenu">
    <v-list-item v-if="userRole != 2">
      <v-btn class="justify-start" text @click="editDetails">
        <v-icon class="mr-2" color="primary">$pencil</v-icon>
        {{ $t('controls.editDetails') }}
      </v-btn>
    </v-list-item>
    <v-list-item v-if="userRole != 2">
      <v-btn
        class="justify-start"
        text
        @click="showConfirmationDialog"
        @keydown.enter="showConfirmationDialog"
      >
        <v-icon class="mr-2" color="primary">$delete</v-icon>
        {{ $t('controls.delete') }}
      </v-btn>
    </v-list-item>
    <v-list-item>
      <v-btn class="justify-start" text @click="download">
        <v-icon class="mr-2" color="primary">$download</v-icon>
        {{ $t('controls.download') }}
      </v-btn>
    </v-list-item>
    <ConfirmationDialog
      v-model="showDeleteConfirmation"
      body="document.deleteConfirmationBody"
      title="document.deleteConfirmationTitle"
      :on-confirm="confirmDelete"
      :loading="loading"
      confirm-label="controls.confirmDelete"
    />
  </v-list>
  <v-list
    v-else-if="$vuetify.breakpoint.smAndDown || dasbboardDocMenu"
    class="d-flex"
    style="justify-content: space-evenly; flex-direction: column"
  >
    <v-list-item v-if="userRole != 2" class="justify-center">
      <v-btn
        class="actionButtonMobile"
        color="primary white--text"
        @click="editDetails"
      >
        {{ $t('controls.editDetails') }}
      </v-btn>
    </v-list-item>
    <v-list-item v-if="userRole != 2" class="justify-center mb-2 mt-2">
      <v-btn
        class="actionButtonMobile"
        color="primary white--text"
        @click="showConfirmationDialog"
        @keydown.enter="showConfirmationDialog"
      >
        {{ $t('controls.delete') }}
      </v-btn>
    </v-list-item>
    <v-list-item class="justify-center">
      <v-btn
        class="actionButtonMobile"
        color="primary white--text"
        @click="download"
      >
        {{ $t('controls.download') }}
      </v-btn>
    </v-list-item>
    <ConfirmationDialog
      v-model="showDeleteConfirmation"
      body="document.deleteConfirmationBody"
      title="document.deleteConfirmationTitle"
      :on-confirm="confirmDelete"
      :loading="loading"
      confirm-label="controls.confirmDelete"
    />
  </v-list>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import {
  Document,
  DocumentFile,
  DocumentListItem,
  FileDownloadDispositionTypeEnum,
} from 'api-client'
import download from '@/assets/js/download'

@Component
export default class DocumentActions extends Vue {
  @Prop({ required: true }) document: DocumentListItem | Document
  @Prop({ default: () => () => {} }) onDelete: () => void
  @Prop({ default: () => () => {} }) closeMenu: () => void

  showDeleteConfirmation = false
  loading = false
  userRole = 0 as any

  mounted() {
    this.userRole = localStorage.getItem('myfile.role')
  }

  // render documents action menu on dashboard on small screen
  get dasbboardDocMenu() {
    return window.location.pathname === '/dashboard'
  }

  get canDelete() {
    return this.document && this.document.links.some((l) => l.rel === 'delete')
  }

  get canEdit() {
    return this.document && this.document.links.some((l) => l.rel === 'update')
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

  async editDetails() {
    this.removeBackgourndDiv()

    if (
      this.$route.path.includes(
        this.localePath(`/documents/${this.document.id}`),
      )
    ) {
      // TODO: so hacky - put a variable in the store to determine whether the
      //       edit details dialog is shown instead
      await this.$router.push(
        this.localePath({
          path: `/documents/${this.document.id}`,
          query: {
            ...this.$route.query,
            showDetails: 'true',
          },
        }),
      )
      setTimeout(() => window.location.reload(), 100)
    } else {
      this.$router.push(
        this.localePath({
          path: `/documents/${this.document.id}`,
          query: {
            ...this.$route.query,
            showDetails: 'true',
          },
        }),
      )
    }
  }

  showConfirmationDialog() {
    this.showDeleteConfirmation = true
    this.$emit('focusConfirmationDialog')
  }

  async confirmDelete() {
    this.loading = true
    await this.deleteDoc()
    setTimeout(() => {
      this.loading = false
      this.showDeleteConfirmation = false
      this.closeMenu()
      this.$router.push(this.localePath('/dashboard'))
    }, 3000)
  }

  async deleteDoc() {
    await this.$store.dispatch('document/delete', this.document)
    this.onDelete()
    this.removeBackgourndDiv()
  }
  
  removeBackgourndDiv(){
    if (document.getElementById('menuBackground')){
      // @ts-ignore
      document.getElementById('menuBackground').remove();
    }
  }

}

</script>

<style lang="scss">
.actionButtonMobile {
  width: 100%;
}
</style>
