<template>
  <div v-if="!loading">
    <template v-if="owners.length">
      <div class="d-flexm mt-3 ml-9 p-5">
        <b>{{ $t('agent.sharedWith') }}</b>
        {{ inbox }}
      </div>
      <v-data-table
        v-show="$vuetify.breakpoint.smAndUp"
        :disable-pagination="true"
        :headers="headers"
        :items="owners"
        hide-default-footer
        :item-class="itemClass"
        :class="{ 'ma-8': $vuetify.breakpoint.smAndUp }"
        @click:row="viewCollections"
      >
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

@Component
export default class SharedOwnerList extends Vue {
  @Prop({ default: 'false' }) inbox: string

  loading = true
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
        text: this.$t('agent.clientFirstNameLabel') as string,
        class: 'blue-super-light',
        align: 'start',
        sortable: true,
        value: 'firstName',
      },
      {
        text: this.$t('agent.clientLastNameLabel') as string,
        class: 'blue-super-light',
        align: 'start',
        sortable: true,
        value: 'lastName',
      },
      {
        text: this.$t('agent.clientEmail') as string,
        class: 'blue-super-light',
        align: 'start',
        sortable: true,
        value: 'email',
      },
      {
        text: this.$t('agent.clientDob') as string,
        class: 'blue-super-light',
        align: 'start',
        sortable: true,
        value: 'dob',
      },
      {
        text: this.$t('agent.clientCaseNum') as string,
        class: 'blue-super-light',
        align: 'start',
        sortable: true,
        value: 'dhsCaseNumber',
      },
      {
        text: this.$t('agent.dateShared') as string,
        class: 'blue-super-light',
        value: 'createdDate',
        sortable: true,
      },
    ]
    await this.$store.dispatch('user/getSharedCollections')
    this.loading = false
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
a.dashboard-link {
  text-decoration: none;
}
</style>
