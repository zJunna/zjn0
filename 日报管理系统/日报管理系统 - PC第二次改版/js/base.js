$(function(){
	//平衡侧边栏高度
	if($('.side_bar').height() > $('.side_right').height()){
		$('.side_right').css('height',$('.side_bar').height())
	}else{
		$('.side_bar').css('height',$('.side_right').height())
	}
	
	// 屏蔽浏览器右键菜单
	document.oncontextmenu = function(){
		return false;
	}
	// 右击事件
	$('li').mousedown(function(e){
		var key = e.which //1：代表左键；2：代表中键；3：代表右键
		if(e.which == 3){
			//获取右键点击坐标
			var x=e.clientX;
			var y=e.clientY;
			$('.menu').show().css({left:x,top:y});
		}
	})
	//点击任意部位隐藏右键菜单
	$(document).on('click',function(){
		$('.menu').hide()
	})

	// 双击事件
	$('li').on('dblclick',function(event){
		event.stopPropagation()
		alert($(this).text())
		// 管理日报
		$(location).attr('href', 'src/dailyManagement/index.html')
		// 我的日报
		// $(location).attr('href', 'src/myDaily/index.html')
	})

	
	//新增员工、保存
	$('.save1').on('click',function(){
		console.log($('#job1').val())
		console.log($('#superior1').val())
		console.log($('#staff_name1').val())
		console.log($('#phone_no1').val())
		console.log($('#id_card1').val())
	})
	//新增员工、取消
	$('.cancel_add').on('click',function(){
		//清空input
		$('#job1').val('')
		$('#superior1').val('')
		$('#staff_name1').val('')
		$('#phone_no1').val('')
		$('#id_card1').val('')
		$('.close').click()
	})
	//修改员工信息、保存
	$('.save2').on('click',function(){
		console.log($('#job2').val())
		console.log($('#superior2').val())
		console.log($('#staff_name2').val())
		console.log($('#phone_no2').val())
		console.log($('#id_card2').val())
	})
	//修改员工信息、删除
	$('.del').on('click',function(){
		new Eject().Econfirm({
    		title:'准安日报管理系统',
    		message:'确定要删除该员工？',
    		define:function(){
    			console.log('您点击了确定')
    			//关闭model
				$('.close').click()
				new Eject().Etoast('该员工已被删除',2)   //默认两秒
    		},
    		cancel:function(){
    			console.log('您点击了取消')
    		}
    	})
	})
	
	//修改密码
	$('.change_pwd').on('click',function(){
		$('.model').css('display','block')
		$('.show_model4').css('display','block')
	})
	//修改密码、提交
	$('.save_pwd').on('click',function(){
		console.log($('#old_pwd').val())
		console.log($('#new_pwd').val())
		console.log($('#confirm_pwd').val())
		if($('#old_pwd').val() == ''){
			$('.pwd_tip').css('display','block');
			$('.pwd_tip').html('请输入原密码！')
		}else if($('#new_pwd').val() == ''){
			$('.pwd_tip').css('display','block');
			$('.pwd_tip').html('请输入新密码！')
		}else if($('#new_pwd').val() != $('#confirm_pwd').val()){
			$('.pwd_tip').css('display','block');
			$('.pwd_tip').html('两次密码不一致！')
		}else{
			$('.pwd_tip').css('display','none');
			new Eject().Ealert({
	    		title:'准安日报管理系统',
	    		message:'密码修改成功！'
	    	})
			//清空input
			$('#old_pwd').val('')
			$('#new_pwd').val('')
			$('#confirm_pwd').val('')
			//关闭model
			$('.close').click()
		}
	})
	//修改密码、取消
	$('.cancel_pwd').on('click',function(){
		$('#old_pwd').val('')
		$('#new_pwd').val('')
		$('#confirm_pwd').val('')
		$('.close').click()
	})
	
	
	// 隐藏model弹窗
	$('.close').on('click',function(){
		$('.model').css('display','none')
		$('.show_model1').css('display','none')
		$('.show_model2').css('display','none')
		$('.show_model3').css('display','none')
		$('.show_model4').css('display','none')
	})
	
	//处罚规则显示
	var timer_chufa;
	$('.chufa').hover(function(){
		clearTimeout(timer_chufa)
		$('.msg_show').css('display','none')
		$('.chufa_show').css('display','block')
	},function(){
		timer_chufa = setTimeout(function(){
			$('.chufa_show').css('display','none')
		},1000)
	})

	//消息显示
	var timer_msg;
	$('.msg').hover(function(){
		clearTimeout(timer_msg)
		$('.chufa_show').css('display','none')
		$('.msg_show').css('display','block')
	},function(){
		timer_msg = setTimeout(function(){
			$('.msg_show').css('display','none')
		},1000)
	})
})

//新增员工
function new_staff () {
	document.getElementsByClassName('model')[0].style.display = 'block'
	document.getElementsByClassName('show_model1')[0].style.display = 'block'
}
//修改员工
function change_staff () {
	document.getElementsByClassName('model')[0].style.display = 'block'
	document.getElementsByClassName('show_model2')[0].style.display = 'block'
}
//查看我的信息
function my_info () {
	document.getElementsByClassName('model')[0].style.display = 'block'
	document.getElementsByClassName('show_model3')[0].style.display = 'block'
}