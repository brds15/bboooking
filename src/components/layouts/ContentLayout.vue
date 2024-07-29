<script setup lang="ts">
  import ContainerCard from '@/components/atoms/containers/ContainerCard.vue'
</script>

<template>
  <div class="content">
    <ContainerCard>
      <h1>content</h1>
    </ContainerCard>

    <ContainerCard>
      <h1>content</h1>
    </ContainerCard>
  </div>
</template>

<style lang="scss" scoped>
  .content {
    border: 2px solid red;
    overflow-y: auto;
  }
</style>
