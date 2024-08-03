<script lang="ts">
  import { defineComponent, onBeforeMount, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import BookHotelInfo from '@/components/organisms/Book/BookHotelInfo.vue'
  import BookGuestInfo from '@/components/organisms/Book/BookGuestInfo.vue'
  import ROUTES from '@/constants/routes'
  import useHotelStore from '@/services/stores/hotel'

  export default defineComponent({
    name: 'BookPayment',
    computed: {
      ROUTES() {
        return ROUTES
      }
    },
    components: { BookHotelInfo, BookGuestInfo },
    setup() {
      const hotelStore = useHotelStore()
      const { params } = useRoute()
      const currentHotelId = ref()

      onBeforeMount(() => {
        const { hotelId } = params

        currentHotelId.value = hotelId ?? hotelStore.currentHotel.id
      })

      return {
        currentHotelId
      }
    }
  })
</script>

<template>
  <div v-if="currentHotelId" class="book-payment">
    <BookHotelInfo :hotelId="currentHotelId" />
    <BookGuestInfo />
  </div>
  <router-link v-else class="book-payment-error" :to="ROUTES.HOME">
    Selecione um hotel para processeguir com a reserva.
  </router-link>
</template>

<style scoped lang="scss">
  .book-payment {
    display: flex;
    flex-wrap: wrap;
    gap: 2%;
    justify-content: space-around;

    &-error {
      color: $black-800;
      display: flex;
      font-size: 1.4rem;
      font-weight: 600;
      justify-content: center;
      margin-top: 56px;
    }
  }
</style>
