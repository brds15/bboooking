import axios from 'axios'

import { API_URL } from '@/constants/routes'

const apiInstance = axios.create({ baseURL: API_URL })

export default apiInstance
