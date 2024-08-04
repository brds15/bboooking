<script lang="ts">
  import { defineComponent, PropType } from 'vue'

  export default defineComponent({
    name: 'ButtonFilter',
    props: {
      isActive: {
        default: '',
        required: false,
        type: String as PropType<'' | 'active'>
      },
      text: {
        type: String,
        required: true
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
  <button type="button" :class="['button-filter', props.isActive]">
    {{ props.text }}
  </button>
</template>

<style scoped lang="scss">
  .button-filter {
    background-color: $gray-100;
    border-radius: 0.5rem;
    border: 1px solid $white-200;
    color: $black-800;
    cursor: pointer;
    font-size: 0.7rem;
    font-weight: 500;
    line-height: 1.25rem;
    padding: 0.25rem 0.5rem;
    text-decoration: none;
  }

  .button-filter.active {
    background-color: $blue-300;
    color: $white-200;
  }
</style>
