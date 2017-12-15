import * as fs from 'fs';
import * as gulp from 'gulp';
import { Config } from '../config';
const config = new Config();
require('colors');
const boxen = require('boxen');
gulp.task('init', function () {
    //创建文件夹
    const dirlist = config.dirList();
    outputLineText('开始创建文件夹');
    for (var i in dirlist) {
        if (!fs.existsSync(dirlist[i])) {
            fs.mkdirSync(dirlist[i]);
            console.log(`${dirlist[i]}创建成功`.white);
        } else {
            console.log(`${dirlist[i]}已存在，无需创建`.gray);
        }
    }
    outputLine();
    outputLineText('开始创建文件');
    //创建相关文件
    const filelist = config.fileList();
    for (var i in filelist) {
        if (!fs.existsSync(filelist[i].path)) {
            var buffer: any = '';
            if (filelist[i].template) {
                buffer = fs.readFileSync(filelist[i].template);
            }
            fs.writeFileSync(filelist[i].path, buffer, 'utf8');
            console.log(`${filelist[i].path}文件创建成功`.white);
        } else {
            console.log(`${filelist[i].path}文件已存在，无需创建`.gray);
        }
    }
    outputLine();
});

function outputLine(){
    console.log("-------------------------------------------------------".gray);
}

function outputLineText(text){
    let buffer = `---------------------------`.gray + `${text}`.yellow + `---------------------------`.gray;
    console.log(buffer);
}
