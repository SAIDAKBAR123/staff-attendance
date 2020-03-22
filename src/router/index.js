import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import goTo from 'vuetify/es5/services/goto'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/requests',
    name: 'Requests',
    component: () => import('../views/Requests.vue')
  },
  {
    path: '/staff',
    name: 'Staff',
    component: () => import('../views/Staff.vue')
  },
  {
    path: '/department',
    name: 'Department',
    component: () => import('../views/Department.vue')
  },
  {
    path: '/reports',
    name: 'Reports',
    component: () => import('../views/Reports.vue')
  }
]

const router = new VueRouter({
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0

    if (to.hash) {
      scrollTo = to.hash
    } else if (savedPosition) {
      scrollTo = savedPosition.y
    }

    return goTo(scrollTo)
  },
  base: process.env.BASE_URL,
  routes
})

export default router
