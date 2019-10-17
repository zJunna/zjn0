$(function(){
//	$('.btn').click(function(){
//		if(confirm('你确定？')){
//			$('.bbb').html('确定')
//		}else{
//			$('.bbb').html('取消')
//		}
//	})
	//提交
	$('.sub').on('click',function(){
		var json_data = {
			job: $('#job').val(),
			user_name: $('#user_name').val(),
			superior: $('#superior').val(),
			phone_no: $('#phone_no').val(),
			user_code: $('#user_code').val(),
			id_card: $('#id_card').val()
		}
		console.log(json_data)
	})
	//删除
	$('.del').on('click',function(){
		alert('删除')
	})
})
