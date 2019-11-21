import http from "@utils/request"


export const movieNowApi=(cityId=1)=>http({
    method:"get",
    url:"/api/movieOnInfoList",
    data:{
        cityId:cityId
    }
})

/**
 * 即将上映
 * @param {cityId:城市ID}
 * 
 * 
 */
export const movieComingApi=(cityId=1)=>http({
    method:"get",
    url:"/api/movieComingList",
    data:{
        cityId:cityId
    }
})


/**
 * 
 * 详情页
 */
export const detailApi=(movieId)=>http({
    method:"get",
    url:"/api/detailmovie",
    data:{
        movieId:movieId
    }
})