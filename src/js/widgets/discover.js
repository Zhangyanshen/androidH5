/**
 * Created by wcxiao on 2016/12/22.
 */
module.exports = {
    template: require('../../views/discover/index.html'),
    data: function () {
        return {}
    },
    ready: function () {
        var self = this;
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            spaceBetween: 0,
            centeredSlides: true,
            autoplay: 2500,
            loop:true,
            autoplayDisableOnInteraction: false
        });

        self.tabBtn();
        self.historyBtn();
    },
    methods: {
        jumpZixun : function(){
            var self = this;
            window.location.href = '../../../views/discoverNews.html'
        },
        jumpNews : function(){
            var self = this;
            window.location.href = '../../../views/discoverSource.html'
        },
        tabBtn : function(){
            $('.tabBtn1').click(function(){
                $('.tabBtn').removeClass('tabActive');
                $(this).addClass('tabActive');
                $('.tabs').removeClass('activeShow').addClass('activeHide');
                $(this).parents().next().find('.panel1').addClass('activeShow').removeClass('activeHide');

            })
            $('.tabBtn2').click(function(){
                $('.tabBtn').removeClass('tabActive');
                $(this).addClass('tabActive');
                $('.tabs').removeClass('activeShow').addClass('activeHide');
                $(this).parents().next().find('.panel2').addClass('activeShow').removeClass('activeHide');

            })
        },
        historyBtn : function(){
            $('.hisBorder').click(function(){
                $('.historyCon').slideToggle();
            })
        }

    }

}