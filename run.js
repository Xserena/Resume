// 运动函数
function run(obj,attr,target,fn){ 
  clearInterval(obj.timer);
  obj.timer = setInterval(function(){
    var cur = 0;
    if(attr == "opacity"){
      cur = Math.round(parseFloat(getstyle(obj,attr))*100);
    }else{
      cur = parseInt(getstyle(obj,attr));
    }
    var speed = (target-cur)/8;

    speed = speed>0?Math.ceil(speed):Math.floor(speed); 

     if(cur == target){
      clearInterval(obj.timer);
        if(fn){
          fn();
        }
    }else{
      if(attr == "opacity"){

          obj.style.filter = "alpha(opacity="+(cur+speed)+")";
          obj.style.opacity = (cur+speed)/100;
        }else{
         
        obj.style[attr] = cur + speed + "px";
        }
    }         
  },30)
}
// 获取样式
function getstyle(obj,name){
  if(obj.currentStyle){
    return obj.currentStyle[name];
  }else{
    return getComputedStyle(obj,false)[name];
  }
}

//获取浏览器视口大小
function getInner() {
  if (typeof window.innerWidth!='undefined'){
      return{
          width:window.innerWidth,
          height:window.innerHeight
      }
  }else {
      return{
          width:document.documentElement.clientWidth||document.body.clientWidth,
          height:document.documentElement.clientHeight||document.body.clientHeight
      }
  }
} 
