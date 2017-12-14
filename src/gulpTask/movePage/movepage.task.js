var gulp = require('gulp');
var config = require('../config.js')();
gulp.task('movePage',function(){
    return gulp.src('src/views/**')
        .pipe(gulp.dest(config.dirList.getDistPath()))
});
