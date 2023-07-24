<template>
  <div v-if="!loading">
    <template v-if="owners.length">
      <h2 class="mt-3 ml-4 select-client-header">
        {{ $t('agent.selectClient') }}
      </h2>
      <p class="mt-3 ml-4 search-by-header">
        Search by clients using their name, email, birthday, or case number.
      </p>
      <div class="d-flexm mt-3 ml-4 p-5 mb-0 pb-0">
        <v-text-field
          v-model="text"
          :style="'width: 50%; margin-botton: 0px;'"
          outlined
          label="Example: Jane Doe janedoe@gmail.com mm-dd-yyyy"
          prepend-inner-icon="mdi-magnify"
          class="searchbar"
        >
          <template v-if="text" v-slot:append>
            <v-icon
              class="clear-text-button"
              color="black"
              @click="clearSearchbar"
            >
              mdi-close
            </v-icon>
          </template>
        </v-text-field>
      </div>
      <div style="min-height: 100%">
        <v-data-table
          v-show="$vuetify.breakpoint.smAndUp"
          :disable-pagination="true"
          :headers="headers"
          :items="text ? filteredOwners : updatedOwners"
          hide-default-footer
          hide-default-header
          :item-class="itemClass"
          :class="[{ 'ma-4': $vuetify.breakpoint.smAndUp }, 'data-table']"
          :sort-by="sortBy"
          :sort-desc="sortDesc"
          show-expand
          :expanded.sync="expanded"
          item-key="ownerId"
          fixed-header
          height="55vh"
          style="background-color: #fcfcfc; margin-bottom: 100px"
          @click:row="handleExpansion"
        >
          <template v-slot:header="{ props }">
            <tr class="table-row">
              <th
                v-for="header in props.headers"
                :key="header.text"
                @click="sort(header.value)"
              >
                <div class="header-cell">
                  <span class="header-text">{{ header.text }}</span>
                  <v-icon v-if="header.sortable" small>
                    {{
                      header.value === sortBy
                        ? sortDesc
                          ? 'mdi-sort-descending'
                          : 'mdi-sort-ascending'
                        : 'mdi-sort'
                    }}
                  </v-icon>
                </div>
              </th>
            </tr>
          </template>
          <template v-slot:item.icon>
            <v-icon color="primary">$profile</v-icon>
          </template>
          <template v-slot:expanded-item="{ headers }">
            <td :colspan="headers.length">
              <div class="expanded-content">
                <div class="expanded-block-1">
                  <div class="expanded-column-titles">
                    <div class="expanded-column-1">Shared documents</div>
                    <div class="expanded-column-2">Change status</div>
                  </div>
                  <ul v-for="col in collection" :key="col.collection.id">
                    <v-hover v-slot="{ hover }">
                      <li class="my-2 collection-item">
                        <div
                          class="column-1"
                          @click="
                            previewCollection(col.collection.id, col.owner.id)
                          "
                        >
                          <v-icon
                            small
                            :color="hover ? `white` : `primary`"
                            class="my-2 mx-3 collection-item-icon"
                          >
                            $folder
                          </v-icon>
                          {{ col.collection.name }}
                        </div>
                        <div class="column-2">
                          <v-select
                            v-model="col.collection.status"
                            :items="items"
                            class="selectField"
                            dense
                            :menu-props="{ contentClass: 'custom-menu' }"
                            :style="{
                              textAlign: 'center',
                              marginTop: '10px',
                              padding: '-1px 19px;',
                            }"
                            item-text="text"
                            item-value="value"
                            @change="
                              (event) => statusUpdate(event, col.collection.id)
                            "
                          >
                            <template v-slot:item="{ item }">
                              <span
                                :style="
                                  item.value === 'pending'
                                    ? { color: '#8f5f00' }
                                    : { color: '#007539' }
                                "
                                class="menu-option"
                              >
                                {{ item.text }}
                              </span>
                            </template>
                            <template v-slot:append>
                              <v-icon class="icon-menu-down" color="black">
                                mdi-menu-down
                              </v-icon>
                            </template>
                            <template v-slot:selection="{ item }">
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
                            </template>
                          </v-select>
                        </div>
                      </li>
                    </v-hover>
                  </ul>
                </div>
                <div class="divider"></div>
                <div class="expanded-block-2">
                  <div class="expended-content">
                    <div class="total-amount-docs">
                      Total amount of documents:
                      <b>{{ countTotalDocuments() }}</b>
                    </div>

                    <v-btn
                      width="170px"
                      height="32px"
                      class="view-all-btn"
                      color="primary"
                      @click="viewCollections(ownerId)"
                    >
                      View all documents
                    </v-btn>
                  </div>
                </div>
              </div>
            </td>
          </template>
          <template v-slot:item.data-table-expand="{ isExpanded }">
            <v-icon>
              {{ isExpanded ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
            </v-icon>
          </template>
        </v-data-table>
      </div>
      <v-card
        v-for="(owner, i) in owners"
        v-show="$vuetify.breakpoint.xs"
        :key="`sharedOwner-${i}`"
        rounded="0"
      >
        <v-list-item class="grow py-4" @click="viewCollections(owner.ownerId)">
          <v-list-item-avatar>
            <v-icon size="24">$profile</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="subtitle-1">
              {{ owner.firstName + ' ' + owner.lastName }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider class="my-0" />
      </v-card>
    </template>
    <EmptyState
      v-else
      body="sharedFolder.noSharedDocuments"
      class="ma-12"
      image-size="256px"
    >
      <template v-slot:action>
        <div class="primary--text text-subtitle-2 text-center">
          {{ $t('agent.noClientActionLabel') }}
        </div>
        <div class="d-flex justify-center">
          <v-btn
            min-height="20px"
            height="20px"
            text
            color="primary"
            class="font-weight-bold"
            @click="switchToClient"
            @keypress.enter="switchToClient"
          >
            {{ $t('agent.noClientActionText') }}
          </v-btn>
        </div>
      </template>
    </EmptyState>
  </div>
  <div v-else>
    <v-card
      v-for="i in new Array(5)"
      :key="i"
      class="mx-auto mb-4"
      max-width="700"
      outlined
    >
      <v-skeleton-loader type="list-item-two-line"></v-skeleton-loader>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'nuxt-property-decorator'
import { userStore } from '@/plugins/store-accessor'
import { SharedCollectionListItem } from '@/types/transformed'
import { format, parseISO } from 'date-fns'
import { DataTableHeader } from 'vuetify'
import { UserRole } from '@/types/user'
import { select } from '@storybook/addon-knobs'
import { push } from '@/templates/new/component/prompt'
import { RawLocation } from 'vue-router'
import { conforms } from 'lodash'
import { DocumentListItem } from '@/../api-client'

@Component({})
export default class SharedOwnerList extends Vue {
  @Prop({ default: 'false' }) inbox: string

  loading = true
  headers: DataTableHeader[] = []
  newHeaders: DataTableHeader[] = []
  text: any = ''
  sortField = '' // Field to sort by
  sortDesc = false // Sort in descending order if true
  sortBy = ''
  expanded: any[] = []
  collection: any[] = []
  items = [
    { text: 'Pending', value: 'pending' },
    { text: 'Complete', value: 'complete' },
  ]

  selectedOption = 'pending'
  documents: DocumentListItem[] = []
  ownerId: string = ''

  statusUpdate(status: any, collectionId: any) {
    return this.$store.dispatch('collection/patchStatus', {
      collectionId,
      status,
    })
  }

  countTotalDocuments() {
    let count: number = 0
    this.collection.forEach((item) => {
      count += item.collection.numberOfDocuments
    })
    return count
  }

  previewCollection(collectionRowItem: any, ownerId: any) {
    this.$router.push(
      this.localeRoute({
        path: `/collections/${collectionRowItem}/documents`,
        query: {
          owner: ownerId,
        },
      }) as RawLocation,
    )
  }

  get getCollection() {
    return this.collection
  }

  clearSearchbar() {
    return (this.text = '')
  }

  handleExpansion(value: any) {
    // Toggle the expansion state of the clicked row
    const index = this.expanded.indexOf(value)
    if (index === -1) {
      if (this.expanded.length > 0) {
        this.expanded.shift()
      }
      this.expanded.push(value)
      this.collection = this.sharedName(value.ownerId)
    } else {
      this.expanded.splice(index, 1)
    }
  }

  sort(field: any) {
    // Toggle sort order if the same field is clicked again
    this.sortBy = field
    if (this.sortField === field) {
      this.sortDesc = !this.sortDesc
    } else {
      this.sortField = field
      this.sortDesc = false // Reset to ascending order
    }

    // Perform sorting
    this.owners.sort((a: any, b: any) => {
      const aValue = a[field]
      const bValue = b[field]

      if (aValue < bValue) return this.sortDesc ? 1 : -1
      if (aValue > bValue) return this.sortDesc ? -1 : 1
      return 0
    })

    return this.owners
  }

  get updatedOwners() {
    return this.owners
  }

  languagesObject: any = {
    en: 'English',
    'en-us': 'English',
    es: 'Spanish',
    ar: 'Arabic',
    ch: 'Chinese',
    ru: 'Russian',
    urd: 'Urdu',
    ko: 'Korean',
    fr: 'French',
    ht: 'Haitian Creole',
    bn: 'Bengali',
    pl: 'Polish',
  }

  fetchDocuments() {
    return this.$store.dispatch(
      'collection/getDocuments',
      this.$route.params.id,
    )
  }

  async mounted() {
    // We have to define headers in mounted function since this.$i18n is undefined otherwise
    this.headers = [
      { text: '', value: 'data-table-expand' },
      {
        text: this.$t('agent.clientFirstNameLabel') as string,
        class: 'white',
        align: 'start',
        sortable: true,
        value: 'firstName',
      },
      {
        text: this.$t('agent.clientLastNameLabel') as string,
        class: 'white',
        align: 'start',
        sortable: true,
        value: 'lastName',
      },
      {
        text: this.$t('agent.clientEmail') as string,
        class: 'white',
        align: 'start',
        sortable: true,
        value: 'email',
      },
      {
        text: this.$t('agent.clientDob') as string,
        class: 'white',
        align: 'start',
        sortable: true,
        value: 'dob',
        sort: (a, b) => new Date(a).getTime() - new Date(b).getTime(),
      },
      {
        text: this.$t('agent.clientCaseNum') as string,
        class: 'white',
        align: 'start',
        sortable: true,
        value: 'dhsCaseNumber',
      },
      {
        text: this.$t('agent.dateShared') as string,
        class: 'white',
        value: 'createdDate',
        sortable: true,
        sort: (a, b) => new Date(a).getTime() - new Date(b).getTime(),
      },
      {
        text: 'Language',
        class: 'white',
        sortable: true,
        align: 'start',
        value: 'locale',
      },
    ]
    await this.$store.dispatch('user/getSharedCollections')
    // const promises = [
    //   this.fetchDocuments().then((res: DocumentListItem[]) => {
    //     this.documents = res
    //   }),
    // ]
    // await Promise.all(promises)
    this.loading = false
  }

  getUniqueListBy(arr: any[], key: any) {
    return [...new Map(arr.map((item: any) => [item[key], item])).values()]
  }

  filterOwners(text: any) {
    if (!text || !text.trim()) {
      return this.owners // Return all items if search query is empty
    } else {
      const queries = text.toLowerCase().trim().split(' ')
      return this.owners.filter((item: any) =>
        queries.every(
          (query: any) =>
            item.firstName.toLowerCase().includes(query) ||
            item.lastName.toLowerCase().includes(query) ||
            item.dhsCaseNumber.toLowerCase().includes(query) ||
            item.email.toLowerCase().includes(query) ||
            item.dob.toLowerCase().includes(query),
        ),
      )
    }
  }

  filteredOwners: any[] = []
  @Watch('text', { immediate: true })
  watchfilterOwners(val: any) {
    this.filteredOwners = this.filterOwners(val)
  }

  get owners() {
    // TODO: created date could be any of the dates of the collections shared by an owner
    //       not necessarily most or least recent
    return userStore.sharedCollections
      .filter(
        (
          c: SharedCollectionListItem,
          i: number,
          arr: SharedCollectionListItem[],
        ) => arr.findIndex((o) => o.owner.id === c.owner.id) === i,
      )
      .map((c: SharedCollectionListItem) => {
        const dobFormat = c.owner.dob.split('-')
        console.log(dobFormat)
        return {
          ownerId: c.owner.id,
          collectionId: c.collection.id,
          email: c.shareInformation.sharedBy.email,
          firstName: c.owner.givenName,
          lastName: c.owner.familyName,
          locale: this.languagesObject[c.owner.locale.toString()],
          dob: format(
            new Date(
              parseInt(dobFormat[2]),
              parseInt(dobFormat[0]) - 1,
              parseInt(dobFormat[1]),
            ),
            'MM/dd/yyyy',
          ),
          dhsCaseNumber: c.owner.dhsCaseNumber,
          createdDate: format(c.collection.createdDate, 'LLL d, yyyy'),
        }
      })
  }

  sharedName(ownerId: any) {
    this.ownerId = ownerId
    const collections: SharedCollectionListItem[] = userStore.sharedCollections
      .filter((c: SharedCollectionListItem) => c.owner.id === ownerId)
      .map((c: any) => {
        return c
      })
    return collections || 'No data'
  }

  switchToClient() {
    userStore.setRole(UserRole.CLIENT)
    this.$router.replace(this.localePath('/dashboard'))
  }

  viewCollections(ownerId: any) {
    this.$router.push(this.localePath(`/collections/owner/${ownerId}`))
  }

  itemClass(item: SharedCollectionListItem, i: number) {
    const classes = ['clickable']
    if (i === 0) {
      classes.push('border-bottom')
    }
    return classes.join(' ')
  }
}
</script>

<style scoped lang="scss">
table {
  min-height: 100vh;
  position: relative;
}
.expanded-column-titles {
  display: flex;
  flex-direction: row;
  margin-left: 35px;
  margin-top: 15px;
  margin-bottom: 10px;
  font-size: 1rem;
  font-weight: 500;
  color: black;
}
.expanded-column-1 {
  flex-grow: 7;
}

.expanded-column-2 {
  flex-grow: 1;
}

.expanded-content {
  min-height: 270px;
  max-height: 270px;
  overflow-y: auto;
  display: flex;
  width: 100%;
  flex-direction: row;
}
.expanded-block-1 {
  flex-grow: 6;
}

.expanded-block-2 {
  flex-grow: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 4px;
  top: 0px;
  position: -webkit-sticky !important; /* Safari */
  position: sticky !important;
  border-left: 1px solid #031553;

  .expended-content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .total-amount-docs {
    margin-bottom: 20px;
    font-size: 1rem;
    font-weight: 500;
  }

  .view-all-btn {
    padding: 0 !important;
  }
}

.expanded-titles {
  display: flex;
  flex-wrap: wrap;
}

// .total-amount-docs {
//   flex-grow: 1;
// }

// .view-all-btn {
//   flex-grow: 1;
// }
.expanded-total-amount-title {
  flex: 50%;
}
.selectField {
  max-width: 100px;
  height: 30px;
}

.selectField > .v-select__menu-list {
  background-color: #031553 !important;
}

.menu-option {
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 0.875rem;
}

.select-options {
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 0.875rem;
}
.selectField.v-text-field > .v-input__control > .v-input__slot:before {
  border-style: none;
}
.selectField.v-text-field > .v-input__control > .v-input__slot:after {
  border-style: none;
}

.selectField.v-text-field
  > .v-input__control
  > .v-input__slot
  > .v-select__selections {
  line-height: 30px;
}

.v-select > .v-select__selections > input {
  display: none !important;
}

.v-select .v-select__selections input[type='text'] {
  visibility: hidden !important;
  pointer-events: none !important;
}

.selectField.v-text-field.v-input--dense:not(.v-text-field--enclosed):not(.v-text-field--full-width)
  .v-input__append-inner
  .v-input__icon
  > .v-icon {
  color: black;
  margin-bottom: 15px;
  padding-left: 10px;
}

.clear-text-button:hover {
  cursor: pointer;
  background-color: #e0e1e5;
}
.search-by-header {
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
}
.collection-item {
  font-size: 0.875rem;
  line-height: 1.5rem;

  border: 1px solid #004cbe;
  height: 44px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-right: 25px;
}

.column-1 {
  font-size: 0.875rem;
  line-height: 1.5rem;
  text-decoration: solid underline blue 1px;
  text-underline-offset: 4px;
  color: #004cbe;
  display: flex;
  align-items: center;
  width: 85%;
}

.column-2 {
  width: 15%;
}

.collection-item:hover {
  cursor: pointer;
  background: #031553;
  .column-1 {
    color: white;
    text-decoration: solid underline white 1px;
  }
  .icon-menu-down {
    color: white !important;
  }
}

.data-table {
  border: 1px solid #999ca4;
  border-radius: 5px;
}

a.dashboard-link {
  text-decoration: none;
}

.header-cell {
  display: flex;
  align-items: center;
}

.header-text {
  margin-left: 14px; /* Adjust as needed */
  margin-right: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 20px;
}

.v-data-table > .v-data-table__wrapper > table {
  position: relative !important;
  height: 100vh !important;
}
.table-row {
  background-color: #f0f7fe;
  height: 56px;
  top: 0;
  overflow: auto;
  position: sticky !important;
  z-index: 2 !important;
}

.v-text-field__details {
  display: none !important;
  input {
    display: none;
  }
}

.select-client-header {
  color: black;
  font-style: normal;
  font-weight: 700;
  font-size: 1.375rem;
  line-height: 1.875rem;
}

ul {
  list-style: none;
}
</style>
