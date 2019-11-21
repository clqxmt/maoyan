<template>
  <div class="page">
    <Header title="影院" />
    <div id="cinema_content">
      <div class="cinema_nav">
        <ul>
          <li>
            <span>全城</span>
            <i class="iconfont">&#xe627;</i>
          </li>
          <li>
            <span>全城</span>
            <i class="iconfont">&#xe627;</i>
          </li>
          <li>
            <span>全城</span>
            <i class="iconfont">&#xe627;</i>
          </li>
        </ul>
      </div>
    <BScroll>
      <div>
          <div class="cinema_body">
        <div class="cinema_body_detail" v-for="(item) in cinemaList" :key="item.id">
          <div class="cinema_body_detail_name">
            <span>{{item.nm}}</span>
            <span class="cinema_price">{{item.sellPrice}}元起</span>
          </div>
          <div class="cinema_body_detail_address">
            <span>{{item.addr}}</span>
            <span>1763.5km</span>
          </div>
          <div class="cinema_body_detail_card">
            <div>小吃卡</div>
            <div v-if="item.tag.vipTag">{{item.tag.vipTag}}</div>
          </div>
        </div>
      </div>
      </div>
    </BScroll>
    </div>
  </div>
</template>

<script>
import {cinemaApi} from "@api/cinema"
export default {
    name:"cinema",
    data(){
        return{
            cinemaList:[],
            typeId:1,
        }
    },
    created(){
        this.requestData(this.$store.state.city.cityId)
    },
    methods:{
        async requestData(cityId){
            let data =await cinemaApi(cityId)
            console.log(data.data.cinemas);
            this.cinemaList=data.data.cinemas;
            sessionStorage.setItem("cinemaList",JSON.stringify(data.data.cinemas))
        }
    }
};
</script>

<style >
#cinema_content {
  position: absolute;
  width: 100%;
  height: 100%;
  
}
#cinema_content .cinema_nav {
  width: 100%;
  position: fixed;
  height: 0.38rem;
  border-bottom: 1px solid #ccc;
  z-index: 2;
  background: #fff;
}
#cinema_content .cinema_nav ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
#cinema_content .cinema_nav ul li {
  width: 100%;
  text-align: center;
  font-size: 0.13rem;
}

/*cinema_body*/

.cinema_body {
  position: relative;
  top: 0.38rem;
  left: 0;
  padding-left: 0.17rem;
  padding-right: 0.17rem;
  padding-bottom: 0.42rem;
}
.cinema_body .cinema_body_detail {
  margin-top: 0.17rem;
  border-bottom: 1px solid #ccc;
  background: #fff;
}
.cinema_body .cinema_body_detail > div {
  margin-bottom: 0.08rem;
}
.cinema_body .cinema_body_detail .cinema_body_detail_name > span:nth-child(1) {
  font-size: 0.14rem;
}
.cinema_body .cinema_body_detail .cinema_body_detail_name > span:nth-child(2) {
  font-size: 0.13rem;
  color: #f03d37;
}
.cinema_body .cinema_body_detail .cinema_body_detail_address {
  display: flex;
  justify-content: space-between;
  font-size: 0.11rem;
  align-items: center;
}
.cinema_body .cinema_body_detail .cinema_body_detail_card {
  display: flex;
}
.cinema_body .cinema_body_detail .cinema_body_detail_card > div {
  padding: 0 0.03rem;
  height: 0.15rem;
  line-height: 0.15rem;
  border-radius: 2px;
  color: #f90;
  border: 1px solid #f90;
  font-size: 0.11rem;
  margin-right: 5px;
}
</style>