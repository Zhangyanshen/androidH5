/**
 * Created by wcxiao on 2017/1/7.
 */
var vue = new Vue({
    el : 'body',
    data : {

    },
    ready : function(){
        var self = this;
    },
    methods : {
        //跳转
        jumpSeek : function(){
            var self = this;
            window.location.href = './calendarEdit.html'
        }
    }
})