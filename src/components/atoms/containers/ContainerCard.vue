<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    props: {
      classes: {
        default: '',
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
  <div :class="['container-card', props.classes]">
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
