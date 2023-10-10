<template>
  <div class="share-dialog-container">
    <v-btn
      class="close-button pa-0"
      icon
      color="black"
      @click="closeAfterUploadDialog"
    >
      <v-icon small>$close</v-icon>
    </v-btn>
    <h2 style="margin-bottom: 10px; color: black">Document added</h2>
    <p style="text-align: center; margin-bottom: 25px; width: 84%">
      Now that you uploaded your document, you can share it with DHS PATH.
    </p>
    <v-btn
      outlined
      color="primary"
      width="80%"
      style="font-size: 16px; font-weight: bold"
      @click="redirectToSharePage"
    >
      Share with DHS
    </v-btn>
  </div>
  <!-- <div
    v-else-if="!afterShareDialog && afterShareSuccess"
    class="share-dialog-container"
  >
    <v-btn
      class="close-button pa-0"
      icon
      color="black"
      @click="closeAfterUploadDialog"
    >
      <v-icon small>$close</v-icon>
    </v-btn>

    <h1 style="margin-bottom: 10px;">
      Success
      <v-icon color="green" x-large>mdi-check-circle-outline</v-icon>
    </h1>
    <p style="text-align: center; margin-bottom: 25px; width: 84%">
      You successfully shared document with DHS PATH.
    </p>
  </div> -->
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
@Component
export default class UploadShareDialog extends Vue {
  //   @Prop({ default: () => {} }) submit: () => void
  //   @Prop({ default: false }) afterShareDialog: boolean
  @Prop() closeAfterUploadDialog: () => void
  @Prop() redirectToSharePage: () => void
  //   @Prop({ default: false }) afterShareSuccess: boolean
}
</script>

<style scoped lang="scss">
.share-dialog-container {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.close-button {
  position: absolute;
  top: 2px;
  right: 2px;
}
</style>
