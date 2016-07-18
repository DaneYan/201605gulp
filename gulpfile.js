var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
gulp.task('less',function(){
   gulp.src('./app/less/*.less')
       .pipe($.less())
       .pipe(gulp.dest('./dist/css'))
       .pipe($.minifyCss())
       .pipe($.rename('index.min.css'))
       .pipe(gulp.dest('./dist/css'))
});