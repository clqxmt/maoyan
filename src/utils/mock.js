import Mock from "mockjs"

const url=require("url")

/**注册 */
// const user=Mock.mock({
//   "data":[
//     {
//       "id":1,
//       "username":"张三",
//       "password":"12345"
//     }
//   ]
// })






/**处理请求 */


/**请求存储用户 */
Mock.mock(/\/user\/register/,"get",(options)=>{
  let {username,password}=JSON.parse(options.body);
  
  let obj={
    code:200,
    errMeg:"",
    data:{
      status:1,
      info:"注册成功"
    }
  }
  let userList=JSON.parse(localStorage.getItem("user"));
  if(!userList){
    userList=[]
  }
  userList.push({
    "username":username,
    "password":password
  })
 
  localStorage.setItem("user",JSON.stringify(userList));
  return obj;
})
/**查找用户表 */
Mock.mock(/\/user\/findUser/,"get",()=>{
  
  let obj={
    code:200,
    errMeg:"",
    data:{
      list:[],
    }
  }
  let data=JSON.parse(localStorage.getItem("user")) || []
  obj.data.list=data;
  return obj;
})

