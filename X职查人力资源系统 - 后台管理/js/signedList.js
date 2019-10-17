$(function(){
	// 时间控件
	jeDate('#beginDate1', {
		minDate: '1990-01-01',
		isinitVal: false,
		format: 'YYYY-MM-DD',
		onClose: false,
		donefun: function(obj) {
			console.log(obj.val)
		}
	});
	jeDate('#endDate1', {
		minDate: '1990-01-01',
		isinitVal: false,
		format: 'YYYY-MM-DD',
		onClose: false,
		donefun: function(obj) {
			console.log(obj.val)
		}
	});
	jeDate('#beginDate2', {
		minDate: '1990-01-01',
		isinitVal: false,
		format: 'YYYY-MM-DD',
		onClose: false,
		donefun: function(obj) {
			console.log(obj.val)
		}
	});
	jeDate('#endDate2', {
		minDate: '1990-01-01',
		isinitVal: false,
		format: 'YYYY-MM-DD',
		onClose: false,
		donefun: function(obj) {
			console.log(obj.val)
		}
	});

	//查询
	$('.query_btn').click(function(){
		new Eject().Ealert({
    		message:'查询',
    		define:function(){
    			console.log('您点击了确定')
    		},
    	})
	})
	//重置
	$('.reset_btn').click(function(){
		$('.write_name').val('');
		$('#beginDate1').val('');
		$('#endDate1').val('');
		$('#beginDate2').val('');
		$('#endDate2').val('');
	})
	
	//查看详情
	$('.see_details').on('click',function(){
		$(location).attr('href','signedListDetails.html')
	})
})
