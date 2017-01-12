/**
 * Created by wcxiao on 2016/12/29.
 */
var vue = new Vue({
    el : 'body',
    data : {

    },
    ready : function(){
        var self = this;
    },
    methods : {
        //跳转到预约页
        yuyueBtn : function(){
            var self = this;
            window.location.href = '../../views/order.html'
        }

    }
})