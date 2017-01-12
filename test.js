/**
 * Created by wcxiao on 2016/12/23.
 */
var mySwiper = new Swiper(".swiper-container", {
    slidesPerView: "auto",
    centeredSlides: !0,
    watchSlidesProgress: !0,
    pagination: ".swiper-pagination",
    paginationClickable: !0,
    paginationBulletRender: function (a, b) {
        switch (a) {
            case 0:
                name = "洗";
                break;
            case 1:
                name = "剪";
                break;
            case 2:
                name = "烫";
                break;
            case 3:
                name = "染";
                break;
            case 4:
                name = "护";
                break;
            case 5:
                name = "套";
                break;
            default:
                name = ""
        }
        return '<span class="' + b + '"><i>' + name + "</i></span>"
    },
    onProgress: function (a) {
        var b, c, d;
        for (b = 0; b < a.slides.length; b++)c = a.slides[b], d = c.progress, scale = 1 - Math.min(Math.abs(.2 * d), 1), es = c.style, es.opacity = 1 - Math.min(Math.abs(d / 2), 1), es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = "translate3d(0px,0," + -Math.abs(150 * d) + "px)"
    },
    onSetTransition: function (a, b) {
        for (var c = 0; c < a.slides.length; c++)es = a.slides[c].style, es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = b + "ms"
    }
});