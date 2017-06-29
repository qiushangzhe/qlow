var gulp = require('gulp');
gulp.task('watch-script',['js'],function(){
    return gulp.watch('src/**/*.js',function(){
        gulp.run('js');
    });
});
