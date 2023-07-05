<template>
  <article
    v-if="markdown"
    :class="$vuetify.breakpoint.smAndUp ? 'mx-8 my-4 text-article' : 'ma-4'"
  >
    <VueShowdown :markdown="markdown.default" />
  </article>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class MarkdownContent extends Vue {
  @Prop({ required: true }) contentPath: string
  markdown = ''

  created() {
    this.markdown = this.contentPath
  }
}
</script>

<style lang="scss">
h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--primary);
  margin-bottom: 16px;
}

@media (min-width: 1200px) and (min-height: 1000) {
  .text-article {
    font-size: 1.5rem;
  }
}
</style>
