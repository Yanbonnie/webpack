import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

import '@/assets/css/index.scss';


import headerData from './header';
let router = new Router({
  mode:'history',
  base:'/bonnie',
  routes: headerData
    
})
router.beforeEach((to,from,next)=>{
  // console.log(router)
  // console.log(to)
  if(to.matched.some(item=>item.meta.isLogin)){
    console.log("需要登录")
  }else{
    console.log("不需要登录")
  }
  next();
})
export default router;