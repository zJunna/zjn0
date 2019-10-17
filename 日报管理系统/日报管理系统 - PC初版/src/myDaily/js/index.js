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
	//查询
	$(".search").click(function(){
		alert('起始时间：'+$("#beginDate").val()+'结束时间：'+$("#endDate").val())
	})
	//查看
	$(".see").click(function(){
		window.location.href = "myDailyDetails.html";
	})
	//创建日报
	$(".creat_daily").click(function(){
		window.location.href = "creatDaily.html";
	})
})
