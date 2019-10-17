$(function(){
	//查询
	$('.query_btn').click(function(){
		console.log($('#staff_name').val())
		console.log($('#phone_no').val())
		console.log($('#id_number').val())
	})
	//重置
	$('.reset_btn').click(function(){
		new Eject().Econfirm({
    		message:'重置？',
    		define:function(){
    			console.log('您点击了确定')
    			$('#staff_name').val('')
    			$('#phone_no').val('')
    			$('#id_number').val('')
    		},
    		cancel:function(){
    			console.log('您点击了取消')
    		}
    	})
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
