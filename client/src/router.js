import Vue from 'vue'
import Router from 'vue-router'
import Orders from './components/Orders.vue'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
// import Orders from './components/Orders'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'orders',
      component: Orders
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
    // {
    //   path: '/orders',
    //   name: 'orders',
    //   component: Orders
    // }
  ]
})
