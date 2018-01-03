var gulp = require('gulp');
import {Config} from '../config';
const htmltpl = require('gulp-html-tpl');
const artTemplate = require('art-template');
const fs = require('fs');
const config = new Config();

gulp.task('view-move', ['rendering-html'], function () {
    return gulp
        .src('src/views/*.html')
        .pipe(gulp.dest('dist/'));
});

gulp.task('watch-page', ['rendering-html'], function () {
    return gulp.watch('src/views/**', function (info) {
        if (info.type != 'deleted') {
            console.log(info);
            gulp
                .src(info.path)
                .pipe(htmltpl({
                    tag: 'template',
                    paths: ['../templates'],
                    engine: function (template, data) {
                        if (template) {
                            return artTemplate.compile(template)(data)
                        }
                    },
                    data: {
                        useHeader: false
                    },
                    beautify: {
                        indent_char: ' ',
                        indent_with_tabs: false
                    }
                }))
                .pipe(gulp.dest('./dist/'));
        } else if (info.type == 'added') {}
    });
});