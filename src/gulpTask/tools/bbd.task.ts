import * as gulp from 'gulp';
import { Config } from '../config';
require('colors');
const config = new Config();
const text = "欢迎使用大哲前端自动化工具qlow";
const boxen = require('boxen');
//逼逼叨
gulp.task('bbd', function() {
    let line1 = '*****************^ - ^'.red + (text).yellow + '^ - ^******************'.red;
    let line2 = '当前项目所在路径:'.magenta + (config.baseDir).grey;
    // console.log('脚本存放位置:'.red + (config.fileList().scriptFile).grey);
    let line3 = '产出项目存放位置:'.magenta + (config.dirList().dist).grey;
    let line4 = '项目开发路径'.magenta + (config.dirList().src).gray;
    console.log(boxen(
        `${line1}\n${line2}\n${line3}\n${line4}`,{
        padding: 1,
        borderStyle: 'double-single',
        dimBorder:true,
        borderColor:'yellow',
        float:'left',
        align:"center"
    }));
});