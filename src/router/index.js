import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import search from '../views/About.vue'
import orgchart from '../components/orgchart'
import landing from '../components/landingPage'
import orgcharttemp from '../components/neworgchart'


Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
  children: [
    {
      path: '/',
      name: 'landing',
      component: landing
    },
    {
      path: '/search',
      name: 'search',
      component: search,
      children:[ ]
    },
    {
      path: 'orgchart',
      name: 'Orgchart',
      component: orgchart
    },
    {
      path: 'temporgchart',
      name: 'Orgcharttemp',
      component: orgcharttemp
    },
   ]
},

{
  path: '/about',
  name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import( /* webpackChunkName: "about" */ '@/components/ProfileTemplate/TemplateTwo.vue')
},

{
  path: '/profile/:id',
  name: 'EmployeeProfile',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import('@/components/EmployeeProfile/EmpProfileContainer.vue'),
  children: [
    {
      path: 'template-selection',
      name: 'TemplateSelection',
      component: () => import('@/components/EmployeeProfile/TemplateSelectionContainer.vue'),
    }
  ]
}
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router