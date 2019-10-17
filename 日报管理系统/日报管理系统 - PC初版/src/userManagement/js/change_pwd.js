$(function(){
	//提交
	$('.sub').on('click',function(){
		var json_data = {
			job: $('#old_pwd').val(),
			user_name: $('#new_pwd').val(),
			superior: $('#confirm_pwd').val()
		}
		console.log(json_data)
	})
})
