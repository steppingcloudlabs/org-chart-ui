import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import orgchart from '../components/orgchart'
import orgchart1 from '../components/oldOrg'
import orgchart2 from '../components/test'
import dynamiccards from '../components/dynamiccards'
import listView from '../components/updates/mainpage'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
  children: [{
    path: 'orgchart',
    name: 'Orgchart',
    component: orgchart
  },
  {
    path: 'orgchart1',
    name: 'Orgchart1',
    component: orgchart1
  },
  {
    path: 'orgchart2',
    name: 'Orgchart2',
    component: orgchart2
  },
  {
    path: 'plan',
    name: 'plan',
    component: dynamiccards,
     meta: {
    hideAppBar: true
  }
  },
  {
    path: 'detailplan',
    name: 'detailplan',
    component: listView
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
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router