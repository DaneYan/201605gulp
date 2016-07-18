var gulp = require('gulp');
//定义一个任务并且执行
gulp.task('copy',function(){
   gulp.src('./app/*/*')//指定要处理的文件
       .pipe(gulp.dest('./dist'))//指定要输出的文件路径
});
/**
 * 最终的路径 等于
 * gulp.dest指定的路径 +
 * src里面通配符开始出来的那段路径
 */
