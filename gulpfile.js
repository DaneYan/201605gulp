var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
gulp.task('js',function(){
    gulp.src('./app/js/*.js')
        .pipe($.jshint())//执行代码检查
        .pipe($.jshint.reporter())//输出检查结果
});
