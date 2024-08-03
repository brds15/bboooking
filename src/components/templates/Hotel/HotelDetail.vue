<script lang="ts">
  import { defineComponent } from 'vue'
  import HotelDetailCard from '@/components/molecules/Hotel/HotelDetailCard.vue'
  import useHotelStore from '@/services/stores/hotel'

  export default defineComponent({
    name: 'HotelDetail',
    components: { HotelDetailCard },
    setup() {
      const hotelStore = useHotelStore()

      return {
        hotelStore
      }
    }
  })
</script>

<template>
  <div class="hotel-detail">
    <div class="hotel-detail-image">
      <HotelDetailCard v-if="hotelStore.currentHotel" :hotel="hotelStore.currentHotel" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .hotel-detail {
    border-radius: $border-radius-width;
    box-shadow: $box-shadow-md;
    grid-area: detail;
    height: 800px;
    overflow: hidden;

    &-image {
      background: url('~/src/assets/images/default-hotel.webp') no-repeat center;
      background-size: cover;
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: flex-end;
      padding: 24px;
      width: 100%;
    }

    @media (max-width: 992px) {
      height: 100%;

      &-image {
        height: unset;
        padding: 12px;
      }
    }
  }
</style>
