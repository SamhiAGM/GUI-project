import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import CartView from '../views/CartView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/product/:id', name: 'Product', component: ProductView, props: true },
  { path: '/cart', name: 'Cart', component: CartView },
  { path: '/checkout', name: 'Checkout', component: CheckoutView },
  { path: '/login', name: 'Login', component: LoginView },
  { path: '/signup', name: 'Signup', component: SignupView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
