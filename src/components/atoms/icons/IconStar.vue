<template>
  <div
    aria-label="avaliações"
    tabindex="{0}"
    :class="['icon-star', props.classes]"
    @click="$emit('handleIconStarClick')"
    @keydown="handleKeyDown"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24">
      <path
        fill="#ffd700"
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
      ></path>
    </svg>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'IconStar',
    emits: ['handleIconStarClick'],
    setup(props, emitsEvents) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 's') {
          emitsEvents.emit('handleIconStarClick')
        }
      }

      return {
        handleKeyDown,
        props
      }
    }
  })
</script>
