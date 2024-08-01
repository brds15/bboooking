<script lang="ts">
  import { z, ZodIssue } from 'zod'
  import { defineComponent, reactive } from 'vue'
  import ButtonPrimary from '@/components/atoms/buttons/ButtonPrimary.vue'
  import ContainerCard from '@/components/atoms/containers/ContainerCard.vue'
  import HotelFields from '@/components/molecules/Hotel/HotelFields.vue'

  export interface FieldProps<T> {
    errorMessage?: string
    value: T
  }

  interface HotelFormState {
    checkinDate: FieldProps<string>
    checkoutDate: FieldProps<string>
    guests: FieldProps<number>
    location: FieldProps<string>
  }

  const StringSchema = z.object({
    errorMessage: z.string(),
    value: z.string().min(1, { message: 'Campo obrigatório' })
  })

  const NumberSchema = z.object({
    errorMessage: z.string(),
    value: z.number().min(1, { message: 'Campo obrigatório' })
  })

  const HotelFormStateSchema = z.object({
    checkinDate: StringSchema,
    checkoutDate: StringSchema,
    guests: NumberSchema,
    location: StringSchema
  })

  export default defineComponent({
    name: 'HotelForm',
    components: { ButtonPrimary, HotelFields, ContainerCard },
    setup() {
      const searchData: HotelFormState = reactive({
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

          if (field && searchData[field as keyof HotelFormState]) {
            searchData[field as keyof HotelFormState].errorMessage = error.message
          }
        })
      }

      const validateForm = () => {
        const result = HotelFormStateSchema.safeParse(searchData)

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
      }

      const handleUpdateState = <K extends keyof HotelFormState>(
        field: K,
        { value }: FieldProps<string | number>
      ) => {
        searchData[field].value = value
      }

      return {
        searchData,
        handleUpdateState,
        handleSearchHotels
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
      <ButtonPrimary text="Buscar" type="submit" />
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

    button {
      display: block;
      margin: 0 auto;
    }
  }
</style>
