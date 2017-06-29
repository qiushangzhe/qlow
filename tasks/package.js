var gulp = require('gulp');
var path = require('path');
var webpack = require('webpack');
var webpackGulp = require('gulp-webpack');
var webpackPath = path.join(__dirname,'..','webpack.config.js');
//实时监听js的变化
gulp.task('js', function() {
    return gulp.src('src/scripts/**/*.js')
        .pipe(webpackGulp(require(webpackPath)), webpack)
        .pipe(gulp.dest('./dist/js'));
});

// path.join(__dirname,'..','..','dist'))
