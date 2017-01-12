/**
 * Created by wcxiao on 2016/12/10.
 */


//设置根元素的fontSize值
function  add() {
    var html = document.documentElement;
    var hei = html.clientWidth;
    var fz = hei / 375 * 100 + "px";
    console.log(fz);
    html.style.fontSize = fz;
};
add();
window.addEventListener( "resize" , add , false) //屏幕改变事件


//点击下拉

var deg = 180;
$('.myTeam').click(function(){
    //$('.myTeam').find('.down').css({transform:'rotate(0deg)',transition:'0.5s'});
    if(deg >=0){
        deg = -180;
    }
    else{
        deg = 0;
    }
    $(this).parent().next('.hidden').slideToggle(300);
    $(this).find('.down').css({transform:'rotate('+deg+'deg)',transition:'0.3s'});
});

$('.teams1').click(function(){
    $(this).siblings().find('.hidden').slideUp();
    $(this).siblings().find('.down').css({transform:'rotate(0deg)',transition:'0.3s'});
})
$('.teams2').click(function(){
    $(this).siblings().find('.hidden').slideUp();
    $(this).siblings().find('.down').css({transform:'rotate(0deg)',transition:'0.3s'});
})
$('.teams3').click(function(){
    $(this).siblings().find('.hidden').slideUp();
    $(this).siblings().find('.down').css({transform:'rotate(0deg)',transition:'0.3s'});
    //$(this).children().find('.myTeam').css({ border:'none' });
})
$('.teams4').click(function(){
    $(this).siblings().find('.hidden').slideUp();
    $(this).siblings().find('.down').css({transform:'rotate(0deg)',transition:'0.3s'});
})
$('.teams5').click(function(){
    $(this).siblings().find('.hidden').slideUp();
    $(this).siblings().find('.down').css({transform:'rotate(0deg)',transition:'0.3s'});
})

//tab切换
$(function(){
    $('.weui-navbar__item').on('click', function () {
        $(this).addClass('weui-bar__item_on').siblings('.weui-bar__item_on').removeClass('weui-bar__item_on');
    });
    $('.weui-navbar__item1').click(function(){
        $('.panels').addClass('dis');
        $('.panelBasic').removeClass('dis');
    })
    $('.weui-navbar__item2').click(function(){
        $('.panels').addClass('dis');
        $('.panelAccount').removeClass('dis');
    })
    $('.weui-navbar__item3').click(function(){
        $('.panels').addClass('dis');
        $('.panelReform').removeClass('dis');
    })
});

//销售业绩highCharts
$(function () {
    $('#chart').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            type: 'category',
            labels: {
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                },
                enabled: false
            },
            title: {
                text: null
            },
            tickLength : 0

        },
        yAxis: {
            min: 0,
            title: {
                text: null
            },
            labels: {
                enabled: false
            }

        },
        credits: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        series: [{
            name: 'Population',
            data: [
                ['Shanghai', 5000],
                ['Lagos', 800],
                ['Instanbul', 4000]
            ],
            maxPointWidth: 30,
            dataLabels: {
                enabled: true,
                color: '#FFFFFF',
                align: 'center',
                format: '{point.y:.1f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }

            }
        }]
    });
});














