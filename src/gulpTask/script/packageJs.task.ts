var gulp = require('gulp');
var path = require('path');
// var webpack = require('webpack');
// var webpackGulp = require('gulp-webpack');
// var uglify = require('gulp-uglify');
// var webpackPath = path.join(__dirname,'../..','webpack.config.js');
//实时监听js的变化
gulp.task('js', function() {
    return gulp.src('src/scripts/*.js')
        // .pipe(webpackGulp(require(webpackPath)), webpack)
        .pipe(gulp.dest('./dist/scripts'));
});

gulp.task('js-lower', function() {
    return gulp.src('src/scripts/*.js')
        // .pipe(uglify())
        .pipe(gulp.dest('dist/scripts'));
});

gulp.task('js-move', function() {
    gulp.src('src/libs/*.js').pipe(gulp.dest('dist/libs'));
    gulp.src('src/scripts/*.js').pipe(gulp.dest('dist/scripts'));

});

// path.join(__dirname,'..','..','dist'))