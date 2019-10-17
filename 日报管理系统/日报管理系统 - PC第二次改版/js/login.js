$(function(){
	$('.login').eq(0).on('click',function(){
		if($('#user_name').val() == ''){
			$('.error_tip').eq(0).html('* 请填写用户名！')
			$('.error_tip').eq(0).css('display','block')
		}else if($('#password').val() == ''){
			$('.error_tip').eq(0).html('* 请填写密码！')
			$('.error_tip').eq(0).css('display','block')
		}else{
			$('.error_tip').eq(0).css('display','none')
			$(location).attr('href', 'index.html')
		}
	})
	// 回车
	$(document).keypress(function(e){
		if(e.keyCode == 13){
			$('.login').eq(0).click()
		}
	})
})
