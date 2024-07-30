<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'ButtonPrimary',
    props: {
      text: {
        type: String,
        required: true
      },
      size: {
        default: 'regular',
        required: false,
        type: String
      }
    },
    setup(props) {
      return {
        props
      }
    }
  })
</script>

<template>
  <button :class="['button', props.size]" @click="$emit('click')">{{ props.text }}</button>
</template>

<style scoped lang="scss">
  .button {
    background-color: $green-400;
    border-radius: 0.5rem;
    color: white;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.25rem;
    padding: 0.5rem 1rem;
    text-decoration: none;

    &:hover {
      background-color: $green-500;
    }
  }
</style>
