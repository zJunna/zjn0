$(function(){
	// 合同类型 - 下拉框
	$('.filter-box').selectFilter({
		callBack: function(val) {
			//返回选择的值
			console.log(val)
			$('.contracts_type_tip').css('display','none')
		}
	})
	
	
})
