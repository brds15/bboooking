<script lang="ts">
  import { defineComponent } from 'vue'
  import ContainerCard from '@/components/atoms/containers/ContainerCard.vue'
  import HotelDetailCard from '@/components/molecules/Hotel/HotelDetailCard.vue'

  export default defineComponent({
    name: 'BookHotelInfo',
    components: { ContainerCard, HotelDetailCard }
  })
</script>

<template>
  <ContainerCard classes="book-hotel-info">
    <HotelDetailCard :onlyViewer="true" />
  </ContainerCard>
</template>

<style scoped lang="scss">
  .book-hotel-info {
    width: 49%;

    @media (max-width: 992px) {
      width: 100%;
    }
  }
</style>
