<script lang="ts">
  import { defineComponent, reactive } from 'vue'
  import { z, ZodIssue } from 'zod'
  import ButtonPrimary from '@/components/atoms/buttons/ButtonPrimary.vue'
  import ButtonSecondary from '@/components/atoms/buttons/ButtonSecondary.vue'
  import ContainerCard from '@/components/atoms/containers/ContainerCard.vue'
  import HotelFields from '@/components/molecules/Hotel/HotelFields.vue'
  import useHotelStore from '@/services/stores/hotel'
  import { FieldProps, SearchData } from '@/types/hotels'

  const DEFAULT_MESSAGE = 'Campo obrigatório'

  const stringSchema = z.object({
    errorMessage: z.string(),
    value: z.string().min(1, { message: DEFAULT_MESSAGE })
  })

  const numberSchema = z.object({
    errorMessage: z.string(),
    value: z.number().min(1, { message: DEFAULT_MESSAGE })
  })

  const hotelFormStateSchema = z.object({
    checkinDate: stringSchema,
    checkoutDate: stringSchema,
    guests: numberSchema,
    location: stringSchema
  })

  export default defineComponent({
    name: 'HotelForm',
    components: { ButtonSecondary, ButtonPrimary, ContainerCard, HotelFields },
    setup() {
      const hotelStore = useHotelStore()
      const searchData: SearchData = reactive({
        checkinDate: {
          errorMessage: '',
          value: ''
        },
        checkoutDate: {
          errorMessage: '',
          value: ''
        },
        guests: {
          errorMessage: '',
          value: 1
        },
        location: {
          errorMessage: '',
          value: ''
        }
      })

      const updateErrors = (errors: ZodIssue[]) => {
        errors.forEach(error => {
          const [field] = error.path

          if (field && searchData[field as keyof SearchData]) {
            searchData[field as keyof SearchData].errorMessage = error.message
          }
        })
      }

      const validateForm = () => {
        const result = hotelFormStateSchema.safeParse(searchData)

        if (!result.success) {
          // eslint-disable-next-line
          console.log(result.error.errors)
          updateErrors(result.error.errors)
          return
        }
        // eslint-disable-next-line
        console.log('foii')
      }

      const handleSearchHotels = () => {
        validateForm()
        // eslint-disable-next-line
        console.log({
          location: searchData.location,
          checkinDate: searchData.checkinDate,
          checkoutDate: searchData.checkoutDate,
          guests: searchData.guests
        })

        hotelStore.loadHotelsByParams(searchData)
      }

      const handleUpdateState = <K extends keyof SearchData>(
        field: K,
        { value }: FieldProps<string | number>
      ) => {
        searchData[field].value = value
      }

      const handleResetSearch = () => {}

      return {
        searchData,
        handleResetSearch,
        handleSearchHotels,
        handleUpdateState
      }
    }
  })
</script>

<template>
  <ContainerCard classes="hotel-form">
    <h1 class="hotel-form-title">Encontre sua estadia</h1>
    <form @submit.prevent="handleSearchHotels">
      <HotelFields
        :checkinDate="searchData.checkinDate"
        :checkoutDate="searchData.checkoutDate"
        :guests="searchData.guests"
        :location="searchData.location"
        @updateState="handleUpdateState"
      />
      <div class="hotel-form-buttons">
        <ButtonSecondary text="Ver todos" type="button" @click.prevent="handleResetSearch" />
        <ButtonPrimary text="Buscar" type="submit" />
      </div>
    </form>
  </ContainerCard>
</template>

<style scoped lang="scss">
  .hotel-form {
    width: 100%;

    &-title {
      color: $black-900;
      font-size: 1.2rem;
      font-weight: 400;
      margin-bottom: 24px;
    }

    &-buttons {
      align-items: center;
      display: flex;
      gap: 4px;
      justify-content: center;
    }
  }
</style>
