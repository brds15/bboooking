<script lang="ts">
  import { defineComponent, onMounted } from 'vue'
  import ContainerCard from '@/components/atoms/containers/ContainerCard.vue'
  import HotelCard from '@/components/molecules/Hotel/HotelCard.vue'
  import hotelApi from '@/services/api/hotelApi'

  export default defineComponent({
    name: 'HotelResults',
    components: { HotelCard, ContainerCard },
    setup() {
      onMounted(async () => {
        hotelApi
          .findHotels()
          .then(response => {
            // eslint-disable-next-line no-console
            console.log('response', response)
          })
          // eslint-disable-next-line no-console
          .catch(e => console.error('error::', e))
      })
    }
  })
</script>

<template>
  <div class="hotel-results">
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
