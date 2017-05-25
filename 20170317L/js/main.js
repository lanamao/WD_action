// 禮包效果 --------
$(function($){
		$(".ftoollist li").mouseover(function(){
			$(this).siblings().removeClass("on");
			$(this).addClass("on");
			var preNumber=$(this).prevAll().size();
			$(".fimglist li").removeClass("onpre");
			$(".fimglist li:nth-child("+preNumber+")").addClass("onpre");
			var margin = 730;
			margin = margin *preNumber; 
			margin = margin * -1;
			$(".fimglist").stop().animate({marginLeft: margin + "px"}, {duration: 500});
		});
	});
