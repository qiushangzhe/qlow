import * as gulp from 'gulp';
const htmltpl = require('gulp-html-tpl');
const artTemplate = require('art-template');

gulp.task('rendering-html', function() {
    return gulp.src('views/**')
        .pipe(htmltpl({
            tag: 'template',
            paths: ['../templates'],
            engine: function(template, data) {
                return artTemplate.compile(template)(data)
            },
            data: {
                useHeader: false
            },
            beautify: {
                indent_char: ' ',
                indent_with_tabs: false
            }
        }))
        .pipe(gulp.dest('./dist/views'));
});