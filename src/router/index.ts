import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import Home from '../views/home.vue'
import Menu from '../views/menu.vue'
import Cart from '../views/cart.vue'
import Checkout from '../views/checkout.vue'
import OrderSuccess from '../views/OrderSuccess.vue'

const routes: Array<RouteRecordRaw> = [
    { path: '/', component: Home },
    { path: '/menu', component: Menu },
    { path: '/cart', component: Cart },
    { path: '/checkout', component: Checkout },
    { path: '/order-success', component: OrderSuccess }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
