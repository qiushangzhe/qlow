"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const gulp = require("gulp");
const config_1 = require("../config");
const config = config_1.Config();
gulp.task('init', function () {
    // //创建文件夹
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
            if (!fs.existsSync(config.fileList[i]().path)) {
                var buffer = '';
                if (config.fileList[i]().template) {
                    buffer = fs.readFileSync(config.fileList[i]().template);
                }
                fs.writeFileSync(config.fileList[i]().path, buffer, 'utf8');
            }
        }
    }
});
