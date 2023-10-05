<template>
  <div v-if="!loading" class="second-layer-table">
    <v-data-table
      v-show="$vuetify.breakpoint.smAndUp"
      :disable-pagination="true"
      :headers="headers"
      :items="collections"
      hide-default-footer
      @click:row="previewCollection"
    >
      <template v-slot:item.icon>
        <v-icon small color="primary" class="my-2">$folder</v-icon>
      </template>
      <template v-slot:item.name="{ item }">
        {{
          $t('sharedFolder.folderName', {
            num: item.numberOfDocuments,
            date: format(new Date(item.sharedDateNoFormat), 'MM/dd/yyyy'),
            time: format(new Date(item.sharedDateNoFormat), 'hh:mm a'),
          })
        }}
      </template>
      <!-- <template v-slot:item.status="{ item }">
        <v-select
          v-model="item.status"
          :items="items"
          class="selectField"
          dense
          :style="{
            textAlign: 'center',
            marginTop: '10px',
            padding: '-1px 19px;',
            width: '200px',
          }"
          item-text="text"
          item-value="value"
          @change="(event) => statusUpdate(event, item.id)"
          @click.stop
        >
          <span
            :style="
              item.status === 'pending'
                ? { color: '#8f5f00' }
                : { color: '#007539' }
            "
            class="menu-option"
          >
            {{ item.status }}
          </span>

          <template v-slot:append>
            <v-icon class="icon-menu-down" color="black">mdi-menu-down</v-icon>
          </template> -->
      <!-- <template v-slot:selection="{ item }">
            <span
              :style="
                hover
                  ? item.value === 'pending'
                    ? { color: '#ffdf8d' }
                    : { color: '#a8dd7c' }
                  : item.value === 'pending'
                  ? { color: '#8f5f00' }
                  : { color: '#007539' }
              "
              class="select-options"
            >
              {{ item.text }}
            </span>
          </template> -->
      <!-- </v-select>
      </template> -->
    </v-data-table>
    <v-card
      v-for="(collection, i) in collections"
      v-show="$vuetify.breakpoint.xs"
      :key="`sharedOwner-${i}`"
      rounded="0"
    >
      <v-list-item class="grow py-4" @click="previewCollection(collection)">
        <v-icon left color="primary" size="24">$folder</v-icon>

        <v-list-item-content>
          <v-list-item-title class="subtitle-1">
            {{ collection.name }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider class="my-0" />
    </v-card>
  </div>
  <div v-else>
    <v-card
      v-for="i in new Array(5)"
      :key="i"
      class="mx-auto mb-4"
      max-width="700"
      outlined
    ></v-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { userStore } from '@/plugins/store-accessor'
import { format } from 'date-fns'
import { SharedCollectionListItem } from '@/types/transformed'
import { DataTableHeader } from 'vuetify'
import { RawLocation } from 'vue-router'

@Component
export default class SharedCollectionList extends Vue {
  loading = true
  headers: DataTableHeader[] = []
  format = format
  // items = [
  //   { text: 'Pending', value: 'pending' },
  //   { text: 'Complete', value: 'complete' },
  // ]

  // selectedOption: string = 'pending'

  @Prop({ default: '' }) ownerId: string

  statusUpdate(status: any, collectionId: any) {
    return this.$store.dispatch('collection/patchStatus', {
      collectionId,
      status,
    })
  }

  async mounted() {
    // We have to define headers in mounted function since this.$i18n is undefined otherwise
    this.headers = [
      {
        text: '',
        class: 'white',
        align: 'start',
        sortable: false,
        value: 'icon',
        width: '3rem',
      },
      {
        text: this.$t('agent.sharedFolderNameLabel') as string,
        class: 'white',
        align: 'start',
        sortable: true,
        value: 'name',
      },
      {
        text: this.$t('agent.sharedBy') as string,
        class: 'white',
        value: 'sharerName',
        sortable: true,
      },
      {
        text: this.$t('agent.dateShared') as string,
        class: 'white',
        value: 'sharedDate',
        sortable: true,
      },
      // {
      //   text: 'Status',
      //   class: 'white',
      //   value: 'status',
      //   align: 'start',
      // },
    ]
    const collec = await this.$store.dispatch('user/getSharedCollections')
    this.loading = false
  }

  get collections() {
    return userStore.sharedCollections
      .filter((c: SharedCollectionListItem) =>
        this.ownerId ? c.owner.id === this.$route.params.ownerid : true,
      )
      .map((c: SharedCollectionListItem) => {
        return {
          id: c.collection.id,
          name: c.collection.name,
          sharerName: c.shareInformation.sharedBy.name,
          sharedDate: format(
            new Date(c.shareInformation.sharedDate),
            'LLL d, yyyy',
          ),
          sharedDateNoFormat: c.shareInformation.sharedDate,
          status: c.collection.status,
          numberOfDocuments: c.collection.numberOfDocuments,
        }
      })
  }

  previewCollection(collectionRowItem: any) {
    this.$router.push(
      this.localeRoute({
        path: `/collections/${collectionRowItem.id}/documents`,
        query: {
          owner: this.ownerId,
        },
      }) as RawLocation,
    )
  }
}
</script>

<style lang="scss">
.second-layer-table > .v-data-table {
  width: 66% !important;
}

.second-layer-table {
  display: flex !important;
  justify-content: center !important;
}
</style>
