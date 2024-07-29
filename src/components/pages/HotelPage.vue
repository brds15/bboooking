<script lang="ts">
  import { defineComponent } from 'vue'
  import HotelDetail from '@/components/templates/Hotel/HotelDetail.vue'
  import HotelSearch from '@/components/templates/Hotel/HotelSearch.vue'

  export default defineComponent({
    name: 'HotelPage',
    components: { HotelSearch, HotelDetail }
  })
</script>

<template>
  <div class="hotel-page">
    <HotelSearch />
    <HotelDetail />
  </div>
</template>

<style scoped lang="scss">
  .hotel-page {
    display: grid;
    grid-template:
      'search detail' 1fr
      'search detail' 1fr
      / 60% 40%;
    grid-gap: 12px;
    height: auto;
    overflow: hidden;
    width: 100%;
  }
</style>
