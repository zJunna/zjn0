$(function(){
	// 屏蔽浏览器右键菜单
	document.oncontextmenu = function(){
		return false;
	}

	// 右击事件
	$('li').mousedown(function(e){
		var key = e.which //1：代表左键；2：代表中键；3：代表右键
		if(e.which == 1){
			console.log('点击左键')
		}else if(e.which == 2){
			console.log('点击中键')
		}else if(e.which == 3){
			console.log('点击右键')
			//获取右键点击坐标
			var x=e.clientX;
			var y=e.clientY;
			$('.menu').show().css({left:x,top:y});
		}
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
	
	//点击任意部位隐藏
	$(document).on('click',function(){
		$('.menu').hide()
	})
	
})

//新增员工
function new_staff () {
	$(location).attr('href', 'src/userManagement/new_staff.html')
}
//修改员工
function change_staff () {
	$(location).attr('href', 'src/userManagement/change_staff.html')
}
//查看我的信息
function my_info () {
	$(location).attr('href', 'src/userManagement/my_info.html')
}