import { defineStore } from 'pinia'
import { Hotel } from '@/types/hotels'
import MAX_ITEMS_TO_COMPARE from '@/constants/hotel'

const useHotelStore = defineStore({
  id: 'hotel',
  state: () => ({
    compareHotelList: [] as Hotel[],
    currentHotel: {} as Hotel,
    hotelList: [] as Hotel[]
  }),
  getters: {
    hotelById: state => (id: number) => {
      const result = state.hotelList.find(hotel => hotel.id === id)

      return result as Hotel
    },
    hotelByIdInCompareList: state => (id: number) => {
      const result = state.compareHotelList.find(hotel => hotel.id === id)

      return result as Hotel
    }
  },
  actions: {
    updateHotelList(list: Hotel[]): void {
      this.hotelList = list
    },
    updateCurrentHotel(id: number): void {
      this.currentHotel = this.hotelById(id)
    },
    updateCompareHotelList(id: number): void {
      if (this.compareHotelList.length === MAX_ITEMS_TO_COMPARE) return

      if (this.compareHotelList.length > 0) {
        const foundHotel = this.hotelByIdInCompareList(id)

        if (foundHotel) return
      }

      const newHotel = this.hotelById(id)

      this.compareHotelList.push(newHotel)
    },
    removeItemCompareHotelList(id: number): void {
      this.compareHotelList = this.compareHotelList.filter(hotel => hotel.id !== id)
    }
  }
})

export default useHotelStore
