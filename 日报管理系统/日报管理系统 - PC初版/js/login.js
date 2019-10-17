$(function(){
	$('.login').eq(0).on('click',function(){
		console.log($('#user_name').val())
		console.log($('#password').val())
		if($('#user_name').val() == ''){
			$('.tip').eq(0).html('* 请填写用户名！')
			$('.tip').eq(0).css('display','block')
		}else if($('#password').val() == ''){
			$('.tip').eq(0).html('* 请填写密码！')
			$('.tip').eq(0).css('display','block')
		}else{
			$('.tip').eq(0).css('display','none')
			$(location).attr('href', 'index.html')
		}
	})
})
