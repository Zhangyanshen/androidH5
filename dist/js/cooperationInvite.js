/**
 * Created by wcxiao on 2017/1/3.
 */
var vue = new Vue({
    el : 'body',
    data : {

    },
    ready : function(){
        var self = this;
        self.tab();
    },
    methods : {
        tab : function(){
            var self = this;
            $('.inviteTop span').click(function(){
                $('.inviteTop span').removeClass('inviteActive');
                $(this).addClass('inviteActive');
            })
            $('.tab1').click(function(){
                $('.invitePanel2').hide();
                $('.invitePanel1').show();
            })
            $('.tab2').click(function(){
                $('.invitePanel1').hide();
                $('.invitePanel2').show();
            })

        }
    }
})