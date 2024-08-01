<script lang="ts">
  import { defineComponent } from 'vue'
  import BookGuestInfo from '@/components/organisms/Book/BookGuestInfo.vue'
  import BookHotelInfo from '@/components/organisms/Book/BookHotelInfo.vue'

  export default defineComponent({
    name: 'BookPayment',
    components: { BookHotelInfo, BookGuestInfo }
  })
</script>

<template>
  <div class="book-payment">
    <BookHotelInfo />
    <BookGuestInfo />
  </div>
</template>

<style scoped lang="scss">
  .book-payment {
    display: flex;
    flex-wrap: wrap;
    gap: 2%;
    justify-content: space-around;
  }
</style>
