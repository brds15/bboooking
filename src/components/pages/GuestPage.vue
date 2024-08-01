<script lang="ts">
  import { defineComponent } from 'vue'
  import GuestNotification from '@/components/templates/Guest/GuestNotification.vue'

  export default defineComponent({
    name: 'GuestPage',
    components: { GuestNotification }
  })
</script>

<template>
  <GuestNotification />
</template>

<style scoped lang="scss"></style>
