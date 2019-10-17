$(function(){
	// 时间
	var new_date = new Date();
	// 年月日
	var year = new_date.getFullYear();
	var month= new_date.getMonth()+1;
	if (month<10) {
		month="0"+month;
	}
	var day = new_date.getDate();
	if (day<10) {
		day="0"+day;
	}
	$('.date').html(year+"-"+month+"-"+day)

	// 星期
	var week = new_date.getDay();
	switch(week){
		case 1: week="一"; break;
		case 2: week="二"; break;
		case 3: week="三"; break;
		case 4: week="四"; break;
		case 5: week="五"; break;
		case 6: week="六"; break;
		case 7: week="日"; break;
	}
	$('.week').html(week)

	// 时分秒
	var hour = new_date.getHours();
	if (hour<10) {
		hour="0"+hour;
	}
	var m= new_date.getMinutes();
	if (m<10) {
		m="0"+m;
	}
	var s= new_date.getSeconds();
	if (s<10) {
		s="0"+s;
	}

	// 提交
	$('.sub').on('click',function(){
		if(editor1.txt.text() == ''){
			alert('请填写工作日报！')
		}else if(editor2.txt.text() == ''){
			alert('请填写明日计划！')
		}else{
			alert(editor1.txt.html())
			alert(editor2.txt.html())
			console.log(year+"年"+month+"月"+day+"日"+"星期"+week+hour+":"+m+":"+s)
		}
	})
	// 禁用编辑功能
//	editor1.$textElem.attr('contenteditable', false)
//	editor2.$textElem.attr('contenteditable', false)
	
	// 开启编辑功能
//	editor1.$textElem.attr('contenteditable', true)
//	editor2.$textElem.attr('contenteditable', true)
})
