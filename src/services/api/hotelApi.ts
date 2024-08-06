import apiInstance from '@/services/api/configuration/apiInstances'
import { Hotel, SearchData } from '@/types/hotels'

interface HotelsResponse extends Hotel {}

const PREFIX = '/hotels'

export default {
  findHotels() {
    return apiInstance.get<HotelsResponse[]>(`${PREFIX}`)
  },
  findHotelsByParams(params: SearchData) {
    return apiInstance.get<HotelsResponse[]>(`${PREFIX}`, {
      params: {
        name: params.location.value
      }
    })
  }
}
