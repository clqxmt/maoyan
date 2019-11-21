import http from "@utils/request"

export const cinemaApi=(cityId=1)=>http({
    method:"get",
    url:"/api/cinemaList",
    data:{
        cityId:cityId
    }
})