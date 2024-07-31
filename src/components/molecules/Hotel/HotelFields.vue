<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import InputDate from '@/components/atoms/inputs/InputDate.vue'
  import InputNumber from '@/components/atoms/inputs/InputNumber.vue'
  import InputText from '@/components/atoms/inputs/InputText.vue'
  import { FieldProps } from '@/components/organisms/Hotel/HotelForm.vue'

  export default defineComponent({
    name: 'HotelFields',
    components: { InputDate, InputNumber, InputText },
    props: {
      checkinDate: {
        type: Object as PropType<FieldProps<string>>,
        required: true
      },
      checkoutDate: {
        type: Object as PropType<FieldProps<string>>,
        required: true
      },
      guests: {
        type: Object as PropType<FieldProps<number>>,
        required: true
      },
      location: {
        type: Object as PropType<FieldProps<string>>,
        required: true
      }
    },
    emits: ['updateState']
  })
</script>

<template>
  <h1>Fields</h1>
  <div class="hotel-fields">
    <div class="hotel-fields-content">
      <div class="hotel-fields-content-first">
        <InputText
          id="location"
          name="location"
          label="Local"
          placeholder="Digite o local"
          :error-message="location.errorMessage"
          :value="location.value"
          @onChangeInput="newValue => $emit('updateState', 'location', { value: newValue })"
        />
        <div class="hotel-fields-content-first-guests">
          <InputNumber
            id="guests"
            name="guests"
            max="10"
            label="Hóspedes"
            placeholder="Número de hóspedes"
            :error-message="guests.errorMessage"
            :value="guests.value"
            @onChangeInput="newValue => $emit('updateState', 'guests', { value: newValue })"
          />
        </div>
      </div>
      <div class="hotel-fields-content-second">
        <InputDate
          id="checkin"
          label="Data de Check-in"
          name="checkin"
          :error-message="checkinDate.errorMessage"
          :value="checkinDate.value"
          @onChangeInput="newValue => $emit('updateState', 'checkinDate', { value: newValue })"
        />
        <InputDate
          id="checkout"
          label="Data de Check-out"
          name="checkout"
          :error-message="checkoutDate.errorMessage"
          :value="checkoutDate.value"
          @onChangeInput="newValue => $emit('updateState', 'checkoutDate', { value: newValue })"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .hotel-fields {
    &-content {
      align-items: center;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      gap: 8px;
      width: 100%;

      &-first,
      &-second {
        align-items: flex-start;
        display: flex;
        flex-direction: row;
        gap: 8px;

        &-guests {
          align-items: center;
          display: flex;
          flex-direction: row;
          width: 96px;
        }
      }
    }

    @media (max-width: 992px) {
      flex-direction: column;

      &-content {
        flex-wrap: wrap;

        &-first,
        &-second {
          width: 100%;
        }
      }
    }
  }
</style>
