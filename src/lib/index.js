
import Header from "./header/index"
import BScroll from "./bscroll"

const UIComponents=[
    Header,
    BScroll
]

const install=(Vue)=>{
    UIComponents.forEach((item)=>{
        Vue.component(item.name,item)
    })
}

export default{
    install,
    Header,
    BScroll
}