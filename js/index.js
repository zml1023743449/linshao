$(document).ready(function(){
    /*自制的小屏下拉菜单*/
    $("#menu").click(function(){
		$("#none").slideToggle("slow");
	});  
    $("#menua").click(function(){
		$("#none").slideToggle("slow");
	});  
    $("#menub").click(function(){
		$("#none").slideToggle("slow");
	});
	$('.bxslider').bxSlider({
					auto: true,
					autoControls: true
				});
    $("#more").click(function(){
		$("#nonen").slideToggle("slow");
		
	});  
    $("#more").click(function(){
		$("#nonena").slideToggle("slow");
	});  
    var chakan=document.getElementById("chakan");
    var guanbi=document.getElementById("guanbi");
    chakan.onclick=function(){
    	chakan.className="none";
    	guanbi.className="block";
    }
    guanbi.onclick=function(){
    	guanbi.className="none";
    	chakan.className="block";
    }
    

		
//			var btn=document.getElementById("btn");
//			var liArr=document.getElementsByClassName("jjj");
//			for(var i=0;i<liArr.length;i++){
//				liArr[i].style.display="none"
//			}
//			btn.onclick=function(){
//				if(this.innerHTML=="查看更多"){
//						for(var i=0;i<liArr.length;i++){
//					liArr[i].style.display="block"
//				}
//						this.innerHTML="点击收回"
//				}
//				else{
//					for(var i=0;i<liArr.length;i++){
//							
//						liArr[i].style.display="none"
//					}
//					this.innerHTML="查看更多"
//				}
//			}
var btn=document.getElementById("toggle");//按钮
var btn1=document.getElementById("toggles");//按钮
var btn2=document.getElementById("toggless");//按钮
      btn.onclick=function(){
	      if(btn.innerHTML=="查看更多&nbsp;+"){
	      	$(".hide").css("display","block");
	      	btn.innerHTML="关闭&nbsp×";
	      }else{
	      	$(".hide").css("display","none");
	      	btn.innerHTML="查看更多&nbsp;+";
	      }
      }
      btn1.onclick=function(){
	      if(btn1.innerHTML=="查看更多&nbsp;+"){
	      	$(".hides").css("display","block");
	      	btn1.innerHTML="关闭&nbsp×";
	      }else{
	      	$(".hides").css("display","none");
	      	btn1.innerHTML="查看更多&nbsp;+";
	      }
      }
      btn2.onclick=function(){
	      if(btn2.innerHTML=="查看更多&nbsp;+"){
	      	$(".hidess").css("display","block");
	      	btn2.innerHTML="关闭&nbsp×";
	      }else{
	      	$(".hidess").css("display","none");
	      	btn2.innerHTML="查看更多&nbsp;+";
	      }
      }
    
});

$(window).resize(function  () {
			$("#none").hide();
			
})

window.onload = function() {
	var timer = null;
	var fhdb = document.getElementById("fhdb");

	fhdb.onclick = function() {
		cancelAnimationFrame(timer);
		timer = requestAnimationFrame(function fn() {
			var oTop = document.body.scrollTop || document.documentElement.scrollTop;
			if (oTop > 0) {
				document.body.scrollTop = document.documentElement.scrollTop = oTop - 300;
				timer = requestAnimationFrame(fn);
			} else {
				cancelAnimationFrame(timer);
			}
		});
	}

}