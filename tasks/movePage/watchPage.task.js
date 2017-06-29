var gulp = require('gulp');
var config = require('../config.js')();
gulp.task('watch-page',['movePage'],function(){
    return gulp.watch('src/views/**',function(info){
        if(info.type != 'deleted'){
            gulp.src(info.path)
                .pipe(gulp.dest(config.dirList.getDistPath()))
        }
    });
});
