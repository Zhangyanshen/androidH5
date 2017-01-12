/**
 * Created by wcxiao on 2016/12/22.
 */
//判断当前页面URL，从而判断底部按钮
jumpTab();
function jumpTab(){
    var url = window.location.hash.split('/')[1];
    if( url == 'discover'){
        $('.foot_tab').children().find('span').removeClass('colBlue');
        $('.tab_discover').children().find('span').addClass('colBlue')
        $('.tab_discover').children().find('img').attr('src','../../images/icon/discove2@2x.png');
        $('.tab_product').children().find('img').attr('src','../../images/icon/product@2x.png');
        $('.tab_workroom').children().find('img').attr('src','../../images/icon/wealth@2x.png');
        $('.tab_adviser').children().find('img').attr('src','../../images/icon/customer@2x.png');
    }else if( url == 'product' ){
        $('.foot_tab').children().find('span').removeClass('colBlue');
        $('.tab_product').children().find('span').addClass('colBlue')
        $('.tab_product').children().find('img').attr('src','../../images/icon/product2@2x.png');
        $('.tab_workroom').children().find('img').attr('src','../../images/icon/wealth@2x.png');
        $('.tab_discover').children().find('img').attr('src','../../images/icon/discover@2x.png');
        $('.tab_adviser').children().find('img').attr('src','../../images/icon/customer@2x.png');

    }else if( url == 'workroom' ){
        $('.foot_tab').children().find('span').removeClass('colBlue');
        $('.tab_workroom').children().find('span').addClass('colBlue')
        $('.tab_workroom').children().find('img').attr('src','../../images/icon/wealth2@2x.png');
        $('.tab_product').children().find('img').attr('src','../../images/icon/product@2x.png');
        $('.tab_discover').children().find('img').attr('src','../../images/icon/discover@2x.png');
        $('.tab_adviser').children().find('img').attr('src','../../images/icon/customer@2x.png');

    }else if( url == 'adviser' ){
        $('.foot_tab').children().find('span').removeClass('colBlue');
        $('.tab_adviser').children().find('span').addClass('colBlue')
        $('.tab_adviser').children().find('img').attr('src','../../images/icon/customer2@2x.png');
        $('.tab_product').children().find('img').attr('src','../../images/icon/product@2x.png');
        $('.tab_discover').children().find('img').attr('src','../../images/icon/discover@2x.png');
        $('.tab_workroom').children().find('img').attr('src','../../images/icon/wealth@2x.png');
    }
}


//底部导航样式
footerTab();
function footerTab(){
    $('.foot_tab').click(function(){
        $('.foot_tab').children().find('span').removeClass('colBlue');
        $(this).children().find('span').addClass('colBlue')
    })
    $('.tab_workroom').click(function(){
        $(this).children().find('img').attr('src','../../images/icon/wealth2@2x.png');
        $('.tab_product').children().find('img').attr('src','../../images/icon/product@2x.png');
        $('.tab_discover').children().find('img').attr('src','../../images/icon/discover@2x.png');
        $('.tab_adviser').children().find('img').attr('src','../../images/icon/customer@2x.png');
    })
    $('.tab_product').click(function(){
        $(this).children().find('img').attr('src','../../images/icon/product2@2x.png');
        $('.tab_workroom').children().find('img').attr('src','../../images/icon/wealth@2x.png');
        $('.tab_discover').children().find('img').attr('src','../../images/icon/discover@2x.png');
        $('.tab_adviser').children().find('img').attr('src','../../images/icon/customer@2x.png');
    })
    $('.tab_discover').click(function(){
        $(this).children().find('img').attr('src','../../images/icon/discove2@2x.png');
        $('.tab_product').children().find('img').attr('src','../../images/icon/product@2x.png');
        $('.tab_workroom').children().find('img').attr('src','../../images/icon/wealth@2x.png');
        $('.tab_adviser').children().find('img').attr('src','../../images/icon/customer@2x.png');
    })
    $('.tab_adviser').click(function(){
        $(this).children().find('img').attr('src','../../images/icon/customer2@2x.png');
        $('.tab_product').children().find('img').attr('src','../../images/icon/product@2x.png');
        $('.tab_discover').children().find('img').attr('src','../../images/icon/discover@2x.png');
        $('.tab_workroom').children().find('img').attr('src','../../images/icon/wealth@2x.png');
    })
}



//产品详情tab
detailTab();
function detailTab(){
    $('.bottomTab_item').click(function(){
        $('.bottomTab_item').removeClass('coleaea');
        $(this).addClass('coleaea');
    })
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
}
