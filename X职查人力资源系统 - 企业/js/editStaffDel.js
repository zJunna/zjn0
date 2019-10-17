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
	//删除员工
	$('.add_del').click(function(){
		new Eject().Econfirm({
    		message:'删除员工？',
    		define:function(){},
    		cancel:function(){}
    	})
	})
	
})
