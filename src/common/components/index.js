import TabBar from "./tabBar/index"
import Vue from "vue"


const UIComponents=[
    TabBar,
    
]

UIComponents.forEach((item)=>{
    Vue.component(item.name,item);
})

