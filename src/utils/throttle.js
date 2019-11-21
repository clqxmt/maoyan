export const throttle=(function(){
    let firstTime=0;
    return function(callback,time=300){
      var lastTime=new Date().getTime();
      if(lastTime-firstTime>time){
        callback();
        firstTime=lastTime;
      }
    }
  })()