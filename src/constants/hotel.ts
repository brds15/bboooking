import { Ordenate } from '@/types/hotels'

const MAX_ITEMS_TO_COMPARE = 3

export const ORDENATE_BUTTONS: Ordenate = {
  BY_PRICE_ASC: {
    key: 'value',
    label: 'Menor preço',
    value: 'asc'
  },
  BY_PRICE_DESC: {
    key: 'value',
    label: 'Maior preço',
    value: 'desc'
  },
  BY_RATE: {
    key: 'rate',
    label: 'Melhor avaliado',
    value: 'desc'
  }
}

export default MAX_ITEMS_TO_COMPARE
