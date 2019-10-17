$(function(){
	//提交
	$('.sub').on('click',function(){
		new Eject().Econfirm({
    		message:'确定提交？',
    		define:function(){
    			$(location).attr('href', 'saveSuccess.html')
    		},
    		cancel:function(){}
    	})
	})
})
