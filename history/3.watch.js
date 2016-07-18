var gulp = require('gulp');

gulp.task('copy',function(){
   gulp.src('./app/index.html').pipe(gulp.dest('./dist'));
});

/*gulp.task('watch',function(){
   gulp.watch('./app/index.html',['copy'])
});*/

gulp.task('watch2',function(){
   /**
    * event是一个对象，有两个属性
    * type 是文件变化的类型 added changed deleted
    * path 变化的文件的绝对路径
    */
   gulp.watch('./app/index.html',function(event){
      console.log(event);
      if(event.type == 'changed'){
         gulp.start('copy');
      }
   })
});