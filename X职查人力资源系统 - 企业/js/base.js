$(function(){
	//平衡侧边栏高度
	if($('.side_bar').height() > $('.side_right').height()){
		$('.side_right').css('height',$('.side_bar').height())
	}else{
		$('.side_bar').css('height',$('.side_right').height())
	}

	// 侧边栏状态切换
	$('.nav_side li').on('click',function(){
		$('.nav_side li').removeClass('nav_active');
		$(this).addClass('nav_active');
		if($(this).html() == '我要签约'){
			$(location).attr('href', 'index.html')
		}else if($(this).html() == '签约状态'){
			$(location).attr('href', 'signingStatus.html')
		}else if($(this).html() == '员工信息'){
			$(location).attr('href', 'staffInfo.html')
		}else if($(this).html() == '新增员工'){
			$(location).attr('href', 'staffAdd.html')
		}else if($(this).html() == '解绑员工'){
			$(location).attr('href', 'staffLayOff.html')
		}
	})

	//退出登录
	var timer_log_out;
	$('.sign_out').hover(function(){
		clearTimeout(timer_log_out)
		$('.log_out').css('display','block')
	},function(){
		timer_log_out = setTimeout(function(){
			$('.log_out').css('display','none')
		},500)
	})
	
	
})
