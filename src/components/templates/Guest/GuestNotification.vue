<script lang="ts">
  import { defineComponent } from 'vue'
  import useGuestStore from '@/services/stores/guest'
  import ButtonSecondary from '@/components/atoms/buttons/ButtonSecondary.vue'

  export default defineComponent({
    name: 'GuestNotification',
    components: { ButtonSecondary },
    setup() {
      const guestStore = useGuestStore()

      return {
        guestStore
      }
    }
  })
</script>

<template>
  <div v-if="guestStore.notifications.length > 0" class="guest-notification">
    <div
      v-for="(message, index) in guestStore.notifications"
      class="guest-notification-item"
      :key="index"
    >
      <p>{{ message }}</p>
      <ButtonSecondary text="Excluir" @click="guestStore.handleRemoveNotification(index)" />
    </div>
  </div>
  <div v-else class="guest-notification">
    <p class="guest-notification-empty">Sem notificações no momento.</p>
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
      margin-bottom: 16px;
      padding: 16px;

      p {
        font-size: 0.8rem;
        font-weight: 600;
        margin: 0;
        padding: 0;
      }
    }

    &-empty {
      color: $black-800;
      display: flex;
      font-size: 1.4rem;
      font-weight: 600;
      justify-content: center;
      margin-top: 56px;
    }
  }
</style>
