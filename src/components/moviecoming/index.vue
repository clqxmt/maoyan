<template>
  <BScroll ref="scroll">
    <div class="movie_body">
      <div class="movie_item" v-for="(item,index) in comingList" :key="index">
        <div class="movie_item_pic">
          <img :src="item.img | toImg('128.180')" />
        </div>
        <div class="movie_item_info">
          <h2>{{item.nm}}</h2>
          <p>
            <span>{{item.wish}}</span>人想看
          </p>
          <p>
            主演：
            <span>{{item.star}}</span>
          </p>
          <p>
            <span>{{item.rt}}</span>上映
          </p>
        </div>-->
        <div
          :class="item.showst == 4?'movie_item_btn ticket':'movie_item_btn wish'"
        >{{item.showst==4?'预售':'想看'}}</div>
      </div>
    </div>
  </BScroll>
</template>

<script>
import { movieComingApi } from "@api/movie";
export default {
  name: "movieComming",
  data() {
    return {
      comingList: [],
      typeId: 1
    };
  },
  created() {
    this.requestComing(this.$store.state.city.cityId);
  },
  activated() {
    if (this.$store.state.city.cityId === this.typeId) {
      this.comingList = JSON.parse(sessionStorage.getItem("comingList"));
    } else {
      this.requestComing(this.$store.state.city.cityId);
      this.typeId = this.$store.state.city.cityId;
    }
  },
  methods: {
    async requestComing(cityId) {
      let data = await movieComingApi(cityId);
      this.comingList = data.data.comingList;
      sessionStorage.setItem(
        "comingList",
        JSON.stringify(data.data.comingList)
      );
    }
  },
  watch: {
    //当comingList发生变化(数据加载过来的时候)去触发BScroll中的handleRefreshDown方法
    comingList() {
      this.$refs.scroll.handleRefreshDown();
    }
  },
  mounted() {
    //触发BScroll中的handleScroll函数
    this.$refs.scroll.handleScroll(); //访问子组件BScroll中的方法
    //下拉刷新的时候触发BScroll中的handlepullingDown函数，请求数据
    this.$refs.scroll.handlepullingDown(() => {
      this.requestComing(this.$store.state.city.cityId);
    });
  }
};
</script>

<style >
#content .movie_body {
  padding-bottom: 0.4167rem;
  padding-left: 0.0833rem;
  padding-right: 0.1667rem;
  overflow-x: hidden;
}
#content .movie_body .movie_item {
  padding: 0.0833rem 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
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
#content .movie_body .movie_item .ticket {
  background-color: #3c9fe6;
}

#content .movie_body .movie_item .wish {
  background-color: #faaf00;
}
</style>