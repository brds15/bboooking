<script lang="ts">
  import { defineComponent } from 'vue'
  import InputDate from '@/components/atoms/inputs/InputDate.vue'
  import InputNumber from '@/components/atoms/inputs/InputNumber.vue'
  import InputText from '@/components/atoms/inputs/InputText.vue'

  export default defineComponent({
    name: 'HotelFields',
    components: { InputDate, InputNumber, InputText },
    props: {
      checkinDate: {
        type: String,
        required: true
      },
      checkoutDate: {
        type: String,
        required: true
      },
      guests: {
        type: Number,
        required: true
      },
      location: {
        type: String,
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
          :value="location"
          @onChangeInput="value => $emit('updateState', value, 'location')"
        />
        <div class="hotel-fields-content-first-guests">
          <InputNumber
            id="guests"
            name="guests"
            label="Hóspedes"
            placeholder="Número de hóspedes"
            :value="guests"
            @onChangeInput="value => $emit('updateState', value, 'guests')"
          />
        </div>
      </div>
      <div class="hotel-fields-content-second">
        <InputDate
          id="checkin"
          label="Data de Check-in"
          name="checkin"
          :value="checkinDate"
          @onChangeInput="value => $emit('updateState', value, 'checkinDate')"
        />
        <InputDate
          id="checkout"
          label="Data de Check-out"
          name="checkout"
          :value="checkoutDate"
          @onChangeInput="value => $emit('updateState', value, 'checkoutDate')"
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
