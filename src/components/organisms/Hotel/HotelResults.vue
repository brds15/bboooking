<script lang="ts">
  import { defineComponent, onMounted } from 'vue'
  import useHotelStore from '@/services/stores/hotel'
  import ContainerCard from '@/components/atoms/containers/ContainerCard.vue'
  import HotelCard from '@/components/molecules/Hotel/HotelCard.vue'
  import HotelOrderFilters from '@/components/molecules/Hotel/HotelOrderFilters.vue'
  import { Skeleton } from 'vue-loading-skeleton'

  export default defineComponent({
    name: 'HotelResults',
    components: { Skeleton, HotelOrderFilters, HotelCard, ContainerCard },
    setup() {
      const hotelStore = useHotelStore()

      onMounted(async () => {
        hotelStore.loadHotels()
      })

      window.stores = { hotelStore }

      return {
        hotelStore
      }
    }
  })
</script>

<template>
  <div v-if="hotelStore.hotelList.length > 0" class="hotel-results">
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
    <ContainerCard classes="hotel-results-list">
      <HotelOrderFilters />
      <div v-if="hotelStore.activeHotelList.length > 0" class="hotel-results-list-content">
        <HotelCard v-for="item in hotelStore.activeHotelList" :key="item.id" :hotel="item" />
      </div>
      <div v-else class="hotel-results-list-content">
        <h1>Sem resultados para busca atual.</h1>
      </div>
    </ContainerCard>
  </div>
  <div class="hotel-results" v-else>
    <Skeleton height="500px" />
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
      }
    }

    &-list {
      &-content {
        align-items: stretch;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 16px;
      }
    }
  }
</style>
