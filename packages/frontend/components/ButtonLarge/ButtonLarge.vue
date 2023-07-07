<template>
  <v-btn x-large depressed class="ButtonLarge">
    {{ label }}
  </v-btn>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class ButtonLarge extends Vue {
  @Prop({ default: '' })
  label: string
}
</script>

<style scoped lang="scss">
#__nuxt .v-btn.ButtonLarge {
  min-width: rem(320px) !important;
  height: 10px;
  background-color: var(--primary);
  color: white;
  font-style: normal;
  font-weight: 700;
  text-align: center;
  transition: all 0.2s ease;
  font-size: 1rem;
  letter-spacing: -0.03em;
  margin: 6px;
  border-radius: 5px !important;

  &:hover,
  &:focus {
    background-color: var(--primary-dark);
  }
}

@media (max-height: 900px) and (max-width: 500px) {
  #__nuxt .v-btn.ButtonLarge {
    min-width: 90% !important;
    background-color: var(--primary);
    color: white;
    font-style: normal;
    font-weight: 700;
    text-align: center;
    transition: all 0.2s ease;
    font-size: 1.0625rem;
    letter-spacing: -0.03em;
    margin: 6px;
    border-radius: 5px !important;

    &:hover,
    &:focus {
      background-color: var(--primary-dark);
    }
  }
}
</style>
