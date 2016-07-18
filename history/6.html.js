var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
gulp.task('html',function(){
   gulp.src('./app/index.html')
       .pipe($.minifyHtml())
       .pipe(gulp.dest('./dist'))
});