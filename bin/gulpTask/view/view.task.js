"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gulp = require('gulp');
const config_1 = require("../config");
const config = new config_1.Config();
gulp.task('view-move', function () {
    return gulp.src('src/views/**')
        .pipe(gulp.dest(config.dirList().view));
});
gulp.task('watch-page', ['view-move'], function () {
    console.log('---------watch-page---------');
    return gulp.watch('src/views/**', function (info) {
        if (info.type != 'deleted') {
            gulp.src(info.path)
                .pipe(gulp.dest('dist/views/'));
        }
    });
});
