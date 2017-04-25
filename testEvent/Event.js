/**
 * Created by Administrator on 2017/4/6 0006.
 */
$(document).ready(function(){
    $("#b1").click(function(){ //点击事件
        $(this).hide();
    })
    $("#b2").dblclick(function(){ //双击事件
        $(this).hide();
    })
    $("#b3").mouseenter(function(){ //鼠标移入事件
        $(this).hide();
    })
    $("#b4").mouseleave(function(){ //鼠标移除事件
        $(this).hide();
    })
})
