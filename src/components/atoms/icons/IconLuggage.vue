<template>
  <div
    aria-label="reserva"
    tabindex="{3}"
    :class="['icon icon-luggage', props.classes]"
    @click="$emit('handleIconLuggageClick')"
    @keydown="handleKeyDown"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" viewBox="0 0 14 14">
      <g fill="none" stroke="#222c40" stroke-linecap="round" stroke-linejoin="round">
        <rect width="13" height="9.5" x=".5" y="4" rx="2"></rect>
        <path d="M4 13.5V4m6 9.5V4M4.5 4a2.5 2.5 0 0 1 5 0"></path>
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'IconLuggage',
    props: {
      classes: {
        default: '',
        type: String,
        required: false
      }
    },
    emits: ['handleIconLuggageClick'],
    setup(props, emitsEvents) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'r') {
          emitsEvents.emit('handleIconLuggageClick')
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
