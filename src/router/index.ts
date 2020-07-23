import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Account from '@/views/Account.vue'
import Labels from '@/views/Labels.vue'
import Statistics from '@/views/Statistics.vue'
import NotFound from '@/views/NotFound.vue'
import Layout from '@/components/Layout.vue'
import Nav from '@/components/Nav.vue'

Vue.component("Nav", Nav)
Vue.component("Layout", Layout)

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/account',
  },
  {
    path: '/account',
    component:Account
  },
  {
    path: '/labels',
    component:Labels
    },
  {
    path: '/statistics',
    component: Statistics
  },
  {
    path: "*",
    component:NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
