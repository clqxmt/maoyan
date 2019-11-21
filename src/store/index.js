import Vue from 'vue'
import Vuex from 'vuex'
import city from "./city"
import login from "./login"

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
      city,
      login
  }
})
