<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'HotelDetail',
    components: {}
  })
</script>

<template>
  <div class="hotel-detail">
      <h1>detail</h1>
  </div>
</template>

<style scoped lang="scss">
  .hotel-detail {
    background: url('https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') no-repeat center;
    background-size: cover;
    border-radius: $border-radius-width;
    grid-area: detail;
    height: 800px;
    padding: 24px;
  }
</style>
