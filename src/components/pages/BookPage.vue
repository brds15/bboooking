<script lang="ts">
  import { defineComponent } from 'vue'
  import BookPayment from '@/components/templates/Book/BookPayment.vue'

  export default defineComponent({
    name: 'BookPage',
    components: { BookPayment }
  })
</script>

<template>
  <div class="book-page">
    <BookPayment />
  </div>
</template>

<style scoped lang="scss">
  .book-page {
    padding: 14px 0;
    width: 100%;
  }
</style>
