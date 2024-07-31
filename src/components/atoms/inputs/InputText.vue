<script lang="ts">
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    name: 'InputText',
    props: {
      debounce: {
        default: 600,
        required: false,
        type: Number
      },
      id: {
        required: true,
        type: String
      },
      name: {
        required: true,
        type: String
      },
      placeholder: {
        default: '',
        required: false,
        type: String
      },
      label: {
        default: '',
        required: true,
        type: String
      },
      disabled: {
        default: false,
        required: false,
        type: Boolean
      },
      value: {
        required: true,
        type: String
      },
      classes: {
        default: '',
        required: false,
        type: String
      }
    },
    emits: ['onChangeInput'],
    setup(props, emits) {
      const debounceId = ref()

      const changeInput = (e: Event) => {
        const target = <HTMLInputElement>e.target

        if (debounceId.value) {
          clearTimeout(debounceId.value)
        }

        debounceId.value = setTimeout(() => {
          emits.emit('onChangeInput', target.value)
        }, props.debounce)
      }

      return {
        changeInput,
        props
      }
    }
  })
</script>

<template>
  <div class="input-text form-group">
    <label :for="id">
      {{ label }}
      <input
        type="text"
        :class="[`form-control, ${classes}`]"
        :disabled="disabled"
        :id="id"
        :name="name"
        :placeholder="placeholder"
        :value="value"
        @input="changeInput"
      />
    </label>
  </div>
</template>

<style scoped lang="scss">
  @import "InputStyleBase";
</style>
