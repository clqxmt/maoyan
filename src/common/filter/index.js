import Vue from "vue"

Vue.filter("toImg",(url,params)=>{
    url=url?url:'';
    return url.replace(/w\.h/,params);
})
