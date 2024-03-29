<template>
  <div v-if="!loading">
    <template v-if="documents.length">
      <v-data-table
        v-show="$vuetify.breakpoint.smAndUp"
        v-model="selected"
        :disable-pagination="true"
        :headers="headers"
        :items="documents"
        hide-default-footer
        :show-select="selectable"
        :item-class="() => 'clickable document-row'"
        @click:row="onDocumentClick"
      >
        <template v-slot:item.icon="{ item }">
          <DocumentThumbnail :document="item" />
        </template>

        <template v-slot:item.createdDate="{ item }">
          {{ format(new Date(item.createdDate), 'MM/dd/yyyy') }}
        </template>

        <template v-slot:item.actions="{ item }">
          <DocumentMenu :on-delete="reload" :document="item" />
        </template>
      </v-data-table>
      <DocumentCard
        v-for="(document, i) in documents"
        v-show="$vuetify.breakpoint.xs"
        :key="i"
        v-model="selected"
        tabindex="0"
        :document="document"
        :class="{ 'mb-4': $vuetify.breakpoint.smAndUp }"
        :selectable="selectable"
        :reload="reload"
        :owner="owner"
        :show-actions="showActions"
      />
      <v-dialog
        v-model="afterUploadingDialog"
        style="display: flex; justify-content: center; align-items: center"
        max-width="fit-content"
        @click:outside="closeDialog"
      >
        <div
          style="
            background-color: white;
            width: 300px;
            height: 300px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
          "
        >
          <!-- <v-progress-circular
                v-if="afterUploadDialogSpinner"
                :size="100"
                :width="5"
                indeterminate
                color="primary"
              >
                WAIT
              </v-progress-circular> -->
          <UploadShareDialog />
        </div>
      </v-dialog>
    </template>
    <EmptyState
      v-else
      body="document.noDocuments"
      :style="$vuetify.breakpoint.xsOnly ? 'height: 80dvh;' : 'height: 65dvh;'"
      class="d-flex justify-center align-center"
    >
      <template v-slot:action>
        <div class="d-flex justify-center pa-0">
          <UploadButton
            :docs-present="reload"
            class="text-center"
            :label="$t('document.uploadFirst')"
            :outlined="true"
            px="12"
            @complete="onUpload"
          />
        </div>
      </template>
    </EmptyState>
  </div>
  <div v-else>
    <v-card
      v-for="i in new Array(5)"
      :key="i"
      outlined
      :class="[
        { 'mx-4': $vuetify.breakpoint.smAndUp },
        { 'mb-4': $vuetify.breakpoint.smAndUp },
      ]"
    >
      <v-row align="center" no-gutters>
        <v-col cols="auto">
          <v-skeleton-loader
            type="image"
            height="100"
            width="100"
            class="ma-4"
          ></v-skeleton-loader>
        </v-col>
        <v-col>
          <v-skeleton-loader type="list-item-two-line"></v-skeleton-loader>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'nuxt-property-decorator'
import { DocumentListItem, Owner } from 'api-client'
import { userStore, shareDialogStore } from '@/plugins/store-accessor'
import { DataTableHeader } from 'vuetify'
import { format } from 'date-fns'
import { RawLocation } from 'vue-router'
import { DelegatedClient } from '../../types/delegate'

@Component
export default class DocumentList extends Vue {
  @Prop({ default: false }) selectable: boolean
  @Prop({ default: null }) value: DocumentListItem[]
  @Prop({ default: () => [] }) preSelected: string[]
  @Prop({ default: null }) fetchDocuments:
    | (() => Promise<DocumentListItem[]>)
    | null

  @Prop({ default: null }) owner: Owner | null
  @Prop({ default: true }) showActions: boolean
  @Prop({ default: () => () => {} }) docsPresent: () => void
  @Prop({ default: () => () => {} }) onUpload: () => void

  loading = true
  selected: DocumentListItem[] = []
  headers: DataTableHeader[] = []
  format = format
  cachedDocuments: DocumentListItem[] = []

  get afterUploadingDialog() {
    return shareDialogStore.isVisible
  }

  closeDialog() {
    shareDialogStore.setVisible(false)
  }

  async mounted() {
    await this.reload()
    // We have to define headers in mounted function since this.$i18n is undefined otherwise
    this.headers = [
      {
        text: this.$t('') as string,
        class: 'blue-super-light pl-10',
        align: 'start',
        sortable: false,
        value: 'icon',
        width: '3rem',
      },
      {
        text: this.$t('document.fileName') as string,
        class: 'blue-super-light document-list-header-style',
        align: 'start',
        sortable: true,
        value: 'name',
      },
      {
        text: this.$t('dateAdded') as string,
        class: 'blue-super-light document-list-header-style',
        value: 'createdDate',
        sortable: true,
      },
    ]
    if (this.showActions)
      this.headers.push({
        text: '',
        class: 'blue-super-light',
        value: 'actions',
        sortable: false,
      })
    if (this.selectable)
      this.headers.push({
        text: '',
        class: 'blue-super-light',
        align: 'start',
        sortable: false,
        value: 'data-table-select',
        width: '3rem',
      })
  }

  get documents() {
    // eslint-disable-next-line no-unused-expressions
    return [...this.cachedDocuments].sort(
      (d1: DocumentListItem, d2: DocumentListItem) => {
        if (this.preSelected.includes(d1.id)) {
          if (this.preSelected.includes(d2.id)) {
            return 0
          }
          return -1
        }
        return 1
      },
    )
  }

  @Watch('selected')
  emitSelect(val: DocumentListItem[]) {
    this.$emit('input', val)
  }

  async onDocumentClick(document: DocumentListItem) {
    if (this.selectable) {
      if (
        this.selected.map((selectedDoc) => selectedDoc.id).includes(document.id)
      ) {
        this.selected = this.selected.filter(
          (selectedDoc: DocumentListItem) => selectedDoc.id !== document.id,
        )
      } else {
        this.selected.push(document)
      }
    } else if (this.owner) {
      this.$router.push(
        this.localeRoute({
          path: `/documents/${document.id}`,
          query: {
            ownerId: this.owner.id,
            ownerName: `${this.owner?.name}`,
          },
        }) as RawLocation,
      )
    } else if (userStore.isCbo && userStore.isActingAsDelegate) {
      const delegate: DelegatedClient | null = await userStore.fetchImpersonatedDelegate()
      this.$router.push(
        this.localeRoute({
          path: `/documents/${document.id}`,
          query: {
            ownerId: delegate!.allowsAccessToUser.id,
            ownerName: delegate!.allowsAccessToUser.name,
          },
        }) as RawLocation,
      )
    } else {
      this.$router.push(this.localePath(`/documents/${document.id}`))
    }
  }

  async reload() {
    this.cachedDocuments = this.fetchDocuments
      ? await this.fetchDocuments()
      : await this.$store.dispatch('user/getDocuments')
    this.selected = []
    if (this.preSelected) {
      for (const id of this.preSelected) {
        const document = this.cachedDocuments.find(
          (d: DocumentListItem) => d.id === id,
        )
        if (document) {
          this.selected.push(document)
        }
      }
    }
    this.loading = false
  }
}
</script>

<style lang="scss">
a.dashboard-link {
  text-decoration: none;
}

// document filename cell
.document-row td.text-start:nth-child(2) {
  @include ellipsis;
  max-width: 0;
}
</style>
