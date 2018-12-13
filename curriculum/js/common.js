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