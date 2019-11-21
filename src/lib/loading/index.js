import LoadingView from "./index.vue"

import Vue from "vue"

class JSLoading{
    constructor(){
        let LoadingFn = Vue.extend(LoadingView);
        this.LoadingVm = new LoadingFn({
            el:document.createElement("div"),

        })
    }

    loadingMount(){
        document.body.appendChild(this.LoadingVm.$mount().$el)
    }
    loadingDestroy(){
        this.LoadingVm.$el.remove();
    }
}

export default new JSLoading()