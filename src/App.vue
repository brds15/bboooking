<template>
  <HeaderLayout />
  <ContentLayout />
</template>

<script lang="ts">
  import { Options, Vue } from 'vue-class-component'
  import ContentLayout from '@/components/layouts/ContentLayout.vue'
  import HeaderLayout from '@/components/layouts/HeaderLayout.vue'

  @Options({
    components: {
      HeaderLayout,
      ContentLayout
    }
  })
  export default class App extends Vue {}
</script>

<style lang="scss">
  @import '@/styles/default.scss';
</style>
