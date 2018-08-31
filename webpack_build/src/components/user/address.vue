<template>
    <div>我是地址管理页面{{abc}}
        <button @click="abc='我爱你'">修改</button>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                abc:123
            }
        },
        beforeRouteEnter(to, from, next) {
            // 可以在此处请求接口，通过vm指向
            next((vm)=>{   //vm指向vue实例
                console.log(vm)
            });
        },
        beforeRouteUpdate(to,from,next){  //更新了当前的$route,组件是复用的   这里没有组件复用，所以，监听不到变化
            console.log('更新了当前的$route,组件是复用的')
        },
        beforeRouteLeave (to, from, next) {
            let bol =  window.confirm("确认要退出页面？你所做的操作将不会保存");
            if(bol){  //确定离开
                next();                
            }else{
                return;
            }
        }
    }
</script>
