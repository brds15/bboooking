<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'LabelInputError',
    props: {
      text: {
        type: String,
        required: false
      }
    }
  })
</script>

<template>
  <span class="label-input-error" v-if="!!text">{{ text }}</span>
</template>

<style scoped lang="scss">
  .label-input-error {
    color: $red-200;
    font-size: 0.6rem;
    font-weight: 600;
  }
</style>
