<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import ButtonSecondary from '@/components/atoms/buttons/ButtonSecondary.vue'

  export default defineComponent({
    name: 'GuestNotification',
    components: { ButtonSecondary },
    setup() {
      const notifications = ref<string[]>(['teste 1', 'teste 2'])

      const handleRemoveNotification = (index: number) => {
        notifications.value.splice(index, 1)
      }

      return {
        notifications,
        handleRemoveNotification
      }
    }
  })
</script>

<template>
  <div class="guest-notification">
    <div v-for="(message, index) in notifications" :key="index" class="guest-notification-item">
      <p>{{ message }}</p>
      <ButtonSecondary text="Excluir" @click="handleRemoveNotification(index)"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .guest-notification {
    margin: 24px auto;
    width: 80vw;

    &-item {
      align-items: center;
      background-color: $gray-100;
      border-radius: 16px;
      border: 2px solid $black-800;
      display: flex;
      justify-content: space-between;
      margin-bottom: 12px;
      padding: 10px;

      p {
        font-size: 0.8rem;
        font-weight: 600;
        margin: 0;
        padding: 0;
      }
    }
  }
</style>
