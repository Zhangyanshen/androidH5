/**
 * Created by wcxiao on 2016/12/22.
 */
module.exports = {
    template: require('../../views/adviser/index.html'),
    data: function () {
        return {}
    },
    ready: function () {
        var self = this;
        self.allCus();
        self.filterBtn();
    },
    methods: {
        //tab切换
        allCus : function(){
            var self = this;
            $('.btn1').click(function(){
                $('.filterBtn').css({transform : 'scale(0)'});
                $('.tabBtn').removeClass('colBlue2');
                $(this).addClass('colBlue2');
                $('.custom1').show();
                $('.custom2').hide();

            })

            $('.btn2').click(function(){
                $('.filterBtn').css({transform : 'scale(1)'});
                $('.tabBtn').removeClass('colBlue2');
                $(this).addClass('colBlue2');
                $('.custom1').hide();
                $('.custom2').show();
            })
        },
        //筛选
        filterBtn : function(){
            var self = this;
            $('.filterBtn').click(function(e){
                var evt = e || event;
                evt.stopPropagation();
                $('.filterBox').toggle();
                $('.filter').slideToggle();
            })
            $('.addBtn').click(function(){
                $('.addBox').toggleClass('activeAddBox');
            })

            $('.filterAll').click(function(){
                $('.filterTab span').removeClass('activeFilter');
                $(this).addClass('activeFilter');
                $('.panel1').show();
                $('.panel2').hide();
                $('.panel3').hide();
                layer.msg('全部再投客户');
                $('.filterBox').hide();
                $('.filter').slideUp();
            })
            $('.filterNumber').click(function(){
                $('.filterTab span').removeClass('activeFilter');
                $(this).addClass('activeFilter');
                $('.panel1').hide();
                $('.panel2').show();
                $('.panel3').hide();
            })
            $('.filterMoney').click(function(){
                $('.filterTab span').removeClass('activeFilter');
                $(this).addClass('activeFilter');
                $('.panel1').hide();
                $('.panel2').hide();
                $('.panel3').show();
            })
            $('.panel2 span').click(function(){
                layer.msg( $(this).html());
                $('.filterBox').hide();
                $('.filter').slideUp();
            })
            $('.panel3 span').click(function(){
                layer.msg( $(this).html());
                $('.filterBox').hide();
                $('.filter').slideUp();
            })
        },
        //跳转到添加客户沟通记录
        jumpUser : function(e){
            var self = this;
            var evt = e || event;
            evt.stopPropagation();
            window.location.href = '../../../views/addUserRecord.html'
        },
        //跳转到客户信息
        jumpUserInfo : function(e){
            var self = this;
            var evt = e || event;
            evt.stopPropagation()
            window.location.href = '../../../views/customInfo.html'
        },
        //跳转到搜索页
        jumpSearch : function(){
            var self = this;
            window.location.href = '../../../views/search.html'
        }
    }
}