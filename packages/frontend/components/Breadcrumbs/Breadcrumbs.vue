<template>
  <div class="py-2 d-flex align-center">
    <template v-for="(crumb, i) in value">
      <v-btn
        v-if="crumb.to"
        :key="`crumb-${i}`"
        text
        primary
        :to="localePath(crumb.to)"
        :class="{ 'font-weight-bold': i === 0 }"
      >
        {{ $t(crumb.title) }}
      </v-btn>
      <v-btn
        v-else-if="!!crumb.click"
        :key="`crumb-${i}`"
        text
        color="primary"
        :class="{ 'font-weight-bold': i === 0 }"
        @click="crumb.click"
        @keypress.enter="crumb.click"
      >
        {{ $t(crumb.title) }}
      </v-btn>
      <span
        v-else
        :key="`crumb-${i}`"
        :class="`body-2 pl-4 ellipsis breadcrumb-last primary--text${
          i === 0 ? ' font-weight-bold' : ''
        }`"
      >
        <!-- {{
          crumb.date
            ? $t('sharedFolder.folderName', {
                num: crumb.numberOfDocuments,
                date: format(new Date(crumb.date), 'MM/dd/yyyy'),
                time: format(new Date(crumb.date), 'hh:mm a'),
              })
            : $t(crumb.title)
        }} -->
        <template v-if="crumb.date">
          <template v-if="crumb.numberOfDocuments > 1">
            {{
              $t('sharedFolder.folderName', {
                num: crumb.numberOfDocuments,
                date: format(new Date(crumb.date), 'MM/dd/yyyy'),
                time: format(new Date(crumb.date), 'hh:mm a'),
              })
            }}
          </template>
          <template v-else-if="crumb.numberOfDocuments === 1">
            {{
              $t('sharedFolder.folderNameWithOneDocument', {
                date: format(new Date(crumb.date), 'MM/dd/yyyy'),
                time: format(new Date(crumb.date), 'hh:mm a'),
              })
            }}
          </template>
          <template v-else>
            {{ $t('sharedFolder.emptyCollection') }}
          </template>
        </template>
        <template v-else>{{ $t(crumb.title) }}</template>
      </span>
      <v-icon
        v-if="i < value.length - 1"
        :key="`crumb-chevron-${i}`"
        class="align-center"
        color="blue-light"
        size="0.6rem"
        :style="'margin-top: -0.1rem'"
      >
        $chevron-right
      </v-icon>
    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { Breadcrumb } from '@/types/nav'
import { format } from 'date-fns'

@Component
export default class Breadcrumbs extends Vue {
  @Prop({ required: true }) value: Breadcrumb[]
  format = format
}
</script>

<style scoped lang="scss">
.breadcrumb-last {
  padding-right: 12px;
}
</style>
