$(function(){
	/* 关于准安的了解更多鼠标移入移出效果 */
	$(".sr_about_content .sr_more").mouseover(function(){
		$(this).css({"background":"#2976EC","color":"#ffffff","borderColor":"#2976EC"})
				.html("MORE")
	})
	$(".sr_about_content .sr_more").mouseleave(function(){
		$(this).css({"background":"transparent","color":"#8c8c8c","borderColor":"#8c8c8c"})
				.html("了解更多")
	})
	/* 准安领域的了解更多鼠标移入移出效果 */
	$(".sr_product_li .sr_more").mouseover(function(){
		$(this).css({"background":"#2976EC","color":"#ffffff","borderColor":"#2976EC"})
				.html("MORE")
	})
	$(".sr_product_li .sr_more").mouseleave(function(){
		$(this).css({"background":"transparent","color":"#fff","borderColor":"#ffffff"})
				.html("了解更多")
	})
	$(".sr_side_shadow").click(function(){
		$(".sr_side_box").css("display","none")
		$(this).css("opacity","0")
	})
	$('#fullPage').fullpage({
		scrollOverflow:false,
		sectionsColor: ['#fff','#fff'],
		anchors: ['page1', 'page2', 'page3', 'page4','page5','page6','page7','footer'],
		menu: '#menu',
		/* verticalCentered:false, */
		afterLoad: function(anchorLink, index){
			if(anchorLink == "page1"){
				$("#menu .sr_nav_li").find("a b").css("color","#ffffff");
				$("#menu .sr_nav_li").find("a:after").css("backgroundColor","#ffffff");
				$("#menu").find(".Logo1").css("display","block");
				$("#menu").find(".Logo2").css("display","none");
				$("#menu").find(".sr_nav_side hr").css("background","#ffffff");
				$("#menu").css("backgroundColor","transparent");
			}else{
				$("#menu .sr_nav_li").find("a b").css("color","#444444");
				$("#menu .sr_nav_li").find("a:after").css("backgroundColor","#2976EC");
				$("#menu").find(".Logo2").css("display","block")
				$("#menu").find(".Logo1").css("display","none");
				$("#menu").find(".sr_nav_side hr").css("background","#444444");
				$("#menu").css("backgroundColor","#ffffff");
			}
			if(index == 2){
				$('.section2').find('.sr_about_img img').fadeIn(1500)
			}
			if(index == 3){
				$('.section3').find('.sr_product_full').delay(500).animate({
					bottom: '0'
				}, 1500, 'easeOutExpo');
			}
			if(index == 4){
				$('.section4').find('.sr_news_li').animate({
					bottom: '0'
				}, 800, 'easeOutExpo');
			}
			if(index == 5){
				$('.section5').find('.sr_case_li').animate({
					bottom: '0'
				}, 1000, 'easeOutExpo');
			}
			if(index == 6){
				
				$(".sr_contact_cont").css("opacity","1")
				$(".sr_contact_text").css("opacity","1")
				$('.section6').find('.sr_contact_cont').fadeIn(1500);
				$(".sr_footer_fixed").css("opacity","1").fadeOut(1500)
									.css("display","block");
			
			}
		},
		onLeave: function(index, direction){
			if(index == '2'){
				$('.section2').find('.sr_about_img img').fadeIn(500)
			}
			if(index == '3'){
				$('.section3').find('.sr_product_full').delay(500).animate({
					bottom: '-120%'
				}, 1500, 'easeOutExpo');
			}
			if(index == '4'){
				$('.section4').find('.sr_news_li').animate({
					bottom: '-120%'
				}, 800, 'easeOutExpo');
			}
			if(index == '5'){
				$('.section5').find('.sr_case_li').animate({
					bottom: '-120%'
				}, 1000, 'easeOutExpo');
            }
            
			if(index == '6'){
				$(".sr_contact_cont").css("opacity","0")
				$(".sr_contact_text").css("opacity","0")
				$('.section6').find('.sr_contact_cont').fadeOut(500);
				$(".sr_footer_fixed").css("opacity","0").fadeOut(500)
				.css("display","none");
		
			}
		}

	});
})
