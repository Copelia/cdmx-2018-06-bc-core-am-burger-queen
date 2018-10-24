import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Orders from './components/Orders'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders
    }
  ]
})
