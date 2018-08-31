# webpack
webpack笔记

webpack_build
1.处理同一域名下面放不同项目，需要配置的地方有三个
【a】 config/index.js里面的build对象  assetsPublicPath:"/bonnie/"
【b】 router/index.js里面的路由对象添加 base:'/bonnie'
【c】 此处说的是nginx的服务器配置
      location / {
        try_files $uri $uri/ /bonnie/index.html;
      }
 以上三个步骤就可以实现在一个域名下面可以这样访问   localhost/bonnie/   访问项目，不会出现404
 
 2.当前路由高亮显示
 3.路由导航守卫 
 
 具体的实现方案可以直接运行项目更直观
