<script lang="ts">
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    name: 'InputNumber',
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
      min: {
        default: '1',
        required: false,
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
        type: Number
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
        type="number"
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
  .form-group {
    margin-bottom: 15px;
    width: 100%;

    label {
      color: $black-800;
      display: block;
      font-size: 0.8rem;
      font-weight: 400;
      margin-bottom: 5px;
    }

    input {
      border-radius: 8px;
      border: 1px solid $white-200;
      box-sizing: border-box;
      font-size: 16px;
      padding: 12px;
      width: 100%;

      &:focus {
        border-color: $green-400;
        outline: none;
      }
    }
  }
</style>
