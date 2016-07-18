var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
gulp.task('image',function(){
   gulp.src('./app/image/*.png')
       .pipe($.imagemin())
       .pipe(gulp.dest('./dist/image'))
});