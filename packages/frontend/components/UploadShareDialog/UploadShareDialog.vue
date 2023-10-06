<template>
  <div v-if="!this.afterShareDialog" class="share-dialog-container">
    <h2 style="margin-bottom: 10px; color: black">Document added</h2>
    <p style="text-align: center; margin-bottom: 25px; width: 84%">
      Now that you uploaded your document, you can share it with DHS PATH.
    </p>
    <v-btn
      outlined
      color="primary"
      width="80%"
      style="font-size: 16px; font-weight: bold"
      @click="submit"
    >
      Share with DHS
    </v-btn>
  </div>
  <div v-else>
    <v-progress-circular :size="100" :width="10" indeterminate color="primary">
      WAIT
    </v-progress-circular>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
@Component
export default class UploadShareDialog extends Vue {
  @Prop({ default: () => {} }) submit: () => void
  @Prop({ default: false }) afterShareDialog: boolean
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
</style>
