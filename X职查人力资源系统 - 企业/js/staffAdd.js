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
	//提交并保存
	$('.add_save').click(function(){
		$('.mask').css('display','block');
		$('.loading').attr('src',$(this).prev().attr('src')).css('max-height',$('.mask').height()*0.8 + 'px');
		var big_margin_top = ($('.mask').height() - $('.loading').height())/2 + 'px';
		$('.loading').css('margin-top',big_margin_top);
	})
	//取消新增
	$('.add_cancel').click(function(){
		new Eject().Econfirm({
    		message:'取消新增？',
    		define:function(){},
    		cancel:function(){}
    	})
	})
	
})
