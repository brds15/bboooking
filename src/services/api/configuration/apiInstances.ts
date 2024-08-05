import axios from 'axios'

import { API_URL } from '@/constants/routes'

const addDelay = (): Promise<void> =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, 1800)
  })

const apiInstance = axios.create({ baseURL: API_URL })

apiInstance.interceptors.response.use(async response => {
  if (process.env.NODE_ENV === 'development') {
    await addDelay()
  }

  return response
})

export default apiInstance
