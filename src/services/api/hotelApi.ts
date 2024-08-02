import apiInstance from '@/services/api/configuration/apiInstances'
import { Hotel } from '@/types/hotels'

interface HotelsResponse extends Hotel {}

const PREFIX = '/hotels'

export default {
  findHotels() {
    return apiInstance.get<HotelsResponse[]>(`${PREFIX}`)
  }
}
