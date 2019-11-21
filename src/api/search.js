import http from "@utils/request"

export const searchApi=(cityId=1,keyword)=>http({
    method:"get",
    url:"/api/searchList",
    data:{
        cityId:cityId,
        kw:keyword
    }
})