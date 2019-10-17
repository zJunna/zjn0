$(function(){
	//新增合同
	$('.query_btn').click(function(){
		$(location).attr('href','contractsAdd.html')
	})
	//修改合同
	$('.reset_btn').click(function(){
		$(location).attr('href','contractsAdd.html')
	})
	
	//修改合同
	$('.change_contracts').on('click',function(){
		$(location).attr('href','contractsAdd.html')
	})
})
