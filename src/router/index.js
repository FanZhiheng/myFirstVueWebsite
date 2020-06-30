import Vue from 'vue'
import VueRouter from 'vue-router'
import Add from '../views/Add.vue'
import Lists from '../views/Lists.vue'
import Login from '../views/Login.vue'
import Name from '../views/NameInfo.vue'
import Personal from '../views/Personal.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'lists',
          name: 'lists',
          component: () => import(/* webpackChunkName: "list" */ '../views/Lists.vue')
        },
        {
          path: 'personal',
          name: 'personal',
          component: () => import(/* webpackChunkName: "personal" */ '../views/Personal.vue')
        }
      ]
    },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/add',
    name: 'Add',
    component: Add
  },
  // {
  //   path: '/name',
  //   name: 'Name',
  //   component: Name
  // },
  // {
  //   path: '/lists',
  //   name: 'Lists',
  //   component: Lists
  // },
  // {
  //   path: '/add',
  //   name: 'Add',
  //   component: Add
  // },
  // {
  //   path: '/personal',
  //   name: 'Personal',
  //   component: Personal
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes
})

export default router
