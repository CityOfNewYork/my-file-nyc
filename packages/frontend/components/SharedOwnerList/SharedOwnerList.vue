<template>
  <div v-if="!loading">
    <template v-if="owners.length">
      <h2 class="mt-3 ml-4 select-client-header">
        {{ $t('agent.selectClient') }}
      </h2>
      <div class="d-flexm mt-3 ml-4 p-5 mb-0 pb-0">
        <v-text-field
          v-model="text"
          :style="'width: 50%; margin-botton: 0px;'"
          outlined
          label="Search by first name, last name, email or case number."
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>
      </div>
      <v-data-table
        v-show="$vuetify.breakpoint.smAndUp"
        :disable-pagination="true"
        :headers="headers"
        :items="text ? getFilteredOwners : updatedOwners"
        hide-default-footer
        hide-default-header
        :item-class="itemClass"
        :class="[{ 'ma-4': $vuetify.breakpoint.smAndUp }, 'data-table']"
        :sort-by="sortBy"
        :sort-desc="sortDesc"
        @click:row="viewCollections"
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
      </v-data-table>
      <v-card
        v-for="(owner, i) in owners"
        v-show="$vuetify.breakpoint.xs"
        :key="`sharedOwner-${i}`"
        rounded="0"
      >
        <v-list-item class="grow py-4" @click="viewCollections(owner)">
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
import { format } from 'date-fns'
import { DataTableHeader } from 'vuetify'
import { UserRole } from '@/types/user'
import { select } from '@storybook/addon-knobs'
import { push } from '@/templates/new/component/prompt'

@Component({})
export default class SharedOwnerList extends Vue {
  @Prop({ default: 'false' }) inbox: string

  loading = true
  headers: DataTableHeader[] = []
  text: any = ''
  sortField = '' // Field to sort by
  sortDesc = false // Sort in descending order if true
  sortBy = ''

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

  async mounted() {
    // We have to define headers in mounted function since this.$i18n is undefined otherwise
    this.headers = [
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
      },
    ]
    await this.$store.dispatch('user/getSharedCollections')
    this.loading = false
  }

  getUniqueListBy(arr: any[], key: any) {
    return [...new Map(arr.map((item: any) => [item[key], item])).values()]
  }

  filteredOwners() {
    if (this.text.length > 0) {
      const arr: any = []

      this.owners.forEach((selectedOwner: any) => {
        const { firstName, lastName, dhsCaseNumber, email } = selectedOwner
        const lowerText = this.text.toLowerCase().trim()
        if (
          firstName.toLowerCase().includes(lowerText) ||
          lastName.toLowerCase().includes(lowerText) ||
          dhsCaseNumber.toLowerCase().includes(lowerText) ||
          email.toLowerCase().includes(lowerText)
        ) {
          arr.push(selectedOwner)
        }
      })

      const newArr = this.getUniqueListBy(arr, 'email')
      return newArr
    }

    return []
  }

  get getFilteredOwners() {
    return this.filteredOwners()
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
      .map((c: SharedCollectionListItem) => ({
        ownerId: c.owner.id,
        collectionId: c.collection.id,
        email: c.shareInformation.sharedBy.email,
        firstName: c.owner.givenName,
        lastName: c.owner.familyName,
        dob: c.owner.dob,
        dhsCaseNumber: c.owner.dhsCaseNumber,
        createdDate: format(c.collection.createdDate, 'LLL d, yyyy'),
      }))
  }

  switchToClient() {
    userStore.setRole(UserRole.CLIENT)
    this.$router.replace(this.localePath('/dashboard'))
  }

  viewCollections(owner: any) {
    this.$router.push(this.localePath(`/collections/owner/${owner.ownerId}`))
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

.table-row {
  background-color: #f0f7fe;
  height: 56px;
}

.v-text-field__details {
  display: none !important;
}

.select-client-header {
  color: black;
  font-style: normal;
  font-weight: 700;
  font-size: 1.375rem;
  line-height: 1.875rem;
}
</style>
