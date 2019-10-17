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
	
	// 待签订、强制签约
	$('.signed1').click(function(){
		new Eject().Forceconfirm({
    		message:'此员工存在用工风险，是否强制签约？',
    		define:function(){},
    		cancel:function(){
    			$(location).attr('href', 'waitingSigned1.html');
    		}
    	})
	})
})
