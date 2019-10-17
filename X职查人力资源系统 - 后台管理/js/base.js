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
		if($(this).html() == '待签约列表'){
			$(location).attr('href', 'index.html')
		}else if($(this).html() == '已签约列表'){
			$(location).attr('href', 'signedList.html')
		}else if($(this).html() == '待录用列表'){
			$(location).attr('href', 'waitHiredList.html')
		}else if($(this).html() == '已录用列表'){
			$(location).attr('href', 'hiredList.html')
		}else if($(this).html() == '已签约员工列表'){
			$(location).attr('href', 'signedStaffList.html')
		}else if($(this).html() == '合同列表'){
			$(location).attr('href', 'contractsList.html')
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
