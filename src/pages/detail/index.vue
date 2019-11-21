<template>
  <div class="page">
    <Header :title="nm" />
    <div class="container">
      <div
        class="poster-bg"
        :style="{backgroundImage:'url('+
            (detailList.img?detailList.img.replace(/w\.h/,'71.100')+')':'')}"
      ></div>
      <div class="content">
        <div class="movie_img">
          <img :src="detailList.img | toImg('128.208')" alt />
        </div>
        <div class="movieInfo">
          <div>{{detailList.nm}}</div>
          <div>{{detailList.enm}}</div>
          <div>{{detailList.sc}}</div>
          <div>{{detailList.cat}}</div>
          <div>{{detailList.pubDesc}}</div>
          <div>{{detailList.star}}</div>
        </div>
      </div>
      <div class="desc">{{detailList.dra}}</div>
    </div>
  </div>
</template>

<script>
import { detailApi } from "@api/movie";
export default {
  name: "detail",
  props: ["id", "nm"],
  data() {
    return {
      detailList: []
    };
  },
  async created() {
    let data = await detailApi(this.id);

    this.detailList = data.data.detailMovie;
    console.log(this.detailList);
  }
};
</script>

<style >
.poster-bg {
  width: 100%;
  height: 1.57rem;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  opacity: 0.55;
  -webkit-tap-highlight-color: transparent;
  filter: blur(0.2rem);
  overflow: hidden;
  position: absolute;
}
.content {
  position: relative;
  z-index: 10;
  display: flex;
  padding: 0.16rem 0.25rem 0.16rem 0.13rem;
  color: #fff;
}
.content .movie_img {
  width: 0.92rem;
  height: 1.25rem;
  margin-right: 0.1rem;
}
.movie_img img {
  width: 100%;
  height: 100%;
}
.movieInfo {
  font-size: 0.12rem;
  line-height: 0.2rem;
}
.desc {
  margin-top: 0.17rem;
  font-size: 0.12rem;
  line-height: 0.2rem;
}
</style>