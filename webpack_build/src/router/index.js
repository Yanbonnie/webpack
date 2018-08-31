import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const User = ()=> import('@/components/user')

Vue.use(Router)

import '@/assets/css/index.scss';

export default new Router({
  mode:'history',
  base:'/bonnie',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/user',
      name:'User',
      component:User
    }
  ]
})
