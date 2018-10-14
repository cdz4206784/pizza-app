import Vue from 'vue'
import VueRouter from 'vue-router'  // 引入路由模块
import App from './App.vue'
import {routes} from './routes' // 引入路由js

Vue.use(VueRouter)  // Vue用一下

// 实例化router
const router = new VueRouter({
  routes,
  mode: 'history',
  // 路由滚动行为
  scrollBehavior(to,from,savedPosition){
    // return {x:0,y:100}
    // return {selector:'.btn'}

    // 浏览器后退/前进 按钮触发
    if(savedPosition){
      return savedPosition
    }else{
      return {x:0,y:0}
    }
  }
})

// 全局守卫
// router.beforeEach((to,from,next)=>{
//   // alert("还没有登录，请先登录！");
//   // next();
//   // console.log(to)

//   // 进行一个判断，如果是登录或注册 则正常next()
//   if(to.path == '/login' || to.path == '/register'){
//     next();
//   }else{
//     alert("还没有登录，请先登录！");
//     next('/login');
//   }
// })

// 全局后置钩子
// router.afterEach((to,from)=>{
//   // console.log(to,from)
//   alert("after each")
// })

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
