<template>
  <div class="page">
    <Header title="猫眼电影" />
    <div id="content">
      <div class="movie_menu">
        <router-link tag="div" :to="'/city?path='+$route.path" class="movie_menu_city">
          <span>{{this.$store.state.city.nm}}</span>
          <i class="iconfont">&#xe627;</i>
        </router-link>
        <ul class="movie_menu_switch">
          <router-link to="/movie/movienow" tag="li">正在热映</router-link>
          <router-link tag="li" to="/movie/moviecoming">即将上映</router-link>
        </ul>
        <router-link tag="div" class="movie_meun_search" to="/search">
          <i class="iconfont">&#xe613;</i>
        </router-link>
      </div>

      <keep-alive>
          <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>

export default {
  name:"Movie",
  data(){
    return{
      activeIndex:0,
      topbars:[
        {
          id:0,
          title:"正在热映",
          path:"/movie/movieNow"
        },
        {
          id:0,
          title:"即将上映",
          path:"/movie/movieComing"
        }
      ]
    }
  },
  
  methods:{
    isActive(index){
      this.activeIndex=index;
    }
  }
};
</script>

<style lang="scss">
#content {
  position: absolute;
  left: 0;
  right: 0;
  top:0;
  bottom: 0;
  padding-top: 0.3667rem;
  padding-bottom: 0.4167rem;
}

/*movie_menu*/
#content .movie_menu {
  position: relative;
  z-index: 10;
  width: 100%;
  height: 0.375rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.1667rem;
  border: 1px solid #e6e6e6;
}
#content .movie_menu .movie_menu_city span {
  font-size: 0.125rem;
}

#content .movie_menu .movie_menu_city i {
  font-size: 0.125rem;
}
#content .movie_menu .movie_meun_search i {
  font-size: 0.1667rem;
  font-weight: 900;
  color: #e54847;
}
#content .movie_menu .movie_menu_switch {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#content .movie_menu .movie_menu_switch li {
  height: 100%;
  line-height: 0.375rem;
  padding: 0 0.125rem;
  font-size: 0.125rem;
}

#content .movie_menu .movie_menu_switch .router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
</style>