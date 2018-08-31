const Index = ()=> import('@/components/user/index.vue')
const Address = ()=> import('@/components/user/address')
const Order = ()=> import('@/components/user/order')
export default [
    {
            path:'index',
            name:'UserIndex',
            component:Index,
            title:'个人中心'
        },
        {
            path:'address',
            name:'Address',
            component:Address,
            title:'地址管理'
        },
        {
            path:'order',
            name:'Order',
            title:'订单管理',
            component:Order
    }
]