$(function(){
	//侧边栏—点击事件收起
	$('.instructions_title').click(function(){
		if($(this).next().css('display') == 'block'){
			$(this).next().slideUp();
			$(this).find('img').attr('src','images/wzk-12.png');
		}else{
			$(this).next().slideDown();
			$(this).find('img').attr('src','images/zk12.png');
		}
	})
	
	//侧边栏—点击hover事件
	$('li').click(function(){
		$('.instructions_side li').removeClass('instructions_active');
		$(this).addClass('instructions_active');
	})
	
	//获取浏览器滚动距离
//	$(window).scroll(function ()
//		{
//		var st = $(this).scrollTop();
//		console.log(st);
//	});
	//鼠标滚动
	$(window).scroll(function(){
		if($(this).scrollTop() < 1757){
			$('.instructions_side li').removeClass('instructions_active');
			$('.instructions_side li').eq(0).addClass('instructions_active');
		}
		if($(this).scrollTop() >= 1757 && $(this).scrollTop() < 8100){
			$('.instructions_side li').removeClass('instructions_active');
			$('.instructions_side li').eq(2).addClass('instructions_active');
		}
		if($(this).scrollTop() >= 8100 && $(this).scrollTop() < 9750){
			$('.instructions_side li').removeClass('instructions_active');
			$('.instructions_side li').eq(3).addClass('instructions_active');
		}
		if($(this).scrollTop() >= 9750 && $(this).scrollTop() < 11750){
			$('.instructions_side li').removeClass('instructions_active');
			$('.instructions_side li').eq(7).addClass('instructions_active');
		}
		if($(this).scrollTop() >= 11750 && $(this).scrollTop() < 23700){
			$('.instructions_side li').removeClass('instructions_active');
			$('.instructions_side li').eq(8).addClass('instructions_active');
		}
		if($(this).scrollTop() >= 23700 && $(this).scrollTop() < 24166){
			$('.instructions_side li').removeClass('instructions_active');
			$('.instructions_side li').eq(9).addClass('instructions_active');
		}
		if($(this).scrollTop() >= 24166){
			$('.instructions_side li').removeClass('instructions_active');
			$('.instructions_side li').eq(16).addClass('instructions_active');
		}
	})
	
	//页面滚动
	$(".nav_instructions li").on("click",function(){
		var nav = $('.nav_instructions').find("li");
		var floor = $(".agreement_content").find(".jump");
		var floorOffsetTop = floor.eq($(this).index()).offset().top;
		$("body,html").animate({
			"scrollTop":floorOffsetTop
		},500)
	})
	
	// 预览图片
	$('.agreement_content img').on('click',function(){
		$('.mask').css('display','block');
		$('#big_img_show').attr('src',$(this).attr('src')).css('max-height',$('.mask').height()*0.8 + 'px');
		var big_margin_top = ($('.mask').height() - $('#big_img_show').height())/2 + 'px';
		$('#big_img_show').css('margin-top',big_margin_top);
	})
	// 关闭预览
	$('.mask_close').on('click',function(){
		$('.mask').css('display','none');
	})
	//img提示
	$('.agreement_content img').hover(function(){
		$(this).attr('title','点击放大')
	})
})
