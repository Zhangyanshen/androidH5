/**
 * Created by wcxiao on 2016/12/31.
 */
var vue = new Vue({
    el : 'body',
    data : {

    },
    ready : function(){
        var self = this;
    },
    methods : {
        addTalkRecord : function(){
            var self = this;
            window.location.href = '../../views/addUserRecord.html'
        }
    }
})