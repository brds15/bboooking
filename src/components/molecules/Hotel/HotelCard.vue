<script lang="ts">
  import { computed, defineComponent } from 'vue'
  import useHotelStore from '@/services/stores/hotel'
  import getAvailableCapacity from '@/services/hotelServices'
  import MAX_ITEMS_TO_COMPARE from '@/constants/hotel'
  import ButtonPrimary from '@/components/atoms/buttons/ButtonPrimary.vue'
  import ButtonSecondary from '@/components/atoms/buttons/ButtonSecondary.vue'
  import IconPin from '@/components/atoms/icons/IconPin.vue'
  import IconStar from '@/components/atoms/icons/IconStar.vue'
  import { Hotel } from '@/types/hotels'

  export default defineComponent({
    name: 'HotelCard',
    components: { ButtonPrimary, IconPin, ButtonSecondary, IconStar },
    props: {
      hotel: {
        type: Object as () => Hotel,
        required: true
      },
      onlyViewer: {
        default: false,
        required: false,
        type: Boolean
      }
    },
    setup(props) {
      const hotelStore = useHotelStore()

      const availableRooms = computed(() =>
        getAvailableCapacity(props.hotel.dates, props.hotel.capacity)
      )

      const handleIconPinClick = (hotelId: number) => {
        hotelStore.updateCompareHotelList(hotelId)
      }

      const handleKeyDown = (e: KeyboardEvent, hotelId: number) => {
        if (e.key === 'p') {
          handleIconPinClick(hotelId)
        }
      }

      const canCompare = () => !props.onlyViewer && hotelStore.compareHotelList.length < MAX_ITEMS_TO_COMPARE

      return {
        availableRooms,
        hotelStore,
        props,
        canCompare,
        handleIconPinClick,
        handleKeyDown
      }
    }
  })
</script>

<template>
  <div class="hotel-card">
    <div class="hotel-card-header">
      <img src="../../../assets/images/default-hotel.webp" alt="hotel" />
      <div class="hotel-card-header-content">
        <div class="hotel-card-header-content-title">
          <h5>{{ props.hotel.name }}</h5>
        </div>
        <div class="hotel-card-header-content-rate">
          <IconStar />
          <span>{{ props.hotel.rate }}</span>
        </div>
        <p class="hotel-card-header-content-price">R$ {{ props.hotel.value }}</p>
      </div>
    </div>
    <div class="hotel-card-content">
      <span class="hotel-card-content-address"> {{ props.hotel.address }} </span>
      <span class="hotel-card-content-capacity"> {{ availableRooms }} quartos </span>
    </div>
    <div class="hotel-card-footer">
      <a
        v-if="canCompare()"
        class="hotel-card-footer-pin"
        @click="handleIconPinClick(props.hotel.id)"
        @keydown="e => handleKeyDown(e, props.hotel.id)"
      >
        <IconPin />
        <span>Comparar</span>
      </a>
      <ButtonPrimary
        v-else-if="props.onlyViewer"
        text="Remover"
        @click="hotelStore.removeItemCompareHotelList(props.hotel.id)"
      />
      <ButtonSecondary @click="hotelStore.updateCurrentHotel(props.hotel.id)" text="Detalhes" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .hotel-card {
    background-color: $white-200;
    border-radius: $border-radius-width;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-wrap: nowrap;
    gap: 8px;
    justify-content: space-between;
    max-width: 50%;
    min-width: 264px;
    overflow: hidden;
    padding: 18px;
    width: 48%;

    &-header {
      display: flex;
      flex-direction: row;
      gap: 8px;
      justify-content: space-between;
      width: 100%;

      > img {
        border-radius: 16px;
        height: 100px;
        width: 100px;
      }

      &-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        &-title {
          > h5 {
            color: $black-900;
            font-size: 1.1rem;
            font-weight: 400;
          }
        }

        &-rate {
          align-items: center;
          display: flex;
          flex-direction: row;
          font-size: 0.6rem;
          justify-content: flex-start;
        }

        &-price {
          font-size: 0.9rem;
          font-weight: 600;
        }
      }
    }

    &-content {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      &-address,
      &-capacity {
        font-size: 0.8rem;
        font-weight: 300;
      }
    }

    &-footer {
      align-items: center;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 8px;

      &-pin {
        align-items: center;
        cursor: pointer;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        text-decoration: none;

        > span {
          font-size: 0.8rem;
          font-weight: 500;
          line-height: 1.25rem;
          padding: 4px 8px;
        }

        &:hover {
          background-color: $gray-100;
          border-radius: 8px;
          padding: 1px;
        }
      }
    }

    @media (max-width: 992px) {
      padding: 12px;
      max-width: unset;

      &-header {
        flex-direction: column;
        justify-content: center;
        align-items: center;

        > img {
          height: unset;
          width: 100%;
        }

        &-content {
          width: 100%;
        }
      }

      &-content {
        width: 100%;
      }

      &-footer {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>
