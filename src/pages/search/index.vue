<template>
    <div class="page">
    <Header icon />
    <div class="search_movie_body">
      <div class="search_movie_input">
        <input type="search" 
        v-model="value"
        />
        
      </div>
      <h2>电影/电视剧/综艺</h2>
      <router-link 
      tag="div"
      :to="'/detail/'+item.id+'/'+item.nm"
      class="movie_item" v-for="item in searchList" :key="item.id">
        <div class="movie_item_pic">
          <img :src="item.img | toImg('128.180')" />
        </div>
        <div class="movie_item_info">
          <h2>{{item.nm}}</h2>
          <p>
            <span class="person">{{item.wish}}</span>人想看
          </p>
          <p>
            主演：
            <span>{{item.star}}</span>
          </p>
          <p>
            <span>{{item.pubDesc}}</span>
          </p>
        </div>
        <div class="movie_item_btn person">想看</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import {searchApi} from "@api/search"
import {throttle} from "@utils/throttle"
    export default {
        name:"search",
        data(){
            return{
                searchList:[],
                value:""
            }
        },
        watch:{
             value(newVal){
                throttle(async ()=>{
                    let data = await searchApi(this.$store.state.city.cityId,newVal);
                
                    this.searchList=data.data.movies?data.data.movies.list:[]
                })
                console.log(newVal,newVal.length);
                if(newVal.length==0){
                    this.searchList=[]
                }
               
                
            }
        },
     
    }
</script>

<style>
.search_movie_body {
  height: 100%;
  padding-bottom: 0.42rem;
  padding-left: 0.08rem;
  padding-right: 0.08rem;
  overflow-x: hidden;
}

 .search_movie_body .search_movie_input {
  padding:  0.2rem 0.03rem;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e5e5e5;
}
 .search_movie_body .search_movie_input > input {
  border: none;
  font-size: 0.13rem;
  color: #333;
  padding: 0.04rem 0;
  outline: none;
  margin-left: 5px;
  width: 100%;
}
 .search_movie_body > h2 {
  font-size: 0.13rem;
  color: #999;
  padding: 0.07rem 0;
  border-bottom: 1px solid #e6e6e6;
}
 .search_movie_body .movie_item {
  padding: 0.08rem 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
 .search_movie_body .movie_item .movie_item_pic {
  width: 0.53rem;
  height: 0.75rem;
}
 .search_movie_body .movie_item .movie_item_pic img {
  width: 100%;
  height: 100%;
}
 .search_movie_body .movie_item .movie_item_info {
  margin-left: 0.08rem;
  flex: 1;
  height: 100%;
}
 .search_movie_body .movie_item .movie_item_info h2 {
  font-size: 0.14rem;
  line-height: 0.21rem;
  width: 1.25rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
 .search_movie_body .movie_item .movie_item_info p {
  font-size: 0.11rem;
  line-height: 0.18rem;
  color: #666;
  width: 1.67rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
 .search_movie_body .movie_item .movie_item_info p .person {
  font-weight: 700;
  color: #faaf00;
  font-size: 0.13rem;
}

 .search_movie_body .movie_item .movie_item_btn {
  width: 0.42rem;
  height: 0.25rem;
  line-height: 0.25rem;
  text-align: center;
  color: #fff;
  border-radius: 4px;
  font-size: 0.11rem;
  cursor: pointer;
}
 .search_movie_body .movie_item > .person {
  background-color: #faaf00;
}
</style>