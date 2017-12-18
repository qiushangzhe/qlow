"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require('path');
class Config {
    constructor() {
        // 当前执行qlow工具的目录
        this.baseDir = path.join(process.cwd());
        // src的文件夹名
        this.srcDirName = 'src';
        this.scriptDirName = 'scripts';
        this.distDirName = 'dist';
        this.styleDirName = 'style';
        this.libDirName = 'libs';
        this.pictureDirName = 'images';
        this.viewsDirName = 'views';
    }
    getName(name) {
        switch (name) {
            case 'srcDirName':
                return this.srcDirName;
            case 'scriptDirName':
                return this.scriptDirName;
            case 'distDirName':
                return this.distDirName;
            case 'styleDirName':
                return this.styleDirName;
            case 'libDirName':
                return this.libDirName;
            case 'pictureDirName':
                return this.pictureDirName;
            case 'viewsDirName':
                return this.viewsDirName;
        }
        ;
    }
    ;
    fileList() {
        const list = {
            indexFile: {
                path: path.join(this.baseDir, this.srcDirName, this.viewsDirName, "index.html"),
                template: path.join(__dirname, '../../src/template', 'index.template.html'),
            },
            styleFile: {
                path: path.join(this.baseDir, this.srcDirName, this.styleDirName, "main.less"),
                template: ''
            },
            scriptFile: {
                path: path.join(this.baseDir, this.srcDirName, this.scriptDirName, "main.js"),
                template: ''
            }
        };
        return list;
    }
    dirList() {
        const list = {
            src: path.join(this.baseDir, this.srcDirName),
            script: path.join(this.baseDir, this.srcDirName, this.scriptDirName),
            view: path.join(this.baseDir, this.srcDirName, this.viewsDirName),
            style: path.join(this.baseDir, this.srcDirName, this.styleDirName),
            lib: path.join(this.baseDir, this.srcDirName, this.libDirName),
            pic: path.join(this.baseDir, this.srcDirName, this.pictureDirName),
            dist: path.join(this.baseDir, this.distDirName)
        };
        return list;
    }
}
exports.Config = Config;
