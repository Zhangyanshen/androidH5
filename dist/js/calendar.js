/**
 * Created by wcxiao on 2017/1/7.
 */
var myCalendar = new SimpleCalendar('#calendar');
var vue = new Vue({
    el : 'body',
    data : {

    },
    ready : function(){
        var self = this;
    },
    methods : {
        //跳转
        jumpEdit : function(){
            var self = this;
            window.location.href = './calendarCreate.html'
        }
    }
})