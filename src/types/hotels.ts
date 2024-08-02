export interface Date {
  capacityFilled: number
  date: string
}

export interface Hotel {
  about: string
  address: string
  capacity: number
  dates: Date[]
  id: number
  name: string
  rate: number
  value: number
}
