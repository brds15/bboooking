<script lang="ts">
  import { defineComponent } from 'vue'
  import HotelDetailCard from '@/components/molecules/Hotel/HotelDetailCard.vue'

  export default defineComponent({
    name: 'HotelDetail',
    components: { HotelDetailCard }
  })
</script>

<template>
  <div class="hotel-detail">
    <div class="hotel-detail-image">
      <HotelDetailCard />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .hotel-detail {
    border-radius: $border-radius-width;
    grid-area: detail;
    height: 800px;
    overflow: hidden;

    &-image {
      background: url('~/src/assets/images/default-hotel.webp')
        no-repeat center;
      background-size: cover;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      height: 100%;
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
