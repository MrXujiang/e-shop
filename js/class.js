window.onload=function(){
    var imgbox=document.getElementById('imgbox'),
	    banner_bar=document.getElementById('banner_bar'),
	    m_btns=document.getElementById('m_btn').getElementsByTagName('span'),
		timer=null,
		animited=false;    //优化操作，当动画停止后再执行动画
		index=1;
		

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
	

			function play(){
		     timer=setInterval(function(){
			  //animite(e,w,box,n);   //调用鼠标事件要用括号封装 
		     animite(imgbox,-810,banner_bar,2);
		     },3000);
			 }
	    function stop(){
		   clearInterval(timer);
		}
        banner_bar.onmouseover=stop;
		banner_bar.onmouseout=play;
	    play();
}