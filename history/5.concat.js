var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
gulp.task('uglify',function(){
   // ! 表示排除掉某个文件
   gulp.src(['./app/js/*.js','!./app/js/tmp.js'])
       .pipe($.concat('app.js'))
       .pipe(gulp.dest('dist/js'))
       .pipe($.uglify())
       .pipe($.rename('app.min.js'))
       .pipe(gulp.dest('dist/js'))
});