<script lang="ts">
  import { defineComponent, reactive } from 'vue'
  import ButtonPrimary from '@/components/atoms/buttons/ButtonPrimary.vue'
  import ContainerCard from '@/components/atoms/containers/ContainerCard.vue'
  import HotelFields from '@/components/molecules/Hotel/HotelFields.vue'

  export interface HotelFormState {
    checkinDate: string
    checkoutDate: string
    guests: number
    location: string
  }

  export default defineComponent({
    name: 'HotelForm',
    components: { ButtonPrimary, HotelFields, ContainerCard },
    setup() {
      const state: HotelFormState = reactive({
        checkinDate: '',
        checkoutDate: '',
        guests: 1,
        location: ''
      })

      const handleSearchHotels = () => {
        // eslint-disable-next-line
        console.log({
          location: state.location,
          checkinDate: state.checkinDate,
          checkoutDate: state.checkoutDate,
          guests: state.guests
        })
      }

      const handleUpdateState = <K extends keyof HotelFormState>(
        value: HotelFormState[K],
        field: K
      ) => {
        state[field] = value
      }

      return {
        state,
        handleUpdateState,
        handleSearchHotels
      }
    }
  })
</script>

<template>
  <ContainerCard classes="hotel-form">
    <form @submit.prevent="handleSearchHotels">
      <h1>Hotel Form</h1>
      <HotelFields
        :checkinDate="state.checkinDate"
        :checkoutDate="state.checkoutDate"
        :guests="state.guests"
        :location="state.location"
        @updateState="handleUpdateState"
      />
      <ButtonPrimary text="Buscar" type="submit" />
    </form>
  </ContainerCard>
</template>

<style scoped lang="scss">
  .hotel-form {
    width: 100%;

    button {
      display: block;
      margin: 0 auto;
    }
  }
</style>
