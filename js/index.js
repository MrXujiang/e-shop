window.onload = function(){
	var subnav = document.getElementById('subnav'),
		sub_item = subnav.getElementsByTagName('dl'),
		classList = document.getElementById('class-list'),
		classMenu = classList.getElementsByTagName('div');
		//alert(subnav.nodeName);
			for(var i=0;i<sub_item.length;i++){
				//classMenu[1].className = 'shop_list hide';
				sub_item[i].id = i;
				sub_item[i].onmouseover = function(){
					for(var j=0;j<sub_item.length;j++){
						if(sub_item[j].className == 'active'){
							sub_item[j].className = '';
						}
						if(classMenu[j].style.display == 'block'){
							classMenu[j].style.display = 'none';
						}					
					}
					this.className = 'active';
					classMenu[this.id].style.display = 'block';
					classMenu[this.id].style.top = (35+this.id*18)+'px';
			}
				classMenu[i].onmouseover = function(){
					this.style.display = 'block';
				}
				classMenu[i].onmouseout = function(){
					this.style.display = 'none';
				}
		}
		
		//用户登录效果
	 var user_register = document.getElementById('user-register'),
	     a_register = document.getElementById('register'),
	     register_close = user_register.getElementsByTagName('span')[0];
	     a_register.onclick = function (){
	     	user_register.style.display = 'block';
	     }
	     register_close.onclick = function (){
	     	user_register.style.display = 'none';
	     }
	     
		//实现placeholder兼容
		/* 待解决
		var inputArr = user_register.getElementsByTagName('input');
		function placeholder(nodes) {
	      if(nodes.length && !("placeholder" in document.getElementsByTagName("input"))){
	          for(i=0;i<nodes.length;i++){
	              var placeholder = nodes[i].getAttribute('placeholder');     
	                  if(nodes[i].value == ''){
	                     nodes[i].value = placeholder;
	                     //this.style.color = "";
	                  } 
	                  if(nodes[i].placeholder){
	                  	nodes[i].value = '';
	                  }
	                 
	              }  
	              alert(nodes[0].placeholder);
	              //nodes[i].value = placeholder;  
	              //nodes[i].style.color = pcolor;              
	          }
	      }	    
		placeholder(inputArr);
		*/
		
		
		/*轮播图动画（运行一定时间后图片加速运动，待解决*/
	 var imgbox=document.getElementById('imgbox'),
	    banner_bar=document.getElementById('banner_bar'),
	    left_banner=document.getElementById('left_banner'),
	    left_img=document.getElementById('left_img'),
	    left2_banner=document.getElementById('left2_banner'),
	    left2_img=document.getElementById('left2_img'),
	    l_btns=document.getElementById('l_btn').getElementsByTagName('span'),
	    l2_btns=document.getElementById('l2_btn').getElementsByTagName('span'),
	    m_btns=document.getElementById('m_btn').getElementsByTagName('span'),
		timer=null,
		animited=false;    //优化操作，当动画停止后再执行动画
		index=1;
		
		/*function animite(e,w){      //图片切换函数
		   animited=true;
		   var left=parseInt(e.style.left)+w;
		   var time=810;
		   var interval=10;
		   var speed=w/(time/interval);
		       function go(){
			       if(speed<0&&parseInt(e.style.left)>left || speed>0&&parseInt(e.style.left)<left){
				        e.style.left=speed+parseInt(e.style.left)+'px';
						setTimeout(go,interval);
						}
					else{
					       animited=false;
					       e.style.left=left+'px';
						   if(left<-parseInt(e.offsetWidth)/2){
						       e.style.left=-parseInt(e.offsetWidth)/4+'px';
						   }
						}
					}
					go();
					
				   }*/
		function animite(e,w,box,n){      //图片切换函数
		   animited=true;
		   var left=parseInt(e.style.left)+w;
		   var time=810;
		   var interval=10;
		   var speed=w/(time/interval);
		       function go(){
			       if(speed<0&&parseInt(e.style.left)>left || speed>0&&parseInt(e.style.left)<left){
				        e.style.left=speed+parseInt(e.style.left)+'px';
						setTimeout(go,interval);
						}
					else{
					       animited=false;
					       e.style.left=left+'px';
						   if(left<-parseInt(box.offsetWidth)*n){
						       e.style.left=-parseInt(box.offsetWidth)+'px';
						   }
						}
					}
					go();
					
				   }
		function show_btns(btn){          //设置按钮当前样式
		for(var i=0;i<btn.length;i++){
		    if(btn[i].className=="num_active"){
			   btn[i].className='';
			}
			}
		btn[index-1].className="num_active";
		}
		/*m_btns*/
		for(var i=0;i<m_btns.length;i++){    //用于实现单机按钮，切换图片
		   m_btns[i].onclick=function(){
		     if(this.className=="num_active"){
			    return;}
		     var cindex=parseInt(this.getAttribute('index')),      //自定义的属性必须用getAttribute来获取
			     w=-810*(cindex-index);
			 animite(imgbox,w,banner_bar,2);
			 index=cindex;
			 show_btns(m_btns);
			 //debugger;   断点，用于代码检验及优化		   
		    }
		}
		/*l_btns*/
		for(var i=0;i<l_btns.length;i++){    //用于实现单机按钮，切换图片
		   l_btns[i].onclick=function(){
		     if(this.className=="num_active"){
			    return;}
		     var cindex=parseInt(this.getAttribute('index')),      //自定义的属性必须用getAttribute来获取
			     w=-190*(cindex-index);
			 animite(left_img,w,left_banner,2);
			 index=cindex;
			 show_btns(l_btns);
			 //debugger;   断点，用于代码检验及优化		   
		    }
		}
		for(var i=0;i<l2_btns.length;i++){    //用于实现单机按钮，切换图片
		   l2_btns[i].onclick=function(){
		     if(this.className=="num_active"){
			    return;}
		     var cindex=parseInt(this.getAttribute('index')),      //自定义的属性必须用getAttribute来获取
			     w=-190*(cindex-index);
			 animite(left2_img,w,left2_banner,2);
			 index=cindex;
			 show_btns(l2_btns);
			 //debugger;   断点，用于代码检验及优化		   
		    }
		}
        /*function play(e,w){
		     timer=setInterval(function(){
			  animite(e,w);   //调用鼠标事件要用括号封装 
		     },3000);
			 }*/
			function play(){
		     timer=setInterval(function(){
			  //animite(e,w,box,n);   //调用鼠标事件要用括号封装 
		     animite(imgbox,-810,banner_bar,2);
		     animite(left_img,-190,left_banner,2);
		     animite(left2_img,-190,left2_banner,2);
		     },3000);
			 }
	    function stop(){
		   clearInterval(timer);
		}
        banner_bar.onmouseover=stop;
		banner_bar.onmouseout=play;
		left_banner.onmouseout=play;
		left_banner.onmouseover=stop;
		left2_banner.onmouseout=play;
		left2_banner.onmouseover=stop;
        play();
		//play(imgbox,-810,banner_bar,2);
		//play(left_img,-190,left_banner,2);
		//play(left2_img,-190,left2_banner,2);
		//鼠标悬停轮播停止失效，轮播运行后速度越变越快
	
	//呼叫小二组件
	var mytimer = null;
	var myQrbox = getByClass('my-QRcode')[0],
		myDown = getByClass('download-app')[0];
	//alert(myQrbox);
	myQrbox.onmouseover=function(){move(this,{right:-10})};
    myQrbox.onmouseout=function(){move(this,{right:-130})};
    myDown.onmouseover=function(){move(this,{right:-10})};
    myDown.onmouseout=function(){move(this,{right:-130})};
    
  //var timer=null;
  //var alpha=30;

  //json的用法
  /*
   var json={a:12,b:13};
   for(var i in json){
   alert(i);          依次弹出a和b
   alert(json[i]);    依次弹出a,b的值
   }
  */
  
  
               
//运动框架
function move(obj,json,fn){   //加fn是为了实现链式动画，此函数为回调函数

clearInterval(obj.timer);
//var odiv=document.getElementsByTagName('div');
obj.timer=setInterval(function(){
flag=true;           //标杆应定义在定时器内，如果定义在定时器外，定时器内永远是flag=flase,永远无法执行下一个函数
for(var attr in json){
var getS=0;
	if(attr=='opacity'){
	      getS=Math.round(parseFloat(getStyle(obj,attr))*100);   //由于浏览器处理”7=7.111111“，计算不精确，所以需要取整
	}else{getS=parseInt(getStyle(obj,attr));};


	
var speed=(json[attr]-getS)/10;
    speed=speed>0?Math.ceil(speed):Math.floor(speed);
	if(getS!=json[attr]){
		   flag=false;       //判断所有运动是否都到达目标值，没有则继续运动
	   }
	if(attr=='opacity'){       //逻辑判断号要用"=="
	     obj.style.filter='alpha(opacity:'+(getS+speed)+')';
	     obj.style.opacity=(getS+speed)/100;}
		 //长宽等属性
	else{obj.style[attr]=getS+speed+"px";}        //要改成通用属性，此处attr应该放到[]内
		
	if(flag){                      //如果都达到目标值，则清空定时器  
		clearInterval(obj.timer);
	    if(fn){fn();}
	}
}
	},40)
}
	//getStyle()函数的定义
	
function getStyle(obj,attr){
if(obj.currentStyle){return obj.currentStyle[attr];  //获取ie下样式
}
else{return getComputedStyle(obj,false)[attr];}  //获取火狐下样式
}
		
		
		
		
		
		
	function getByClass(clsName,parent){
	var oParent = parent?document.getElementById(parent):document,
		eles = [],
		elements = oParent.getElementsByTagName('*');
		
		for(var i=0; i<elements.length; i++){
			if(elements[i].className == clsName){
				eles.push(elements[i]);
			}
		}
		return eles;
	}	
		
}
