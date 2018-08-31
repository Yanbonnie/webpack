<template>
    <div class="user">
        <ul>
            <router-link v-for="(item,index) in userData" :to="{name:item.name}" :key="index" tag="li">{{item.title}}</router-link>
        </ul>
        <div style="height:50px;"></div>
        <router-view>
            
        </router-view>
    </div>
</template>

<script>
    import userData from '@/router/user';
    export default {
        name:'User',
        data(){
            return {
                userData
            }
        },
        beforeRouteUpdate(to,from,next){  //更新了当前的$route,组件是复用的    此处用监听路由也可以达到相同的效果。
            console.log('更新了当前的$route,组件是复用的');
            next();
        },
        watch:{
            $route(to,from){
                console.log(to)
            }
        }
    }
</script>