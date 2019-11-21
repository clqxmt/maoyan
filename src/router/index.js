import Vue from 'vue'
import VueRouter from 'vue-router'
import movie from "./movie"

Vue.use(VueRouter)


const router = new VueRouter({
  mode:"hash",
  routes:[
      {
          path:"/",
          redirect:"/movie"
      },
      movie,
      {
        path:"/cinema",
        name:"cinema",
        component:_=>import("@pages/cinema"),
        meta:{
          flag:true,
          isLogin:false
        }
      },
      {
        path:"/mine",
        name:"mine",
        component:_=>import("@pages/mine"),
        meta:{
          flag:false,
          isLogin:true
        }
      },
      {
        path:"/city",
        name:"city",
        component:_=>import("@pages/city"),
        meta:{
          flag:false,
          isLogin:false
        }
      },
      {
        path:"/detail/:id/:nm",
        name:"detail",
        props:true,
        component:_=>import("@pages/detail"),
        meta:{
          flag:false,
          isLogin:false
        }
      },
      {
        path:"/login",
        name:"login",
        component:_=>import("@pages/login"),
        meta:{
          flag:false,
          isLogin:false
        }
      },
      {
        path:"/search",
        name:"search",
        component:_=>import("@pages/search"),
        meta:{
          flag:false,
          isLogin:false
        }
      }
  ]
})


router.beforeEach((to,from,next)=>{
  if(to.path!="/login" && to.meta.isLogin){
    if(localStorage.getItem("token")){
      next();
    }else{
      next({name:"login",params:{to:to.path}})
    }
  }else{
    next();
  }
})
export default router
