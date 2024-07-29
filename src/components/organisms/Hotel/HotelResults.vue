<script lang="ts">
  import { defineComponent } from 'vue'
  import ContainerCard from '@/components/atoms/containers/ContainerCard.vue'

  export default defineComponent({
    name: 'HotelResults',
    components: { ContainerCard }
  })
</script>

<template>
  <div class="hotel-results">
    <ContainerCard>
      <h1>Hotel results</h1>
    </ContainerCard>
  </div>
</template>

<style scoped lang="scss">
  .hotel-results {
  }
</style>
