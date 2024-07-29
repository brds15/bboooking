<script lang="ts">
  import { defineComponent } from 'vue'
  import ContainerCard from '@/components/atoms/containers/ContainerCard.vue'

  export default defineComponent({
    name: 'HotelForm',
    components: { ContainerCard }
  })
</script>

<template>
  <div class="hotel-form">
    <ContainerCard>
      <h1>Hotel Form</h1>
    </ContainerCard>
  </div>
</template>

<style scoped lang="scss">
  .hotel-form {
  }
</style>
