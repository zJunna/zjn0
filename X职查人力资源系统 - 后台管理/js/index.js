$(function(){
	// 省份地区 - 下拉框
	$('.drop_down1').selectFilter({
		callBack: function(val) {
			//返回选择的值
			console.log(val)
		}
	})
	// 企业类型 - 下拉框
	$('.drop_down2').selectFilter({
		callBack: function(val) {
			//返回选择的值
			console.log(val)
		}
	})
	// 审核状态 - 下拉框
	$('.drop_down3').selectFilter({
		callBack: function(val) {
			//返回选择的值
			console.log(val)
		}
	})

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
		$('.filter-title').val('');
		$('#beginDate').val('');
		$('#endDate').val('');
	})
	
	//查看详情
	$('.see_details').on('click',function(){
		$(location).attr('href','noSignedDetails.html')
	})
})
