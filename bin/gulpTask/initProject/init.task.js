"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const gulp = require("gulp");
const config_1 = require("../config");
const config = new config_1.Config();
gulp.task('init', function () {
    //创建文件夹
    const dirlist = config.dirList();
    for (var i in dirlist) {
        if (!fs.existsSync(dirlist[i])) {
            fs.mkdirSync(dirlist[i]);
        }
    }
    //创建相关文件
    const filelist = config.fileList();
    for (var i in filelist) {
        if (!fs.existsSync(filelist[i].path)) {
            var buffer = '';
            if (filelist[i].template) {
                buffer = fs.readFileSync(filelist[i].template);
            }
            fs.writeFileSync(filelist[i].path, buffer, 'utf8');
        }
    }
});
