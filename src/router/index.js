import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import orgchart from '../components/orgchart'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    children: [{
      path: 'orgchart',
      name: 'Orgchart',
      component: orgchart
    }, ]
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '@/components/ProfileTemplate/temp2.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router