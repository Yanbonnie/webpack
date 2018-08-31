
import HelloWorld from '@/components/HelloWorld'
const User = ()=> import('@/components/user')
import userData from './user';
export default [
         {
        path: '/',
        name: 'HelloWorld',
        title:"首页",
        component: HelloWorld
      },
      {
        path:'/user',
        name:'User',
        title:"用户中心",
        component:User,
        meta:{
            isLogin:true
        },
        redirect:{name:'UserIndex'},
        children:userData
      }
]