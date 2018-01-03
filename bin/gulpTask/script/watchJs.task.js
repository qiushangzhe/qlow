var gulp = require('gulp');
gulp.task('watch-script', ['js-move'], function () {
    gulp.watch('src/scripts/**', function (info) {
        if (info.type != 'deleted') {
            console.log(info);
            gulp
                .src(info.path)
                .pipe(gulp.dest('dist/scripts/'));
        }
    });
    gulp.watch('src/libs/**', function (info) {
        if (info.type != 'deleted') {
            console.log(info);
            gulp
                .src(info.path)
                .pipe(gulp.dest('dist/libs/'));
        }
    });
});
