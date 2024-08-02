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
