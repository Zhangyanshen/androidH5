/**
 * Created by wcxiao on 2016/12/30.
 */
var vue = new Vue({
    el : 'body',
    data : {

    },
    ready : function(){
        var self = this;
    },
    methods : {
        //点击添加沟通记录
        addTalkRecord : function(){
            var self  = this;
            window.location.href = '../../views/addUserRecord.html';
        },
        //点击保存沟通记录
        saveTalkRecord : function(){
            var self  = this;
            window.location.href = '../../views/customInfo.html';
        },
        //点击编辑沟通记录
        editTalkRecord : function(){
            var self  = this;
            window.location.href = '../../views/addUserRecord.html';
        },
        //点击客户详情
        infoTalkRecord : function(){
            var self  = this;
            window.location.href = '../../views/customDetail.html';
        },
        //点击保存客户详情
        saveUserInfo : function(){
            var self  = this;
            window.location.href = '../../index.html#!/adviser';
        },
        //点击查看沟通记录
        seeTalkRecord : function(){
            var self = this;
            window.location.href = '../../views/userCommunication.html';
        }
    }
})