/**
 * Created by wcxiao on 2016/12/22.
 */
module.exports = {
    template: require('../../views/product/index.html'),
    data: function () {
        return {}
    },
    ready: function () {
        var self = this;
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            spaceBetween: 30,
            autoHeight: true //enable auto height
        });
        self.alertSurvey();
    },
    methods: {
        alertSurvey : function(){
            //$('.survey').on('click', function(){
            //    $('#iosDialog2').fadeIn(200);
            //});
            //$('.alertSurvey').on('click', '.weui-dialog__btn', function(){
            //    $(this).parents('.js_dialog').fadeOut(200);
            //});

            $('.keyWord').click(function(){
                $('.keyWord').removeClass('activeKeyWord')
                $(this).addClass('activeKeyWord')
            })
        },
        jump : function(){
            var self = this;
            /*
            * 1.这里需要判断是不是可以进入产品详情
            * 2.判断点击进入测试页还是详情页
            */

            window.location.href='../../../views/productDetail.html'
        },
        //加载初始化
        loadInit : function(){
            var self = this;
            refresher.init({
                id:"wrapper",
                pullDownAction:self.refresh,
                pullUpAction:self.Load
            });
        },
        //下拉刷新
        refresh : function() {
            var self = this;
            setTimeout(function () {
                var el, li, i;
                el =document.querySelector("#wrapper ul");
                el.innerHTML='';
                for (i=0; i<11; i++) {
                    li = document.createElement('li');
                    li.appendChild(document.createTextNode(++self.generatedCount));
                    el.insertBefore(li, el.childNodes[0]);
                }
                wrapper.refresh();
            })
        },
        //上拉加载
        Load : function() {
            var self = this;
            setTimeout(function () {// <-- Simulate network congestion, remove setTimeout from production!
                var el, li, i;
                el = document.querySelector("#wrapper ul");
                for (i = 0; i < 5; i++) {
                    li = document.createElement('li');
                    li.appendChild(document.createTextNode(++self.generatedCount));
                    el.appendChild(li, el.childNodes[0]);
                }
                wrapper.refresh();
            })
        }

    }

}