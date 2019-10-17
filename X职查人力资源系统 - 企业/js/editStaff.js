$(function(){
	// 时间控件
	jeDate('#choose_date', {
		minDate: '1990-01-01',
		isinitVal: false,
		format: 'YYYY-MM-DD',
		onClose: false,
		donefun: function(obj) {
			console.log(obj.val)
		}
	});
	//保存并修改
	$('.add_save').click(function(){
		new Eject().Econfirm({
    		message:'保存并修改？',
    		define:function(){},
    		cancel:function(){}
    	})
	})
	//取消修改
	$('.add_cancel').click(function(){
		new Eject().Econfirm({
    		message:'取消修改？',
    		define:function(){},
    		cancel:function(){}
    	})
	})
	
})
