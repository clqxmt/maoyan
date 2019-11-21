import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueTouch from "vue-touch"
import "@common/components"
import "@common/filter"
import "@utils/mock.js"
Vue.use(VueTouch,{name:"v-touch"})

Vue.config.productionTip = false
import UI from "./lib"
Vue.use(UI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
