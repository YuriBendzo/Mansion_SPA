import { createRouter, createWebHashHistory } from 'vue-router'

import HomePage from '@/pages/HomePage'
import ShopPage from '@/pages/ShopPage'
import CartPage from '@/pages/CartPage'
import FavoritePage from '@/pages/FavoritePage'
import AboutPage from '@/pages/AboutPage'
import ContactsPage from '@/pages/ContactsPage'
import ProductPage from '@/pages/ProductPage'
import ProductEdit from '@/pages/ProductEdit'

import LoginPage from '@/pages/LoginPage'
import SignupPage from '@/pages/SignupPage'

const routes = [
  { path: '/', component: HomePage, name: 'home' },
  { path: '/shop', component: ShopPage, name: 'shop' },
  { path: '/product/:id?', component: ProductPage, name: 'productPage' },
  { path: '/cart', component: CartPage, name: 'cart' },
  { path: '/favorite', component: FavoritePage, name: 'favorite' },
  { path: '/about', component: AboutPage, name: 'about' },
  { path: '/contacts', component: ContactsPage, name: 'contacts' },
  { path: '/product/:id?', component: ProductEdit, name: 'productEdit' },

  { path: '/login', component: LoginPage, name: 'login' },
  { path: '/signup', component: SignupPage, name: 'signup' },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router