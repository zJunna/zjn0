$(function(){
	// 时间控件
	jeDate('#beginDate', {
		minDate: '1990-01-01',
		isinitVal: false,
		format: 'YYYY-MM-DD',
		onClose: false,
		donefun: function(obj) {
			console.log(obj.val)
		}
	});
	jeDate('#endDate', {
		minDate: '1990-01-01',
		isinitVal: false,
		format: 'YYYY-MM-DD',
		onClose: false,
		donefun: function(obj) {
			console.log(obj.val)
		}
	});
	
	//插入
	$(".insert").click(function(){
		alert('起始时间：'+$("#beginDate").val()+'结束时间：'+$("#endDate").val())
	})
	//编辑
	$(".edit").click(function(){
		window.location.href = "date_edit.html";
	})
	//删除
	$(".del").click(function(){
		alert('删除')
	})
	//提交
	$(".sub").click(function(){
		alert('提交')
	})
})
