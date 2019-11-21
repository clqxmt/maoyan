import http from "@utils/request"

/**
 * 
 * 注册接口
 */

 export const registerApi=(username,password)=>http({
     method:"get",
     url:"/user/register",
     data:{
         username,
         password
     }
 })

 export const findUserApi=()=>http({
     method:"get",
     url:"/user/findUser",
     
 })