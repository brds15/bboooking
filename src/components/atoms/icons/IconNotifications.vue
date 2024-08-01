<template>
  <div
    aria-label="mapa"
    tabindex="{4}"
    :class="['icon icon-notifications', props.classes]"
    @click="$emit('handleIconNotificationsClick')"
    @keydown="handleKeyDown"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
      <path
        fill="#222c40"
        d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2m6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5z"
      ></path>
    </svg>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'IconNotifications',
    props: {
      classes: {
        default: '',
        type: String,
        required: false
      }
    },
    emits: ['handleIconNotificationsClick'],
    setup(props, emitsEvents) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'n') {
          emitsEvents.emit('handleIconNotificationsClick')
        }
      }

      return {
        handleKeyDown,
        props
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import 'IconBase';
</style>
