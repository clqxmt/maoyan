import Messagebox from "./index.vue"
import Vue from "vue"


export default (()=>{
    let defaultVal={
        title:"提示信息",
        content:"内容",
        confirm:function(){}
    }

    let MessageBoxFn= Vue.extend(Messagebox);

    return (options)=>{
        for(var key in options){
            defaultVal[key]=options[key]
        }


        let messageBoxVm=new MessageBoxFn({
            el:document.createElement("div"),
            data:{
                title:defaultVal.title,
                content:defaultVal.content
            },
            methods:{
                handleOk(){
                    defaultVal.confirm && defaultVal.confirm();
                    document.body.removeChild(messageBoxVm.$mount().$el);
                },
            }
        })

        document.body.appendChild(messageBoxVm.$mount().$el);
    }
})()
