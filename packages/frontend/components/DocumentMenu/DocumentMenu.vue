<template>
  <v-menu
    v-model="showMenu"
    absolute
    offset-y
    style="max-width: 600px"
    :close-on-content-click="false"
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
      :onDelete="onDelete"
      class="a11y-focus"
      tabindex="-1"
    />
  </v-menu>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { Document, DocumentListItem } from 'api-client'

@Component
export default class DocumentMenu extends Vue {
  @Prop({ default: 'grey-7' }) color: string
  @Prop({ required: true }) document: DocumentListItem | Document
  @Prop({ default: () => {} }) onDelete: () => void

  showMenu = false

  focusDocumentMenuList() {
    setTimeout(() => {
      const documentMenuListEl = (this as any).$refs.documentMenuList.$el
      documentMenuListEl.focus()
    }, 300) // small buffer to counter el render delay
  }
}
</script>
