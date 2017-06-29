var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');
var requireDir = require('require-dir');
var dir1 = requireDir('./script');
var dir2 = requireDir('./toolsInfo');
var dir3 = requireDir('./initProject');
var dir4 = requireDir('./staticServer');
var dir5 = requireDir('./movePage');
gulp.task('default',function(cb){
    gulpSequence('init','movePage','watch-script','open-static-server',cb)
});
