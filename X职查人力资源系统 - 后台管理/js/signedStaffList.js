$(function(){
	// 背调状态 - 下拉框
	$('.drop_down1').selectFilter({
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
		$('.write_name').val('');
		$('.filter-title').val('');
		$('#beginDate').val('');
		$('#endDate').val('');
		$('.staff_name').val('');
		$('.phone_no').val('');
		$('.id_num').val('');
	})
	
	//解绑员工
	$('.staff_lay_off').click(function(){
		new Eject().Econfirm({
    		message:'确定解绑XXX员工？',
    		define:function(){
    			new Eject().Ealert({
		    		message:'你已成功解绑XXX员工！',
		    		define:function(){},
		    	})
    		},
    		cancel:function(){}
    	})
	})
})
