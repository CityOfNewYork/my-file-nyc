<template>
  <v-btn
    v-if="isVisible"
    :to="
      localeRoute({
        path: '/share',
        query: {
          selected: preselected,
        },
      })
    "
    color="primary white--text"
    class="text-body-1 font-weight-medium share-label-style"
    style="
      text-align: center !important;
      min-width: 140px !important;
      display: flex;
      justify-content: center;
    "
  >
    <v-icon
      v-if="$vuetify.breakpoint.smAndUp"
      class="share-container-icon-style"
      left
    >
      $send
    </v-icon>
    {{ $t('controls.share') }}
  </v-btn>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { userStore } from '@/plugins/store-accessor'

@Component
export default class ShareButton extends Vue {
  @Prop({ default: () => [] }) preselected: string[]

  get isVisible() {
    return userStore.isClient || userStore.isCbo
  }
}
</script>
