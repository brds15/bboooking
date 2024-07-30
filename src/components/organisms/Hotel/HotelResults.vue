<script lang="ts">
  import { defineComponent } from 'vue'
  import ContainerCard from '@/components/atoms/containers/ContainerCard.vue'
  import HotelCard from '@/components/molecules/Hotel/HotelCard.vue'

  export default defineComponent({
    name: 'HotelResults',
    components: { HotelCard, ContainerCard }
  })
</script>

<template>
  <div class="hotel-results">
    <ContainerCard>
      <h1>Hotel results</h1>
      <HotelCard />
    </ContainerCard>
  </div>
</template>

<style scoped lang="scss">
  .hotel-results {
  }
</style>
