<template>
  <BScroll ref="scroll">
    <div class="movie_body">
      <router-link 
      tag="div"
      :to="'/detail/'+item.id+'/'+item.nm"
      class="movie_item" v-for="(item,index) in movieList" :key="index">
        <div class="movie_item_pic">
          <img :src="item.img | toImg('128.180')" />
        </div>
        <div class="movie_item_info">
          <h2>{{item.nm}}</h2>
          <p>
            观众评:
            <span class="grade">{{item.sc}}</span>
          </p>
          <p>
            主演：
            <span>{{item.star}}</span>
          </p>
          <p>
            <span>{{item.showInfo}}</span>
          </p>
        </div>
        <div
          :class="item.globalReleased?'movie_item_btn asale':'movie_item_btn ticket'"
        >{{item.globalReleased?'购票':'预售'}}</div>
      </router-link>
    </div>
  </BScroll>
</template>

<script>
import { movieNowApi } from "@api/movie";

export default {
  name: "MovieNow",
  data() {
    return {
      movieList: [],
      typeId:1
    };
  },
  created() {
    this.requestData(this.$store.state.city.cityId);
    
  },
  activated() {
      if(this.typeId===this.$store.state.city.cityId){
        this.movieList=JSON.parse(sessionStorage.getItem("movieList"))
      }else{
        this.requestData(this.$store.state.city.cityId);
        this.typeId=this.$store.state.city.cityId
      }
  },
  methods: {
    async requestData(cityId) {
      
      let data = await movieNowApi(cityId);
      this.movieList = data.data.movieList;
      
      sessionStorage.setItem("movieList",JSON.stringify(data.data.movieList))
    }
  },
  watch:{
    //当movieList发生变化(数据加载过来的时候)去触发BScroll中的handleRefreshDown方法
    movieList(){
      this.$refs.scroll.handleRefreshDown();
    }
  },
  mounted(){
    //触发BScroll中的handleScroll函数
    this.$refs.scroll.handleScroll();//访问子组件BScroll中的方法
    //下拉刷新的时候触发BScroll中的handlepullingDown函数，请求数据
    this.$refs.scroll.handlepullingDown(()=>{
      this.requestData(this.$store.state.city.cityId);
      
    });
  }
};
</script>

<style >
#content .movie_body {
  padding-bottom: 0.4167rem;
  padding-left: 0.0833rem;
  padding-right: 0.0833rem;
  overflow-x: hidden;
  /* height: 100%; */
}
#content .movie_body .movie_item {
  padding: 0.0833rem 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fff;
}
#content .movie_body .movie_item .movie_item_pic {
  width: 0.5333rem;
  height: 0.75rem;
}
#content .movie_body .movie_item .movie_item_pic img {
  width: 100%;
  height: 100%;
}
#content .movie_body .movie_item .movie_item_info {
  margin-left: 0.0833rem;
  flex: 1;
  height: 100%;
}
#content .movie_body .movie_item .movie_item_info h2 {
  font-size: 0.1417rem;
  line-height: 0.2083rem;
  width: 1.25rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
#content .movie_body .movie_item .movie_item_info p {
  font-size: 0.1083rem;
  line-height: 0.1833rem;
  color: #666;
  width: 1.6667rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
#content .movie_body .movie_item .movie_item_info p .grade {
  font-weight: 700;
  color: #faaf00;
  font-size: 0.125rem;
}

#content .movie_body .movie_item .movie_item_btn {
  width: 0.4167rem;
  height: 0.25rem;
  line-height: 0.25rem;
  text-align: center;
  color: #fff;
  border-radius: 4px;
  font-size: 0.1083rem;
  cursor: pointer;
}
#content .movie_body .movie_item .asale {
  background-color: #f03d37;
}
#content .movie_body .movie_item .ticket {
  background-color: #3c9fe6;
}
</style>