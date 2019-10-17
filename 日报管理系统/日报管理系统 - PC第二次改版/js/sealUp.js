$(function(){
	//日期筛选
	$(".query").click(function(){
		alert($('.search_staff_name').val())
	})
	
	//解封账号
	$('.del_date').on('click',function(){
		new Eject().Econfirm({
    		title:'准安日报管理系统',
    		message:'确定要解封该员工账号？',
    		define:function(){
    			console.log('您点击了确定')
    		},
    		cancel:function(){
    			console.log('您点击了取消')
    		}
    	})
	})
})