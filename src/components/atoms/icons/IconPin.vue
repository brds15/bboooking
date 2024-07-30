<template>
  <div
    aria-label="fixar"
    tabindex="{0}"
    :class="['icon-pin', props.classes]"
    @click="$emit('handleIconPinClick')"
    @keydown="handleKeyDown"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" viewBox="0 0 24 24">
      <path
        fill="#222c40"
        fillRule="evenodd"
        d="M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1l1-1v-7H19v-2c-1.66 0-3-1.34-3-3"
      ></path>
    </svg>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'IconPin',
    emits: ['handleIconPinClick'],
    setup(props, emitsEvents) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'p') {
          emitsEvents.emit('handleIconPinClick')
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
  .icon-pin {
    align-items: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
  }
</style>
