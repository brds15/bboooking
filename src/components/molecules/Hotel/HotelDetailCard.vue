<script lang="ts">
  import { computed, defineComponent, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import getAvailableCapacity from '@/services/hotelServices'
  import useHotelStore from '@/services/stores/hotel'
  import ButtonPrimary from '@/components/atoms/buttons/ButtonPrimary.vue'
  import IconEye from '@/components/atoms/icons/IconEye.vue'
  import IconStar from '@/components/atoms/icons/IconStar.vue'
  import { ROUTES_NAME } from '@/constants/routes'

  export default defineComponent({
    name: 'HotelDetailCard',
    components: { IconStar, IconEye, ButtonPrimary },
    props: {
      onlyViewer: {
        default: false,
        required: false,
        type: Boolean
      }
    },
    setup(props) {
      const router = useRouter()
      const hotelStore = useHotelStore()
      const showDetails = ref('')
      const onlyForViewClasses = props.onlyViewer ? 'view' : ''

      const availableRooms = computed(() =>
        getAvailableCapacity(hotelStore.currentHotel.dates, hotelStore.currentHotel.capacity)
      )

      const handleIconEyeClick = () => {
        showDetails.value = showDetails.value === '' ? 'hidden' : ''
      }

      const handleRedirect = () => {
        if (router) {
          router.push({ name: ROUTES_NAME.BOOK, params: { hotelId: hotelStore.currentHotel.id } })
        }
      }

      return {
        availableRooms,
        hotelStore,
        onlyForViewClasses,
        props,
        showDetails,
        handleIconEyeClick,
        handleRedirect
      }
    }
  })
</script>

<template>
  <div v-if="hotelStore.currentHotel.name" class="hotel-detail-card">
    <div class="hotel-detail-card-header">
      <div class="hotel-detail-card-header-title">
        <IconEye v-if="!props.onlyViewer" @handleIconEyeClick="handleIconEyeClick" />
        <h5 class="hotel-detail-card-header-title-content">{{ hotelStore.currentHotel.name }}</h5>
      </div>
      <div class="hotel-detail-card-header-rate">
        <IconStar />
        <span>{{ hotelStore.currentHotel.rate }}</span>
      </div>
    </div>
    <div :class="['hotel-detail-card-second', showDetails]">
      <span class="hotel-detail-card-second-address"> {{ hotelStore.currentHotel.address }} </span>
      <p class="hotel-detail-card-second-price">
        R$ {{ hotelStore.currentHotel.value }}
        <span>/noite</span>
      </p>
    </div>
    <div :class="['hotel-detail-card-description', showDetails, onlyForViewClasses]">
      <h6 class="hotel-detail-card-description-title">Sobre o hotel</h6>
      <span class="hotel-detail-card-description-content">
        {{ hotelStore.currentHotel.about }}
      </span>
    </div>
    <div :class="['hotel-detail-card-capacity', showDetails]">
      <p class="hotel-detail-card-capacity-total">
        {{ availableRooms }} quartos disponíveis de {{ hotelStore.currentHotel.capacity }}
      </p>
    </div>
    <div :class="['hotel-detail-card-booking', showDetails]">
      <ButtonPrimary v-if="!onlyViewer" text="Reservar" @click="handleRedirect" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .hotel-detail-card {
    background-color: $white-200;
    border-radius: $border-radius-width;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 24px;
    width: 100%;

    &-header,
    &-second {
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    &-header {
      &-title {
        align-items: center;
        display: flex;
        flex-direction: row;
        gap: 8px;
        justify-content: flex-start;

        &-content {
          color: $black-900;
          font-size: 1.3rem;
          font-weight: 400;
        }
      }

      &-rate {
        align-items: center;
        display: flex;
        flex-direction: row;
        gap: 8px;
        justify-content: flex-start;

        > span {
          color: $black-900;
          font-size: 1.3rem;
          font-weight: 400;
        }
      }
    }

    &-second {
      &-address {
        font-size: 0.9rem;
      }

      &-price {
        color: $black-900;
        font-size: 1.1rem;
        font-weight: 600;
      }
    }

    &-capacity {
      display: flex;
      justify-content: center;

      &-total {
        font-size: 0.7rem;
        font-weight: 300;
      }
    }

    &-description {
      background-color: $gray-100;
      border-radius: $border-radius-width;
      max-height: 205px;
      overflow-y: auto;
      padding: 20px;

      &-content {
        font-size: 0.8rem;
      }
    }

    &-description.view {
      max-height: unset;
    }

    &-booking {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }

    &-second.hidden,
    &-capacity.hidden,
    &-description.hidden,
    &-booking.hidden {
      display: none;
    }

    @media (max-width: 992px) {
      gap: 8px;
      padding: 12px;

      &-header {
        &-title {
          gap: 4px;

          &-content {
            font-size: 0.8em;
          }
        }

        &-rate {
          > span {
            font-size: 0.8rem;
          }
        }
      }

      &-second {
        &-address {
          font-size: 0.7rem;
        }

        &-price {
          font-size: 0.8rem;

          > span {
            display: none;
          }
        }
      }

      &-description {
        border-radius: $border-radius-width;
        background-color: $gray-200;
        overflow-y: auto;
        padding: 16px;
      }
    }
  }
</style>
