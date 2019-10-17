$(function(){
	// 同意协议打钩
	$('.agree_right').on('click',function(){
		if($(this).is('.tick') == true){
			$(this).removeClass('tick')
		}else{
			$(this).addClass('tick')
		}
	})
	
	//提交
	$('.sub').on('click',function(){
		new Eject().Econfirm({
    		message:'确定提交？',
    		define:function(){
    			$(location).attr('href', 'waitingSigned3.html')
    		},
    		cancel:function(){}
    	})
	})
})
