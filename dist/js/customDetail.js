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
        //点击编辑进入编辑页面
        intoEdit : function(){
            var self = this;
            window.location.href = '../../views/customDetailEdit.html'
        }
    }
})