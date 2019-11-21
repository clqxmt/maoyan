import tokenUtils from "@utils/token"
import { findUserApi } from "@api/login"
import VueRouter from "vue-router";
const crypto = require('crypto');
const router = new VueRouter();
import MessageBox from "@lib/messageBox/index.js"



let state = {
  
  username: "",
  password: "",
  
  isShow:true
}


let mutations = {


  //改变is控制登录页面的注册页面的显示
  changeShow(state) {
    state.isShow = !state.isShow;
  },

  //监听input中值
  inputMutations(state, params) {
    switch (params.type) {
      case "username":
        state.username = params.e.target.value;
        break;
      case "password":
        state.password = params.e.target.value;
        break;
    }
  },

  //登录
  loginMutations(state) {
    let data = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : []
    let hash = crypto.createHash("sha256").update(state.password).digest('hex');
    let has = false;
    for (var i = 0; i < data.length; i++) {
      if (localStorage.getItem("token")) {
        //alert("已登录");
        MessageBox({
          content: "已登录",
          confirm: function () {
            // router.back();
            router.push("/");
          }
        })
        return;
      } else if (state.username == data[i].username && hash == data[i].password) {
        let name = state.username;
        let token = tokenUtils.sendToken({ name });
        localStorage.setItem("token", token);
        this.token = token;
        //alert("登录成功");
        has = true;
        MessageBox({
          content: "登录成功",
          confirm: () => {
            router.back();
            
          }
        })
        break;
      }
    }
    if (!has) {
      MessageBox({
        content: "用户名或密码不存在",
      });
    }
  },

  //注册
  registerMutations(state) {
    let flag = true;
    let data = (localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : [])
    for (var i = 0; i < data.length; i++) {
      if (data[i].username === state.username) {
        MessageBox({
          content: "用户名已存在"
        })
        flag = false;
        break;
      }
    }
    if (flag) {

      let hash = crypto.createHash("sha256").update(state.password).digest('hex');
      data.push({
        username: state.username,
        password: hash
      })
      localStorage.setItem("user", JSON.stringify(data));
      MessageBox({
        content: "注册成功"
      })
      state.isShow=true;
    }
  }

}

export default {
  state,
  // actions,
  mutations,
  namespaced: true
}
