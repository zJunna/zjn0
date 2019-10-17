$(function(){
	// 企业类型 - 下拉框
	$('.filter-box').selectFilter({
		callBack: function(val) {
			//返回选择的值
			alert(val)
			$('.enterprise_type_tip').css('display','none')
		}
	})

	// 预览图片
	$('.preview').on('click',function(){
		$('.mask').css('display','block');
		$('#big_img_show').attr('src',$(this).prev().attr('src')).css('max-height',$('.mask').height()*0.8 + 'px');
		var big_margin_top = ($('.mask').height() - $('#big_img_show').height())/2 + 'px';
		$('#big_img_show').css('margin-top',big_margin_top);
	})
	// 关闭预览
	$('.mask_close').on('click',function(){
		$('.mask').css('display','none');
	})

	// 同意协议打钩
	$('.agree_right').on('click',function(){
		if($(this).is('.tick') == true){
			$(this).removeClass('tick')
		}else{
			$(this).addClass('tick')
		}
	})
	
	
})
