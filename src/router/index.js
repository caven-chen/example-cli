/*
 * @Author: Caven
 * @Date: 2019-06-29 12:30:36
 * @Last Modified by: Caven
 * @Last Modified time: 2019-06-29 13:26:50
 */

import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views'
import Home from '../views/home'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home
        }
      ]
    }
  ]
})

export default router
