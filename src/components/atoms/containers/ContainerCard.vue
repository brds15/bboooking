<script setup lang="ts"></script>

<template>
  <div class="container-card">
    <slot />
  </div>
</template>

<style scoped lang="scss">
  .container-card {
    background-color: $gray-200;
    border-radius: $border-radius-width;
    padding: 24px;
  }
</style>
