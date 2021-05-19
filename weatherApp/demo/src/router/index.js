import Vue from 'vue'
import Router from 'vue-router'

import Father from '@/components/Father'
import Home from '@/components/Home'
import Detail from '@/components/Details'
import SetPage from '@/components/Set'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Father',
      component: Father,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Home
        },
        {
          path: '/detail',
          name: 'Detail',
          component: Detail
        },
        {
          path: '/setPage',
          name: 'SetPage',
          component: SetPage
        }
      ]
    },

  ]
})
