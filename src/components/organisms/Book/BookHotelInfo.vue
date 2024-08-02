<script lang="ts">
  import { defineComponent } from 'vue'
  import useHotelStore from '@/services/stores/hotel'
  import ContainerCard from '@/components/atoms/containers/ContainerCard.vue'
  import HotelDetailCard from '@/components/molecules/Hotel/HotelDetailCard.vue'

  export default defineComponent({
    name: 'BookHotelInfo',
    components: { ContainerCard, HotelDetailCard },
    props: {
      hotelId: {
        required: true,
        type: String
      }
    },
    setup(props) {
      const hotelStore = useHotelStore()

      return {
        hotelStore,
        props
      }
    }
  })
</script>

<template>
  <ContainerCard classes="book-hotel-info">
    <HotelDetailCard
      v-if="hotelStore.currentHotel?.name"
      :hotel="hotelStore.currentHotel"
      :onlyViewer="true"
    />
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
