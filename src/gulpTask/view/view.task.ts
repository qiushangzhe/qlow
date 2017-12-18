var gulp = require('gulp');
import { Config } from '../config';
const config = new Config();
gulp.task('view-move',function(){
    return gulp.src('src/views/**')
        .pipe(gulp.dest(config.dirList().view))
});

gulp.task('watch-page',['view-move'],function(){
    console.log('---------watch-page---------');
    return gulp.watch('src/views/**',function(info){
        if(info.type != 'deleted'){
            gulp.src(info.path)
                .pipe(gulp.dest('dist/views/'))
        }
    });
});