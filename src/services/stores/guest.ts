import { defineStore } from 'pinia'

const useGuestStore = defineStore({
  id: 'guest',
  state: () => ({
    notifications: [] as string[]
  }),
  getters: {
    notificationStatus: state => {
      if (state.notifications.length === 1) {
        return 'Uma notificação'
      }

      if (state.notifications.length) {
        return `${state.notifications.length} notificações`
      }

      return 'Sem notificações'
    }
  },
  actions: {
    handleRemoveNotification(index: number): void {
      this.notifications.splice(index, 1)
    },
    handleAddNotification(message: string): void {
      this.notifications.push(message)
    }
  }
})

export default useGuestStore
