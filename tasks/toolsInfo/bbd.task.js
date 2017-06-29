var gulp = require('gulp');
var config = require('../config');
var toosInfo = require('./toolsInfo.config.js');
var colors = require('colors');

//逼逼叨
gulp.task('bbd',function(){
    console.log('*****************^ - ^'.red+(toosInfo.welcome).yellow+'^ - ^******************'.red);
    console.log('当前项目所在路径:'.red+(config.baseDir).grey);
    console.log('脚本存放位置:'.red+(config.getScriptDirName()).grey);
    console.log('产出项目存放位置:'.red+(config.getDistPath()).grey);
});
