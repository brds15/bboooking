import { HotelDate } from '@/types/hotels'

const getAvailableCapacity = (dates: HotelDate[], capacity: number): number => {
  const lastDate = dates[dates.length - 1]

  return capacity - (lastDate?.capacityFilled ?? 0)
}

export default getAvailableCapacity
