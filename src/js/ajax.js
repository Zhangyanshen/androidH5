/**
 * Created by wcxiao on 2016/12/21.
 */
/**
 * 请求函数
 * @param url 接口
 * @param data 参数
 * @param callback
 */

 var http = "http://192.168.0.106:8080/";
//生成验签值
var signFun = function(obj){
    var str = '{';
    for(i in obj)
    {str +='"'+i +'":"'+obj[i]+'"'+","; }
    str = str.substring(0,str.length - 1);
    str +='},abcd12345';
    return $.md5(str);
}

var ajaxPost= function (url,data,callback){
        var paramWithSign = $.extend(true,{},data);
        delete paramWithSign.param;
        paramWithSign.param = data.param;
        var sign = signFun(data.param);
        paramWithSign.sign = sign;
    console.log(paramWithSign)
            $.ajax({
            url:http + url,
            type:'post',
            dataType:'json',
            data:{
                "data" : JSON.stringify(paramWithSign)
            },
            success:function(data){
                return callback(data);
            }
        })
};

var ajaxGet = function (url,data,callback){
    var paramWithSign ={};
    for(i in data){
        console.log(i)
        console.log(data[i])
        //paramWithSign.i = data[i];
    }

    var sign = signFun(data.params);
    paramWithSign.sign = sign;
        $.ajax({
            url:http + url,
            type:'get',
            dataType:'json',
            data:{
                "data":signFun(paramWithSign)
            },
            success:function(data){
                return callback(data);
            }
        })
};

///**
// * 请求函数(无loading效果)
// * @param url 接口
// * @param data 参数
// * @param callback
// */
//var ajaxPostUnloading =  function ( url, data, callback) {
//    $.ajax({
//        url: url,
//        type: 'post',
//        dataType: 'json',
//        data:{
//            entId : 
//            params:JSON.stringify(data),
//            sign:data.sign
//        },
//        success: function (data) {
//            return callback(data);
//        }
//    })
//};
//
//var ajaxGetUnloading =  function (entid , url, data, callback) {
//    $.ajax({
//        url: url,
//        type: 'get',
//        dataType: 'json',
//        data:{
//            entId : 
//            params:JSON.stringify(data),
//            sign:data.sign
//        },
//        success: function (data) {
//            return callback(data);
//        }
//    })
//};
