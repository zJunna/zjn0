$(function(){
	//通过
	$('.pass_btn').click(function(){
		new Eject().Econfirm({
    		message:'通过？',
    		define:function(){
    			console.log('您点击了确定')
    		},
    		cancel:function(){
    			console.log('您点击了取消')
    		}
    	})
	})
	//驳回
	$('.reject').click(function(){
		new Eject().Econfirm({
    		message:'驳回？',
    		define:function(){
    			console.log('您点击了确定')
    		},
    		cancel:function(){
    			console.log('您点击了取消')
    		}
    	})
	})
	
	// 开关(已通过、未通过)
	$(".checkbox_pass").simpleSwitch({
		"theme": "FlatCircular"
	});
	$('.checkbox_pass').click(function(){
		console.log($(this).parent().parent().index())
		if( $(this).prop('checked') == true ){
			console.log('未通过')
			$(this).parent().parent().find('.SwitchLine').addClass('no_pass')
			$(this).parent().parent().find('.SwitchLine').removeClass('passed')
		}else{
			console.log('已通过')
			$(this).parent().parent().find('.SwitchLine').addClass('passed')
			$(this).parent().parent().find('.SwitchLine').removeClass('no_pass')
		}
	})
	
	//查看文件 - 预览图片
	var img_list = []; // 获取须预览的tr中所有图片
	var img_begin;
	$('.see_file').on('click',function(){
		$('.mask').css('display','block');
		$('#big_img_show').attr('src',$(this).next().find('img').eq(0).attr('src')).css('max-height',$('.mask').height()*0.8 + 'px');
		var big_margin_top = ($('.mask').height() - $('#big_img_show').height())/2 + 'px';
		$('#big_img_show').css('margin-top',big_margin_top);
		
		img_list = [];
		$(this).next().find('img').each(function(){
			img_begin = 0;
			img_list = img_list.concat(this.src)
		})
	})
	// 上一张、下一张
	$('.mask_prev').on('click',function(){
		img_begin = img_begin - 1;
		
		if(img_begin < 0){
			img_begin = img_list.length - 1;
		}
		$('#big_img_show').attr('src',img_list[img_begin])
	})
	$('.mask_next').on('click',function(){
		img_begin = img_begin + 1;
		
		if(img_begin >= img_list.length){
			img_begin = 0;
		}
		$('#big_img_show').attr('src',img_list[img_begin])
	})
	// 关闭预览
	$('.mask_close').on('click',function(){
		$('.mask').css('display','none');
	})
	
	// 审核失败原因 - 下拉框
	$('.drop_down1').selectFilter({
		callBack: function(val) {
			//返回选择的值
			console.log(val)
		}
	})
	$('.drop_down2').selectFilter({
		callBack: function(val) {
			//返回选择的值
			console.log(val)
		}
	})
	$('.drop_down3').selectFilter({
		callBack: function(val) {
			//返回选择的值
			console.log(val)
		}
	})
	$('.drop_down4').selectFilter({
		callBack: function(val) {
			//返回选择的值
			console.log(val)
		}
	})
	
	
})
