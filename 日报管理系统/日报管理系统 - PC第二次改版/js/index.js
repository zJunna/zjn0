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
	//日期筛选
	$(".date_screen").click(function(){
		alert('起始时间：'+$("#beginDate").val()+'结束时间：'+$("#endDate").val())
	})
	
	//创建日报
	$('.creat_daily').click(function(){
		$(location).attr('href', 'creatDaily.html');
	})
})