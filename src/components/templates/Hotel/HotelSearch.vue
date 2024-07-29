<script lang="ts">
  import { defineComponent } from 'vue'
  import HotelForm from '@/components/organisms/Hotel/HotelForm.vue'
  import HotelResults from '@/components/organisms/Hotel/HotelResults.vue'

  export default defineComponent({
    name: 'HotelSearch',
    components: { HotelResults, HotelForm }
  })
</script>

<template>
  <div class="hotel-search">
    <h1>search</h1>
    <HotelForm />
    <HotelResults />
  </div>
</template>

<style scoped lang="scss">
  .hotel-search {
    grid-area: search;
  }
</style>
