<template>
  <div id="app">
    <div>
      <router-link :exact="item.name !== 'User' ? true : false "  :to="item.path" v-for="(item,index) in headerData" :key="index">{{item.title+item.name}}</router-link> 
    </div>
    <router-view/>
  </div>
</template>

<script>
import headerData from '@/router/header'
export default {
  name: 'App',
  data(){
    return{
      headerData
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
