var gulp = require('gulp');
gulp.task('watch-script',['js-lower'],function(){
    return gulp.watch('src/**/*.js',function(){
        gulp.run('js-lower');
    });
});
