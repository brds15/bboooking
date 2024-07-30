<script lang="ts">
  import { defineComponent } from 'vue'
  import IconStar from '@/components/atoms/icons/IconStar.vue'
  import ButtonSecondary from '@/components/atoms/buttons/ButtonSecondary.vue'
  import IconPin from '@/components/atoms/icons/IconPin.vue'

  export default defineComponent({
    name: 'HotelCard',
    components: { IconPin, ButtonSecondary, IconStar },
    setup() {
      const handleIconPinClick = () => {
        // eslint-disable-next-line
        console.log('handleIconPinClick')
      }

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'p') {
          // eslint-disable-next-line
          console.log('handleIconPinClick')
        }
      }

      return {
        handleIconPinClick,
        handleKeyDown
      }
    }
  })
</script>

<template>
  <div class="hotel-card">
    <div class="hotel-card-header">
      <img src="../../../assets/images/default-hotel.webp" width="100" height="100" alt="hotel" />
      <div class="hotel-card-header-content">
        <div class="hotel-card-header-content-title">
          <h5>Hotel BRDS</h5>
        </div>
        <div class="hotel-card-header-content-rate">
          <IconStar />
          <span>5.0</span>
        </div>
        <p class="hotel-card-header-content-price">R$ 300</p>
      </div>
    </div>
    <div class="hotel-card-content">
      <span class="hotel-card-content-address"> Av. Paulista 1050 </span>
      <span class="hotel-card-content-capacity"> 99 quartos disponíveis de 200 </span>
    </div>
    <div class="hotel-card-footer">
      <a class="hotel-card-footer-pin" @click="handleIconPinClick" @keydown="handleKeyDown">
        <IconPin />
        <span>Comparar</span>
      </a>
      <ButtonSecondary text="Detalhes" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .hotel-card {
    background-color: $white-200;
    border-radius: $border-radius-width;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 8px;
    padding: 18px;
    width: 50%;

    &-header {
      display: flex;
      flex-direction: row;
      gap: 8px;
      justify-content: space-between;
      width: 100%;

      > img {
        border-radius: 16px;
      }

      &-content {
        flex: 1;
        display: flex;
        flex-direction: column;

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

      &-address, &-capacity {
        font-size: 0.8rem;
        font-weight: 300;
      }
    }

    &-footer {
      align-items: center;
      display: flex;
      flex-direction: row;
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
    }
  }
</style>
