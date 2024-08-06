import { defineStore } from 'pinia'
import hotelApi from '@/services/api/hotelApi'
import MAX_ITEMS_TO_COMPARE from '@/constants/hotel'
import { ActiveOrderType, AllOrders, Hotel, SearchData, SortKeys } from '@/types/hotels'

const useHotelStore = defineStore({
  id: 'hotel',
  state: () => ({
    activeOrder: '' as ActiveOrderType | '',
    compareHotelList: [] as Hotel[],
    currentHotel: {} as Hotel,
    hotelList: [] as Hotel[],
    orderateHotelList: [] as Hotel[]
  }),
  getters: {
    activeHotelList: state =>
      state.orderateHotelList.length > 0 ? state.orderateHotelList : state.hotelList,
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
    },
    resetOrderHotelList(): void {
      this.orderateHotelList = []
      this.activeOrder = ''
    },
    updateActiveOrder(orderType: ActiveOrderType): void {
      this.activeOrder = orderType
    },
    orderHotelListByKey(order: AllOrders, key: SortKeys): void {
      const newList: Hotel[] = Object.assign(this.hotelList)

      this.orderateHotelList = newList.sort((a, b) => {
        const compare = a[key] - b[key]

        return order === 'asc' ? compare : -compare
      })
    },
    loadHotels(): void {
      hotelApi
        .findHotels()
        .then(response => {
          if (response.data?.length) this.updateHotelList(response.data)
        })
        // eslint-disable-next-line no-console
        .catch(e => console.error('error::', e))
    },
    loadHotelsByParams(params: SearchData): void {
      hotelApi
        .findHotelsByParams(params)
        .then(response => {
          if (response.data?.length) this.updateHotelList(response.data)
        })
        // eslint-disable-next-line no-console
        .catch(e => console.error('error::', e))
    }
  }
})

export default useHotelStore
