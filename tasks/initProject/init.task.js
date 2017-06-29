var fs = require('fs');
var gulp = require('gulp');
var config = require('../config')();
gulp.task('init', function() {
    //创建文件夹
    for (var i in config.dirList) {
        if (typeof config.dirList[i] == 'function') {
            if (!fs.existsSync(config.dirList[i]())) {
                fs.mkdirSync(config.dirList[i]());
            }
        }
    }
    //创建相关文件
    for (var i in config.fileList) {
        if (typeof config.fileList[i] == 'function') {
            if (!fs.existsSync(config.fileList[i]())) {
                fs.writeFileSync(config.fileList[i](),'','utf8');
            }
        }
    }
});
