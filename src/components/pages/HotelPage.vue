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
      / 59% 39%;
    grid-gap: 2%;
    height: auto;
    overflow: hidden;
    padding: 14px;
    width: 100%;

    @media (max-width: 992px) {
      grid-template:
      'search search' 1fr
      'detail detail' 420px
      / 1fr 1fr;
    }
  }
</style>
