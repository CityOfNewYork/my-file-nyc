<template>
  <div v-if="!loading">
    <template v-if="collections.length">
      <v-data-table
        v-show="$vuetify.breakpoint.smAndUp"
        :disable-pagination="true"
        :headers="headers"
        :items="collections"
        hide-default-footer
        :item-class="() => 'clickable'"
        @click:row="previewCollection"
      >
        <template v-slot:item.icon>
          <v-icon small color="primary" class="my-2">$folder</v-icon>
        </template>
        <template v-slot:item.name="{ item }">
          <div>
            <template v-if="item.numberOfDocuments > 1">
              {{
                $t('sharedFolder.folderName', {
                  num: item.numberOfDocuments,
                  date: format(new Date(item.createdDate), 'MM/dd/yyyy'),
                  time: format(new Date(item.createdDate), 'hh:mm a'),
                })
              }}
            </template>
            <template v-else-if="item.numberOfDocuments === 1">
              {{
                $t('sharedFolder.folderNameWithOneDocument', {
                  date: format(new Date(item.createdDate), 'MM/dd/yyyy'),
                  time: format(new Date(item.createdDate), 'hh:mm a'),
                })
              }}
            </template>
            <template v-else>
              {{ $t('sharedFolder.emptyCollection') }}
            </template>
          </div>
        </template>
      </v-data-table>
      <CollectionCard
        v-for="(collection, i) in collections"
        v-show="$vuetify.breakpoint.xs"
        :key="i"
        v-model="selected[i]"
        :collection="collection"
        :selectable="selectable"
        :class="{ 'mb-4': $vuetify.breakpoint.smAndUp }"
      />
    </template>
    <div
      v-else
      :style="$vuetify.breakpoint.xsOnly ? 'height: 80dvh;' : 'height: 65dvh;'"
      class="d-flex justify-center align-center flex-column"
    >
      <p class="d-flex justify-center">
        {{ $t('sharedFolder.noCollections') }}
      </p>
      <nuxt-link
        class="body-1 font-weight-medium share-link d-flex justify-center"
        :to="localePath('/share')"
      >
        {{ $t('sharedFolder.shareFirstDocument') }}
      </nuxt-link>
    </div>
  </div>
  <div v-else>
    <v-card
      v-for="i in new Array(5)"
      :key="i"
      height="84"
      outlined
      :class="[{ 'mx-4': $vuetify.breakpoint.smAndUp }, { 'mb-4': true }]"
    >
      <v-row align="center" no-gutters>
        <v-col class="py-0 mx-8 mt-3" cols="auto">
          <v-icon>$folder</v-icon>
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
import { userStore } from '@/plugins/store-accessor'
import { CollectionListItem } from 'api-client'
import { DataTableHeader } from 'vuetify'
import { format } from 'date-fns'
import { RawLocation } from 'vue-router'

@Component
export default class CollectionList extends Vue {
  @Prop({ default: false }) selectable: boolean
  @Prop({ default: null }) value: any

  format = format
  loading = true
  selected: boolean[] = []
  headers: DataTableHeader[] = []

  async mounted() {
    // We have to define headers in mounted function since this.$i18n is undefined otherwise
    this.headers = [
      {
        text: '',
        class: 'blue-super-light',
        align: 'start',
        sortable: false,
        value: 'icon',
        width: '3rem',
      },
      {
        text: this.$t('sharedFolder.collectionTableTitle') as string,
        class: 'blue-super-light',
        align: 'start',
        sortable: true,
        value: 'name',
      },
      // {
      //   text: this.$t('dateAdded') as string,
      //   class: 'blue-super-light',
      //   value: 'createdDate',
      //   sortable: true,
      // },
    ]
    await this.$store.dispatch('user/getCollections')
    this.selected = new Array(userStore.collections.length)
    this.loading = false
  }

  get collections() {
    return userStore.collections
  }

  changeColumnValueToIsActive() {
    console.log(this.headers[1].value)
    // Change the second column to use the 'isActive' field from the `collections` array
  }

  @Watch('selected')
  emitSelect() {
    this.$emit(
      'input',
      this.collections.filter(
        (_: CollectionListItem, i: number) => this.selected[i],
      ),
    )
  }

  previewCollection(collectionRowItem: any) {
    this.$router.push(
      this.localeRoute({
        path: `/collections/${collectionRowItem.id}/documents`,
        query: {
          owner: userStore.ownerId,
        },
      }) as RawLocation,
    )
  }
}
</script>

<style scoped lang="scss">
a.share-link {
  text-decoration: none;
}
</style>
