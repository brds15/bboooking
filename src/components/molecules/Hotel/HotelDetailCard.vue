<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import ButtonPrimary from '@/components/atoms/buttons/ButtonPrimary.vue'
  import IconEye from '@/components/atoms/icons/IconEye.vue'
  import IconStar from '@/components/atoms/icons/IconStar.vue'

  export default defineComponent({
    name: 'HotelDetailCard',
    components: { IconStar, IconEye, ButtonPrimary },
    setup() {
      const showDetails = ref('')

      const handleIconEyeClick = () => {
        showDetails.value = showDetails.value === '' ? 'hidden' : ''
      }

      return {
        handleIconEyeClick,
        showDetails
      }
    }
  })
</script>

<template>
  <div class="hotel-detail-card">
    <div class="hotel-detail-card-header">
      <div class="hotel-detail-card-header-title">
        <IconEye @handleIconEyeClick="handleIconEyeClick" />
        <h5 class="hotel-detail-card-header-title-content">Hotel BRDS</h5>
      </div>
      <div class="hotel-detail-card-header-rate">
        <IconStar />
        <span>5.0</span>
      </div>
    </div>
    <div :class="['hotel-detail-card-second', showDetails]">
      <span class="hotel-detail-card-second-address"> Av. Paulista 1050 </span>
      <p class="hotel-detail-card-second-price">R$ 300<span>/noite</span></p>
    </div>
    <div :class="['hotel-detail-card-description', showDetails]">
      <h6 class="hotel-detail-card-description-title">Sobre o hotel</h6>
      <span class="hotel-detail-card-description-content">
        Situado no bairro agradável, a apenas 1 km do famoso Parque do Ibirapuera, o Gran Chevalier
        Hotel oferece acomodações elegantes com Wi-Fi e um buffet de café da manhã gratuitos. Os
        quartos tem uma decoração sofisticada e dispõem dar-condicionado e TV de LCD com canais a
        cabo. Além disso, cofres estão disponíveis na recepção 24h. O Gran Chevalier Hotel fornece
        um restaurante e um bar no local, bem como serviço de quarto. Você também poderá desfrutar
        de várias opções gastronômicas regionais e internacionais a menos de 2 minutos a pé.
      </span>
    </div>
    <div :class="['hotel-detail-card-capacity', showDetails]">
      <p class="hotel-detail-card-capacity-total">99 quartos disponíveis de 200</p>
    </div>
    <div :class="['hotel-detail-card-booking', showDetails]">
      <ButtonPrimary text="Reservar" />
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
