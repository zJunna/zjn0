$(function(){
	$('.today_finish').html('PC网页搭建111<p style="color:red;">3dsads</p>')
	$('.tomorrow_plan').html('明日计划<p style="color:red;">1213123123123</p>')
	$('.sub').on('click',function(){
		if(editor.txt.text() == ''){
			alert('请填写评语！')
		}else{
			alert(editor.txt.html())	
		}
	})
	// 禁用编辑功能
	editor.$textElem.attr('contenteditable', false)
	
	// 开启编辑功能
//	editor.$textElem.attr('contenteditable', true)
})
