var Vue = require('vue');
var VueRouter = require('vue-router');

Vue.use(VueRouter)


var Workroom = Vue.extend(require('./widgets/workroom.js'));
var Discover = Vue.extend(require('./widgets/discover.js'));
var Product = Vue.extend(require('./widgets/product.js'));
var Adviser = Vue.extend(require('./widgets/adviser.js'));

//var myWealthy = Vue.extend( require('./widgets/wealthy/myWealthy.js'))
//var Product = Vue.extend({
//    template: '<p>This is bar!</p>'
//})


// 路由器需要一个根组件。
// 出于演示的目的，这里使用一个空的组件，直接使用 HTML 作为应用的模板
var App = Vue.extend({})

// 创建一个路由器实例
// 创建实例时可以传入配置参数进行定制，为保持简单，这里使用默认配置
var router = new VueRouter()

// 定义路由规则
// 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend
// 创建的组件构造函数，也可以是一个组件选项对象。
// 稍后我们会讲解嵌套路由
router.map({

    '/discover': {
        component: Discover
    },
    '/product': {
        component: Product
    },
    '/workroom': {
        component: Workroom
    },
    '/adviser': {
        component: Adviser
    }
})
//默认路由页面
router.redirect({
    '/': '/discover'
});
// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, '#app')