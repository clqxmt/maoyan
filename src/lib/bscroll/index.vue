<template>
  <div class="scroll_container">
    <div class="scroll_loading" v-if="flag">
      <i class="fa fa-spinner fa-pulse"></i>
    </div>
    <div class="wrapper" ref="wrapperBscroll">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "BScroll",
  data(){
      return{
          flag:false,
          
      }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapperBscroll, {
      probeType: 1, //非实时的触发,滚动优化
      pullDownRefresh:{
          threshold:50,//顶部下拉的距离
          
      },//下拉刷新
      //上拉加载更多
      pullUpLoad:true,
      tap:true,
      click:true
    });
  },
  methods: {
    handleScrollTo(y){
      //给城市页面中的滚动加动画
      this.scroll.scrollTo(0,y,300)
    },
    //调用better-scroll中的scroll事件
    handleScroll() {
        //pro是一个对象，里面是x,y y是下拉的距离
      this.scroll.on("scroll",(pro) => {
        if (pro.y > 50) {
            this.flag=true
        }
      })
    },
    //下拉刷新获取数据
    //callback是调用这个方法时传进来的回调函数
    handlepullingDown(callback){
        this.scroll.on("pullingDown",()=>{
            
            callback();
        })
    },
    //当数据请求成功后，需要执行的方法
    handleRefreshDown(){
        //refresh从新计算better-scroll
        this.scroll.refresh();

        //防止用户频繁下拉刷新做的防抖,当数据没有请求过来之前用户再次下拉不生效
        this.scroll.finishPullDown();
        setTimeout(()=>{
            this.flag=false;
        },1500)
    },

    //上拉加载更多
    handlepullingUp(callback){
        this.scroll.on("pullingUp",()=>{
            callback();
        })
    },
    //上拉请求数据
    handlefinishPullUp(){
        
        this.scroll.finishPullUp();
        this.scroll.refresh()
    }
  }
};
</script>

<style >
.wrapper,.scroll_container {
  height: 100%;
}
.scroll_loading{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 0.2083rem;
}

.scroll_loading i{
    font-size: 0.1667rem;
}
</style>