export interface HotelDate {
  capacityFilled: number
  date: string
}

export interface Hotel {
  about: string
  address: string
  capacity: number
  dates: HotelDate[]
  id: number
  name: string
  rate: number
  value: number
}

export interface FieldProps<T> {
  errorMessage?: string
  value: T
}

export interface SearchData {
  checkinDate: FieldProps<string>
  checkoutDate: FieldProps<string>
  guests: FieldProps<number>
  location: FieldProps<string>
}

export type AllOrders = 'asc' | 'desc' | ''

export type SortKeys = 'value' | 'rate'

export interface OrdernateValues<T> {
  key: SortKeys
  label: string
  value: T
}

export interface Ordenate {
  BY_PRICE_ASC: OrdernateValues<'asc'>
  BY_PRICE_DESC: OrdernateValues<'desc'>
  BY_RATE: OrdernateValues<'desc'>
}

export type ActiveOrderType = 'BY_PRICE_ASC' | 'BY_PRICE_DESC' | 'BY_RATE'
