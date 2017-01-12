/**
 * Created by wcxiao on 2016/12/21.
 */
//设置根元素的fontSize值
function  add() {
    var html = document.documentElement;
    var hei = html.clientWidth;
    var fz = hei / 375 * 100 + "px";
    html.style.fontSize = fz;
};
add();
window.addEventListener( "resize" , add , false) //屏幕改变事件


//咨询详情分享
$('.shareBtn').click(function(e){
    var e = e || event;
    e.stopPropagation();
    $('.hiddenAction').slideToggle();
})
$(document).click(function(e){
    var e = e || event;
    e.stopPropagation();
    $('.hiddenAction').slideUp();
})

function GetQueryString(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return unescape(r[2]); return null;
}












