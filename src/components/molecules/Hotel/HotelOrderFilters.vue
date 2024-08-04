<script lang="ts">
  import { defineComponent } from 'vue'
  import useHotelStore from '@/services/stores/hotel'
  import ButtonFilter from '@/components/atoms/buttons/ButtonFilter.vue'
  import { ORDENATE_BUTTONS } from '@/constants/hotel'
  import { ActiveOrderType, AllOrders, SortKeys } from '@/types/hotels'

  export default defineComponent({
    name: 'HotelOrderFilters',
    components: { ButtonFilter },
    computed: {
      ORDENATE_BUTTONS() {
        return ORDENATE_BUTTONS
      }
    },
    setup() {
      const hotelStore = useHotelStore()
      const sameOrderActive = (orderKeyType: ActiveOrderType) =>
        hotelStore.activeOrder === orderKeyType

      const buttonIsActive = (orderKeyType: ActiveOrderType) =>
        sameOrderActive(orderKeyType) ? 'active' : ''

      const handleOrderList = (
        order: AllOrders,
        sortKey: SortKeys,
        orderKeyType: ActiveOrderType
      ) => {
        if (sameOrderActive(orderKeyType)) {
          hotelStore.resetOrderHotelList()
          return
        }

        hotelStore.updateActiveOrder(orderKeyType)
        hotelStore.orderHotelListByKey(order, sortKey)
      }

      return {
        buttonIsActive,
        handleOrderList
      }
    }
  })
</script>

<template>
  <div class="hotel-filters">
    <ButtonFilter
      v-for="(button, orderKeyType) in ORDENATE_BUTTONS"
      :isActive="buttonIsActive(orderKeyType)"
      :key="orderKeyType"
      :text="button.label"
      @click="handleOrderList(button.value, button.key, orderKeyType)"
    />
  </div>
</template>

<style scoped lang="scss">
  .hotel-filters {
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    flex-wrap: nowrap;
    gap: 8px;
    padding: 0 0 18px;
    width: 100%;

    .button-filter {
      white-space: nowrap;
      word-break: keep-all;
    }
  }
</style>
