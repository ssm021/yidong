/**
 * Created by Administrator on 2016/3/13.
 */
$(function(){
    $(".header_user_info_container").hover(function(){
        $(".header_user_info_icon").css("background-position","-48px -61px");
    },function(){
        $(".header_user_info_icon").css("background-position","-32px -61px");
    });
    $(".header_download_container").hover(function(){
        $(".haeder_download_icon").css("background-position","-16px -61px");
    },function(){
        $(".haeder_download_icon").css("background-position"," 0px -61px");
    });
    $(".header_joinus_container").hover(function(){
        $(".haeder_joinus_icon").css("background-position","-67px 0px");
    },function(){
        $(".haeder_joinus_icon").css("background-position","-67px -22px");
    });
});