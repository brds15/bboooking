import { createWebHashHistory, createRouter } from 'vue-router'

import BookPage from '@/components/pages/BookPage.vue'
import HotelPage from '@/components/pages/HotelPage.vue'
import GuestPage from '@/components/pages/GuestPage.vue'
import ROUTES from '@/constants/routes'

const routes = [
  { path: ROUTES.BOOK, component: BookPage },
  { path: ROUTES.GUEST, component: GuestPage },
  { path: ROUTES.HOME, component: HotelPage }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
