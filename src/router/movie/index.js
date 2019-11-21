export default{
    path:"/movie",
    name:"movie",
    component:_=>import("@pages/movie"),
    meta:{
        flag:true,
        isLogin:false
    },
    children:[
        {
            path:"/movie",
            redirect:"/movie/movienow",
        },
        {
            path:"movienow",
            name:"movieNow",
            component:_=>import("@components/movienow"),
            meta:{
                flag:true,
                isLogin:false
            },
        },
        {
            path:"moviecoming",
            name:"movieComing",
            component:_=>import("@components/moviecoming"),
            meta:{
                flag:true,
                isLogin:false
            },
        }
    ]
}