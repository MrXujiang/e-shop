window.onload=function(){
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
}