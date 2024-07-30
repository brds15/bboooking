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
    padding: 14px;
    width: 100%;

    @media (max-width: 992px) {
      grid-template:
      'search search' 1fr
      'detail detail' 1fr
      / 1fr 1fr;
    }
  }
</style>
