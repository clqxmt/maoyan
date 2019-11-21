<template>
  <div id="header">
    <v-touch class="left_icon" v-if="icon" @tap="handleBack()">
      <i class="iconfont" v-if="icon">&#xe606;</i>
    </v-touch>
    <h2>{{title}}</h2>
  </div>
</template>

<script>
export default {
    name:"Header",
    props:{
        title:{
            type:String,
            default:"猫眼电影"
        },
        icon:{
            type:Boolean,
            default:true
        }
    },
   
    methods:{
      handleBack(){
        this.$router.back();
      }
    }
};
</script>

<style>
#header{
    position: relative;
    width: 100%;
    height: 44px;
    background: #c33;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    z-index:10;
}
.left_icon{
    position: absolute;
    left:0.0833rem;
    font-size: 0.1667rem;
}
</style>