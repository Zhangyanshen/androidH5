/**
 * Created by wcxiao on 2016/12/23.
 */
var vue = new Vue({
    el : 'body',
    data : {

    },
    ready : function(){
        var self = this;
        self.swiperInit();
    },
    methods : {
        //初始化swiper
        swiperInit : function(){
            var self = this;
            var swiper = new Swiper('.swiper-container', {
                slidesPerView: "auto",
                centeredSlides: !0,
                watchSlidesProgress: !0,
                pagination: ".swiper-pagination",
                paginationClickable: !0,
                paginationBulletRender: function (swiper,index, className) {
                    switch(index){
                        case 0:name="待受理";break;
                        case 1:name="已签约";break;
                        case 2:name="已拒绝";break;
                        default:name=""
                    }
                    return '<span class="' + className  + '">'+name +'</span>';
                }
            });
        }
    }
})

