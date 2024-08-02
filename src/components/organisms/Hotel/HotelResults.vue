<script lang="ts">
  import { defineComponent, onMounted } from 'vue'
  import useHotelStore from '@/services/stores/hotel'
  import ContainerCard from '@/components/atoms/containers/ContainerCard.vue'
  import HotelCard from '@/components/molecules/Hotel/HotelCard.vue'
  import hotelApi from '@/services/api/hotelApi'

  export default defineComponent({
    name: 'HotelResults',
    components: { HotelCard, ContainerCard },
    setup() {
      const hotelStore = useHotelStore()

      // eslint-disable-next-line no-console
      console.log('hotelStore::', hotelStore.hotelList)

      onMounted(async () => {
        hotelApi
          .findHotels()
          .then(response => {
            // eslint-disable-next-line no-console
            console.log('response', response)

            if (response.data?.length) hotelStore.updateHotelList(response.data)
          })
          // eslint-disable-next-line no-console
          .catch(e => console.error('error::', e))
      })

      window.stores = { hotelStore }

      return {
        hotelStore
      }
    }
  })
</script>

<template>
  <div class="hotel-results">
    <ContainerCard v-if="hotelStore.compareHotelList?.length > 0" classes="hotel-results-compare">
      <div class="hotel-results-compare-header">
        <h1 class="hotel-results-compare-header-title">Fixado para comparação</h1>
      </div>
      <div class="hotel-results-compare-content">
        <HotelCard
          v-for="item in hotelStore.compareHotelList"
          :hotel="item"
          :onlyViewer="true"
          :key="item.id"
        />
      </div>
    </ContainerCard>
    <ContainerCard classes="hotel-results-content">
      <HotelCard v-for="item in hotelStore.hotelList" :key="item.id" :hotel="item" />
    </ContainerCard>
  </div>
</template>

<style scoped lang="scss">
  .hotel-results {
    width: 100%;

    &-compare {
      background-color: $black-800;
      display: flex;
      flex-direction: column;
      margin-bottom: 16px;
      width: 100%;

      &-header {
        margin-bottom: 16px;

        &-title {
          color: $gray-100;
          font-size: 1.2rem;
          font-weight: 400;
        }
      }

      &-content {
        align-items: stretch;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        gap: 16px;
        justify-content: flex-start;
        overflow-x: scroll;
        padding: 0 8px;
      }
    }

    &-content {
      align-items: stretch;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
      gap: 16px;
    }
  }
</style>
