<script lang="ts">
  import { defineComponent, reactive } from 'vue'
  import { z, ZodIssue } from 'zod'
  import ButtonPrimary from '@/components/atoms/buttons/ButtonPrimary.vue'
  import ContainerCard from '@/components/atoms/containers/ContainerCard.vue'
  import InputText from '@/components/atoms/inputs/InputText.vue'
  import InputEmail from '@/components/atoms/inputs/InputEmail.vue'

  interface Field {
    errorMessage?: string
    value: string
  }

  interface GuestData {
    cardCode: Field
    cardExpirationDate: Field
    cardNumber: Field
    email: Field
    name: Field
  }

  const guestDataSchema = z.object({
    name: z.string().min(1, { message: 'Nome obrigatório' }),
    email: z.string().email({ message: 'E-mail inválido' }),
    cardNumber: z.string().min(8, { message: 'Cartão inválido' }),
    cardExpirationDate: z.string().min(4, { message: 'Data inválida' }),
    cardCode: z.string().min(3, { message: 'CVV inválido' })
  })

  export default defineComponent({
    name: 'BookGuestInfo',
    components: {
      ButtonPrimary,
      ContainerCard,
      InputEmail,
      InputText
    },
    setup() {
      const guestData = reactive<GuestData>({
        cardCode: { errorMessage: '', value: '' },
        cardExpirationDate: { errorMessage: '', value: '' },
        cardNumber: { errorMessage: '', value: '' },
        email: { errorMessage: '', value: '' },
        name: { errorMessage: '', value: '' }
      })

      const updateErrors = (errors: ZodIssue[]) => {
        errors.forEach(error => {
          const [field] = error.path

          if (field && guestData[field as keyof GuestData]) {
            guestData[field as keyof GuestData].errorMessage = error.message
          }
        })
      }

      const validateForm = () => {
        const formData = {
          name: guestData.name.value,
          email: guestData.email.value,
          cardNumber: guestData.cardNumber.value,
          cardExpirationDate: guestData.cardExpirationDate.value,
          cardCode: guestData.cardCode.value
        }

        const result = guestDataSchema.safeParse(formData)

        if (!result.success) {
          updateErrors(result.error.errors)
          return false
        }

        return true
      }

      const handleSubmit = () => {
        // eslint-disable-next-line
        console.log('dados de reserva::', guestData)

        validateForm()
      }

      const handleUpdateState = <K extends keyof GuestData>(newValue: string, field: K) => {
        guestData[field].value = newValue
      }

      return {
        guestData,
        handleSubmit,
        handleUpdateState
      }
    }
  })
</script>

<template>
  <ContainerCard classes="book-guest-info">
    <h1 class="book-guest-info-title">Pagamento</h1>
    <form @submit.prevent="handleSubmit">
      <InputText
        id="name"
        label="Nome"
        name="name"
        placeholder="Nome completo"
        :errorMessage="guestData.name.errorMessage"
        :value="guestData.name.value"
        @onChangeInput="value => handleUpdateState(value, 'name')"
      />
      <InputEmail
        id="email"
        label="E-mail"
        name="email"
        placeholder="E-mail"
        :errorMessage="guestData.email.errorMessage"
        :value="guestData.email.value"
        @onChangeInput="value => handleUpdateState(value, 'email')"
      />
      <InputText
        id="cardNumber"
        label="Número do cartão"
        name="cardNumber"
        placeholder="00000000"
        :errorMessage="guestData.cardNumber.errorMessage"
        :value="guestData.cardNumber.value"
        @onChangeInput="value => handleUpdateState(value, 'cardNumber')"
      />
      <InputText
        id="cardExpirationDate"
        label="Data de Validade"
        name="cardExpirationDate"
        :errorMessage="guestData.cardExpirationDate.errorMessage"
        :value="guestData.cardExpirationDate.value"
        @onChangeInput="value => handleUpdateState(value, 'cardExpirationDate')"
      />
      <InputText
        id="cardCode"
        label="Código CVV"
        name="cardCode"
        :errorMessage="guestData.cardCode.errorMessage"
        :value="guestData.cardCode.value"
        @onChangeInput="value => handleUpdateState(value, 'cardCode')"
      />
      <div class="book-guest-info-footer">
        <ButtonPrimary type="submit" text="Reservar" />
      </div>
    </form>
  </ContainerCard>
</template>

<style scoped lang="scss">
  .book-guest-info {
    background-color: $white-200;
    border-radius: $border-radius-width;
    display: flex;
    flex-direction: column;
    min-width: 360px;
    width: 49%;

    &-title {
      margin-bottom: 16px;
    }

    &-footer {
      button {
        display: block;
        margin: 0 auto;
      }
    }

    @media (max-width: 992px) {
      margin-top: 24px;
      width: 100%;
    }
  }
</style>
