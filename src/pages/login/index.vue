<template>
  <div>
    <div id="login_content" class="page" v-if="$store.state.login.isShow">
      <Header title="登录" icon />
      <div class="login_username">
        <input type="text" placeholder="账户名/手机号/Email" @input="inputMutations({type:'username',e:$event})"/>
      </div>
      <div class="login_password">
        <input type="password" placeholder="请输入您的密码" @input="inputMutations({type:'password',e:$event})"/>
      </div>
      <div class="login_btn">
        <input type="submit" value="登录" @click="loginMutations()"/>
      </div>
      <div class="login_link">
        <v-touch tag="p" @tap="changeShow()">立即注册</v-touch>
        <p>找回密码</p>
      </div>
    </div>
    <Register v-if="!$store.state.login.isShow"/>
  </div>
</template>

<script>
import Register from "../register"
import {mapMutations} from "vuex"
export default {
  name: "login",
  components:{
      Register
  },
  data(){
      return{
          isShow:true
      }
  },
  methods:{
    
      handleReceive(){
          
          this.isShow=true
      },
      ...mapMutations({
          inputMutations:"login/inputMutations",
          loginMutations:"login/loginMutations",
          changeShow:"login/changeShow"
      }),
     
  }
};
</script>

<style >
#login_content {
  position: absolute;
  top: 0;
  bottom: 0;
  padding-bottom: 0.42rem;
  width: 100%;
}
#login_content .login_username,
#login_content .login_password {
  width: 100%;
  height: 0.33rem;
  border-bottom: 1px solid #ccc;
}
#login_content input {
  border: 0;
  height: 100%;
  width: 100%;
  font-size: 0.13rem;
  padding-left: 0.08rem;
}
#login_content .login_btn {
  width: 100%;
  height: 0.42rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.08rem;
}
#login_content .login_btn > input {
  width: 96%;
  height: 100%;
  background: #e54847;
  border-radius: 3px;
  border: none;
  display: block;
  color: white;
  font-size: 0.17rem;
}

#login_content .login_link {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.04rem 0.08rem;
  font-size: 0.13rem;
}
</style>