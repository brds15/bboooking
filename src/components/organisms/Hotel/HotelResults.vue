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
    <h1>Hotel results</h1>
    <ContainerCard classes="hotel-results-content">
      <HotelCard /><HotelCard /><HotelCard /><HotelCard /><HotelCard />
    </ContainerCard>
  </div>
</template>

<style scoped lang="scss">
  .hotel-results {
    width: 100%;

    &-content {
      align-items: center;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
      gap: 16px;
    }
  }
</style>
