"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gulp = require("gulp");
const less = require("gulp-less");
const autoprefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");
const error_1 = require("../tools/error");
require('colors');
gulp.task('less', () => {
    return gulp.src('src/style/*.less')
        .pipe(less())
        .on('error', error_1.error)
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('dist/style'));
});
gulp.task('watch-less', ['less'], () => {
    console.log('-----------watch-less-----------'.red);
    return gulp.watch('src/style/*.less', function () {
        gulp.start('less');
    });
});
