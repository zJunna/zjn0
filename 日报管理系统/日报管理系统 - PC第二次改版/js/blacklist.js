$(function(){
	// 时间控件
	jeDate('#beginDate', {
		minDate: '1990-01-01',
		isinitVal: false,
		format: 'YYYY-MM-DD',
		onClose: false,
		donefun: function(obj) {
			console.log(obj.val)
		}
	});
	jeDate('#endDate', {
		minDate: '1990-01-01',
		isinitVal: false,
		format: 'YYYY-MM-DD',
		onClose: false,
		donefun: function(obj) {
			console.log(obj.val)
		}
	});
	//日期筛选
	$(".date_screen").click(function(){
		alert('起始时间：'+$("#beginDate").val()+'结束时间：'+$("#endDate").val())
	})
	
	//删除
	$('.del_date').on('click',function(){
		new Eject().Econfirm({
    		title:'准安日报管理系统',
    		message:'确定要删除该条信息？',
    		define:function(){
    			console.log('您点击了确定')
    		},
    		cancel:function(){
    			console.log('您点击了取消')
    		}
    	})
	})
})