<template>
  <div class="pa-0 d-flex justify-center mt-4">
    <v-sheet outlined color="#c8d3ee" rounded>
      <v-card
        outlined
        color="blue-super-light"
        class="text-center pa-4 text--subtitle-2"
        max-width="31rem"
      >
        <!-- style="font-size: 13px" -->
        <span v-if="title" class="font-weight-bold">
          {{ $t(title) }}:&thinsp;
        </span>
        <span class="font-weight-normal">
          {{ $t(body) }}
        </span>
      </v-card>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class FooterCard extends Vue {
  @Prop({ default: '' }) title: string
  @Prop({ required: true }) body: string
}
</script>
