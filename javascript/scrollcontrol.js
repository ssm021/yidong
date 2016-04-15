/**
 * Created by Administrator on 2016/3/13.
 */
$(function(){
    var page = 1;
    var i = 4;
    $("i.turn_right").click(function(){
        $s_container = $(".scroll_container");
        $l_container = $(".schedule_list_litcon");
        var s_width = $s_container.width();
        var len = $("li.schedule_list_item").length;
        var page_count = Math.ceil(len/i);
        console.log("总页数："+page_count);
        if(!$l_container.is(":animated")){
        if(page_count == page){
            $l_container.animate({left:'0px'},"slow");
            page = 1;
        }
        else{
            $l_container.animate({left:"-="+s_width},"slow");          //这里对键值对里面的值进行表达式计算，运算符用引号括起来
            page++;
            console.log("当前页数："+page);
            }
        }
    });
    $("i.turn_left").click(function(){
        $s_container = $(".scroll_container");
        $l_container = $(".schedule_list_litcon");
        var s_width = $s_container.width();
        var len = $("li.schedule_list_item").length;
        var page_count = Math.ceil(len/i);
        var p_width = s_width*(page_count-1);
        console.log("总页数："+page_count);
        if(!$l_container.is(":animated")){
            if(page == 1){
                $l_container.animate({left:-p_width},"slow");
                console.log("-"+page_count+"*"+s_width);
                page = page_count;
            }
            else{
                $l_container.animate({left:"+="+s_width},"slow");          //这里对键值对里面的值进行表达式计算，运算符用引号括起来
                page--;
                console.log("当前页数："+page);
            }
        }
    });
});