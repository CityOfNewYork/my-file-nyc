<template>
  <div class="collection-owner-container">
    <ApplicationHeader />

    <AppBar :breadcrumbs="breadcrumbs" />

    <!-- <SideNav /> -->

    <SharedCollectionList :owner-id="$route.params.ownerid" class="ma-2" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { DocumentListItem, User } from 'api-client'
import { format } from 'date-fns'
import { userStore } from '@/plugins/store-accessor'
import { SharedCollectionListItem } from '@/types/transformed'

@Component({
  head() {
    return {
      title: (this as OwnerCollections).title,
    }
  },
})
export default class OwnerCollections extends Vue {
  title = ''

  mounted() {
    if (this.sharerName) {
      this.title = `${this.$t('tabTitles.sharedBy')} ${this.sharerName}`
    } else {
      this.title = this.$t('tabTitles.shared') as string
    }
  }

  get sharerName() {
    const collections: SharedCollectionListItem[] = userStore.sharedCollections.filter(
      (c: SharedCollectionListItem) =>
        c.owner.id === this.$route.params.ownerid,
    )
    return collections.length ? `${collections[0].owner.name}` : ''
  }

  get breadcrumbs() {
    if (userStore.profile) {
      return [
        {
          title: 'navigation.clients',
          to: '/',
        },
        {
          title: this.sharerName,
        },
      ]
    }
    return []
  }
}
</script>

<style lang="scss">
.collection-owner-container {
  margin-top: 64px;
  width: 100%;

  .v-toolbar__extension {
    height: 50px !important;
  }
}
</style>
