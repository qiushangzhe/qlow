var gulp = require('gulp');
var path = require('path');
var webpack = require('webpack');
var webpackGulp = require('gulp-webpack');
var webpackPath = path.join(__dirname,'../..','webpack.config.js');
//实时监听js的变化
gulp.task('js', function() {
    return gulp.src('src/app.js')
        .pipe(webpackGulp(require(webpackPath)), webpack)
        .pipe(gulp.dest('./dist/scripts'));
});

// path.join(__dirname,'..','..','dist'))
