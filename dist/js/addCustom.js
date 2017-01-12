/**
 * Created by wcxiao on 2016/12/30.
 */
var vue = new Vue({
    el : 'body',
    data : {

    },
    ready : function(){
        var self = this;
        self.sexBtn();
    },
    methods : {
        //点击性别
        sexBtn : function(){
            var self = this;
            $('.sexMale').click(function(){
                $('.sex span').find('i').removeClass('checked');
                $(this).find('i').addClass('checked');
            })
            $('.sexFemale').click(function(){
                $('.sex span').find('i').removeClass('checked');
                $(this).find('i').addClass('checked');
            })
        }
    }
})