$(function(){
	$('.sub').on('click',function(){
		if(editor.txt.text() == ''){
			new Eject().Ealert({
	    		title:'准安日报管理系统',
	    		message:'请填写评语!'
	    	})
		}else{
			alert(editor.txt.html())	
		}
	})
	// 禁用编辑功能
//	editor.$textElem.attr('contenteditable', false)
	
	// 开启编辑功能
//	editor.$textElem.attr('contenteditable', true)
})
