/* 侧边栏效果 */
$(function(){
    $(".sr_nav_side").click(function(){
        $(".sr_side_box").css("display","block")
        $(".sr_side_shadow").css({"opacity":"1","visibility":"visible"})
    })
    $(".sr_side_close").click(function(){
        $(".sr_side_box").css("display","none")
        $(".sr_side_shadow").css({"opacity":"0","visibility":"hidden"})
    })

$(".sr_side_shadow").click(function(){
    $(".sr_side_box").css("display","none")
    $(this).css("opacity","0")
})
/* end */
/* 关于我们中的了解更多效果 */
$(".sr_show_met .sr_more").mouseover(function(){
    $(this).css({"background":"#e3120b","color":"#ffffff","borderColor":"#e3120b"})
            .html("MORE")
})
$(".sr_show_met .sr_more").mouseleave(function(){
    $(this).css({"background":"transparent","color":"#ffffff","borderColor":"#ffffff"})
            .html("了解更多")
})
/* 准安新闻中的了解更多效果 */
$(".media .sr_more").mouseover(function(){
    $(this).css({"background":"#e3120b","color":"#ffffff","borderColor":"#e3120b"})
            .html("MORE")
})
$(".media .sr_more").mouseleave(function(){
    $(this).css({"background":"transparent","color":"#8c8c8c","borderColor":"#8c8c8c"})
            .html("了解更多")
})

/*  */
$(".sr_case_li .sr_more").mouseover(function(){
    $(this).css({"background":"#e3120b","color":"#ffffff","borderColor":"#e3120b"})
            .html("MORE")
})
$(".sr_case_li .sr_more").mouseleave(function(){
    $(this).css({"background":"transparent","color":"#8c8c8c","borderColor":"#8c8c8c"})
            .html("了解更多")
})

/* 准安案例的鼠标滑过变颜色 */
    $(".sr_blocks_ul .font-size-14 a").mouseover(function(){
        $(this).css("color","#e3120b")
    })
    $(".sr_blocks_ul .font-size-14 a").mouseleave(function(){
        $(this).css("color","#37474f")
    })

})