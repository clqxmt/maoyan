<template>
  <div class="city_container" ref="cityContainer">
    <BScroll ref="scroll">
    <div class="city_body">
      <!--热门城市-->
      <div class="hot_city">
        <div class="hot_title">热门城市</div>
        <div class="hot_city_list" >
          <div class="hot_city_name" v-for="(item,index) in hotCity" :key="index">{{item.nm}}</div>
        </div>
      </div>
      <!--城市列表-->
      <div class="city_list" ref="cityList">
        <div class="city_list_item" v-for="(item) in cityList" :key="item.id">
          <div class="city_title_letter">{{item.index}}</div>
          <div class="city_list_name">
            <v-touch
            tag="div"
            @tap="handleCityTo(child)"
              class="city_list_name_item"
              v-for="(child) in item.list"
              :key="child.id"
            >{{child.nm}}</v-touch>
          </div>
        </div>
      </div>
      
    </div>
    </BScroll>
    <!--城市列表下标-->
      <div class="city_list_index">
        <v-touch tag="div" @tap="handleTo(index)" class="index_item" v-for="(item,index) in cityList" :key="item.id">{{item.index}}</v-touch>
      </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from "vuex"
export default {
    name:"city",
    data(){
        return{
           
        }
    },
    computed:{
        ...mapState({
            cityList:state=>state.city.cityList,
            hotCity:state=>state.city.hotCity
        })
    },
    created(){
        // this.requestData();
        
        if(!(JSON.parse(sessionStorage.getItem("cityList")) && JSON.parse(sessionStorage.getItem("hotCity")))){
          this.$store.dispatch("city/cityActions");
        }
    },
    methods:{
       handleTo(index){
          let t=this.$refs.cityList.querySelectorAll(".city_title_letter")[index].offsetTop;
          // this.$refs.cityContainer.scrollTop=t;
          this.$refs.scroll.handleScrollTo(-t);
       },
       handleCityTo(city){
         let path=this.$route.query.path || "/movie";
         
         this.$router.push(path);
         this.$store.commit("city/handleUpdateCityInfo",{id:city.id,nm:city.nm})
       }
    }
};
</script>

<style >
.city_container {
  height: 100%;
  overflow: auto;
}
.city_body {
  background: #ebebeb;
}

/*热门城市*/
.hot_title,
.city_title_letter {
  line-height: 0.25rem;
  padding-left: 0.1083rem;
  font-size: 0.1167rem;
}

.hot_city_list,
.city_list_name {
  width: 96%;
  background: #f5f5f5;
  padding-bottom: 0.0667rem;
  padding-right: 0.25rem;
  display: flex;
  flex-wrap: wrap;
}
.hot_city_name {
  margin-top: 0.125rem;
  margin-left: 0.1083rem;
  /* width: 1.9rem; */
  width:29%;
  height: 0.275rem;
  background: #fff;
  text-align: center;
  line-height: 0.275rem;
  font-size: 0.1167rem;
  border: 2px solid #e6e6e6;
}

.city_list > div {
  width: 100%;
}
.city_list_name_item {
  line-height: 0.375rem;
  margin-left: 0.1083rem;
  width: 100%;
  border-bottom: 2px solid #e6e6e6;
  font-size: 0.1167rem;
}

/*城市列表下标*/
.city_list_index {
  position: fixed;
  right: 0;
  top: 0.4167rem;
}
.city_list_index > div {
  padding: 0.0417rem 0.05rem;
  font-size: 0.1rem;
}
</style>