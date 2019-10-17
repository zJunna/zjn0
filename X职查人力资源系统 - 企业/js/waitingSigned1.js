$(function(){
	//确认
	$('.signing_confirm').click(function(){
		new Eject().Econfirm({
    		message:'确定？',
    		define:function(){
    			$(location).attr('href', 'waitingSigned2.html')
    		},
    		cancel:function(){}
    	})
	})
	
})
