import * as gulp from 'gulp'
import * as less from 'gulp-less'
import * as autoprefixer from 'gulp-autoprefixer';
import * as concat from 'gulp-concat';
import { error } from '../tools/error';
console.log(error);
require('colors');
gulp.task('less', () => {
    return gulp.src('src/style/*.less')
        .pipe(less())
        .on('error',error)
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('dist/style'));
});

gulp.task('watch-less',['less'], () => {
    console.log('-----------watch-less-----------'.red);
    return gulp.watch('src/style/*.less', function() {
        gulp.start('less');
    });
})