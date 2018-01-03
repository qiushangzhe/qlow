import * as gulp from 'gulp';
gulp.task('move-image', function () {
    return gulp
        .src('src/images/**')
        .pipe(gulp.dest('./dist/images'));
})

gulp.task('watch-image', ['move-image'], function () {
    gulp
        .watch('src/images/**', function (info) {
            if (info.type != 'deleted') {
                console.log(info);
                gulp
                    .src(info.path)
                    .pipe(gulp.dest('dist/images/'))
            }
        })
})
