var gulp = require('gulp');
var path = require('path');
var mock = require('n-mock');
//var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var sass = require('gulp-ruby-sass');
var watch = require('gulp-watch');
var webpack = require('gulp-webpack');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;


var PATH = {
    js: {
        src: './src/js/*.js',
        dest: './dist/js/'
    },
    scss: {
        src2:'./src/scss/page/*.scss',
        src: './src/scss/*.scss',
        dest: './dist/css/'
    },
    server: {
        root: './',
        watch: ['./src/scss/page/*.scss', './src/js/widgets/*.js', './src/views/*.html']
    }
};

//default
gulp.task('default', ['scss', 'js', 'server'], function () {

});
//sass
gulp.task('js', function () {
    return gulp.src(PATH.js.src)
        //.pipe(webpack({
        //    output: {
        //        filename: 'all.js',
        //        publicPath: "./dist/images/"
        //    },
        //    module: {
        //        loaders: [
        //            { test: /\.html$/, loader: 'html' },
        //            {
        //                test: /\.(png|jpg)$/,
        //                loader: 'url-loader?limit=10000&name=../imgs/[name].[ext]'
        //            }
        //        ]
        //    }
        //}))
        .pipe(gulp.dest(PATH.js.dest))
        .pipe(reload({stream: true}));
});
//sass
gulp.task('scss', function () {
    return sass('./src/scss/*.scss')
      .pipe(cssnano())
        .pipe(gulp.dest('./dist/css/'))
        .pipe(reload({stream: true}))
});

//gulp.task('scss', function () {
//    return sass(PATH.scss.src,PATH.scss.src2)
//        .pipe(gulp.dest(PATH.scss.dest))
//        .pipe(reload({stream: true}));
//});

// server
gulp.task('server', function () {
    //指定服务目录
    browserSync.init({
        server: PATH.server.root,
        middleware:[
            mock(__dirname + '/mocks')
        ]
    });
    //监听文件变动
    watch(PATH.server.watch[0], function () {
        runSequence('scss');
        browserSync.reload();
    });
    watch(PATH.server.watch[1], function () {
        runSequence('js');
        browserSync.reload();
    });
    watch(PATH.server.watch[2], function () {
        runSequence('js');
        browserSync.reload();
    });
    gulp.watch("src/scss/*.scss", ['scss']);
    gulp.watch("src/js/*.js", ['js']);
    gulp.watch("src/js/widgets/*.js", ['js']);
    gulp.watch("./*.html").on('change', reload);
    gulp.watch("./views/*.html").on('change', reload);
    gulp.watch("./src/views/product/*.html").on('change', reload);
    gulp.watch("./src/views/adviser/index.html").on('change', reload);
    gulp.watch("./src/views/discover/*.html").on('change', reload);
    gulp.watch("./src/views/workroom/*.html").on('change', reload);
});


























//var gulp = require('gulp');
//var uglify = require('gulp-uglify');
//var concat = require('gulp-concat');
//var cssnano = require('gulp-cssnano');
//var sass = require('gulp-ruby-sass');
//var mock = require('n-mock');
//var webpack = require('gulp-webpack');
//var browserSync = require('browser-sync').create();
//var reload = browserSync.reload;
//
//gulp.task('default',['js','scss','server'],function(){
//
//});
//
//gulp.task('js',function(){
//    return  gulp.src('./src/js/*.js')
////      .pipe(uglify())
//		.pipe(gulp.dest('./dist/js'))
//        .pipe(webpack({
//            output:{
//                filename:'all.js'
//            },
//            module:{
//                loaders:[
//                    {test:/\.html&/,loader:'html'},
//                    {
//                        test: /\.(png|jpg)$/,
//                        loader: 'url-loader?limit=10000&name=../imgs/[name].[ext]'
//                    }
//                ]
//            }
//        }))
////      .pipe(gulp.dest('./dist/js'))
//        .pipe(reload({stream: true}));
//});
//
//gulp.task('scss', function () {
//    return sass('./src/scss/*.scss')
////      .pipe(cssnano())
//        .pipe(gulp.dest('./dist/css/'))
//        .pipe(reload({stream: true}))
//});
//
//gulp.task('server',function(){
//    browserSync.init({
//        server: './',
//        middleware: [
//            mock(__dirname + '/mocks')
//        ]
//    });
//    gulp.watch("src/scss/*.scss", ['scss']);
//    gulp.watch("src/js/*.js", ['js']);
//    gulp.watch("src/js/widgets/*.js", ['js']);
//    gulp.watch("*.html").on('change', reload);
//    gulp.watch("views/*.html").on('change', reload);
//    gulp.watch("src/views/*.html").on('change', reload);
//})