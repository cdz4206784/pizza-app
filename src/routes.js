import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

// 二级路由
import Company from './components/about/Company'
import Team from './components/about/Team'
import Hr from './components/about/Hr'
import Contact from './components/about/Contact'

// 三级路由
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'

// 配置路由 数组   export 公开
export const routes = [
  // {path:'/', name:"homeLink", component:Home},
  {path:'/', name:"homeLink", components:{
    default: Home,  //默认显示Home组件
    // 以下三个为复用组件 <router-view name='company'></router-view>
    'company': Company,
    'team': Team,
    'hr': Hr
  }},
  {path:'/menu', name:"menuLink", component:Menu},
  {path:'/admin', name:"adminLink", component:Admin,
    //beforeEnter: (to, from, next) => {
      // 路由独享的守卫
      // alert("非登录状态，不能访问此页面");
      // next(false);
      // if(to.path == '/login' || to.path == '/register'){
      //   next();
      // }else{
      //   alert("还没有登录，请先登录");
      //   next('/login')
      // }
    //}
  },
  {path:'/about', name:"aboutLink", redirect:'/about/company', component:About, children:[
    {path:'/about/company', name:'companyLink', component:Company},
    {path:'/about/team', name:'teamLink', component:Team},
    {path:'/about/hr', name:'hrLink', component:Hr},
    {path:'/about/contact', name:'contactLink', redirect:'/about/contact/phone', component:Contact, children:[
      {path:'/about/contact/phone', name:'Phone', component:Phone},
      {path: '/about/contact/personname', name:'personName', component:PersonName}
    ]}
  ]},
  {path:'/login', name:"loginLink", component:Login},
  {path:'/register', name:"registerLink", component:Register},
  {path:'*', redirect:'/'}  //匹配不到以上，则跳转回首页
]
