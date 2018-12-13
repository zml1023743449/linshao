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
