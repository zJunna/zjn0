$(function(){
	$('.today_finish').html('PC网页搭建111<p style="color:red;">3dsads</p>')
	$('.tomorrow_plan').html('明日计划<p style="color:red;">1213123123123</p>')
	//提交
	$('.sub').on('click',function(){
		if(editor1.txt.text() == ''){
			alert('请填写工作日报！')
		}else if(editor2.txt.text() == ''){
			alert('请填写明日计划！')
		}else{
			alert(editor1.txt.html())
			alert(editor2.txt.html())
		}
	})
	// 禁用编辑功能
//	editor1.$textElem.attr('contenteditable', false)
//	editor2.$textElem.attr('contenteditable', false)
	
	// 开启编辑功能
//	editor1.$textElem.attr('contenteditable', true)
//	editor2.$textElem.attr('contenteditable', true)
})
