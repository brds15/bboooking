import { defineStore } from 'pinia'
import { Hotel } from '@/types/hotels'

const useHotelStore = defineStore({
  id: 'hotel',
  state: () => ({
    hotelList: [] as Hotel[]
  }),
  actions: {
    updateHotelList(list: Hotel[]): void {
      this.hotelList = list
    }
  }
})

export default useHotelStore
