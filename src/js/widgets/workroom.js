/**
 * Created by wcxiao on 2016/12/22.
 */
module.exports = {
    template: require('../../views/workroom/index.html'),
    data: function () {
        return {}
    },
    ready: function () {
        var self = this;
    },
    methods: {
        //跳转到预约处理
        jumpOrderDeal : function(){
            var self = this;
            window.location.href = '../../../views/orderDeal.html';
        },
        //跳转到沟通记录
        jumpTalk : function(){
            var self = this;
            window.location.href = '../../../views/userCommunication.html';
        },
        //跳转到分享货客
        jumpShare : function(){
            var self = this;
            //window.location.href = '.././../views/addUserRecord.html';
        },
        //跳转到信息披露
        jumpInfo : function(){
            var self = this;
            window.location.href = '../../../views/infoDisclosure.html';
        },
        //跳转到服务支持
        jumpService : function(){
            var self = this;
            window.location.href = '../../../views/serviceSupport.html';
        },
        //跳转到本月佣金
        jumpMoney : function(){
            var self = this;
            window.location.href = '../../../views/moneyCount.html';
        },
        //跳转到我的团队
        jumpMyTeam : function(){
            var self = this;
            window.location.href = '../../../views/myTeam.html';
        },
        //跳转到个人信息设置
        jumpInfoSetting : function(){
            var self = this;
            window.location.href = '../../../views/personInfo.html';
        }


    }
}