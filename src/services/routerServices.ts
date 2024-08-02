import { createWebHashHistory, createRouter } from 'vue-router'

import BookPage from '@/components/pages/BookPage.vue'
import HotelPage from '@/components/pages/HotelPage.vue'
import GuestPage from '@/components/pages/GuestPage.vue'
import ROUTES from '@/constants/routes'

const routes = [
  {
    component: BookPage,
    path: ROUTES.BOOK
  },
  {
    component: BookPage,
    name: 'book',
    path: `${ROUTES.BOOK}/:hotelId`
  },
  {
    component: GuestPage,
    path: ROUTES.GUEST
  },
  {
    component: HotelPage,
    path: ROUTES.HOME
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
