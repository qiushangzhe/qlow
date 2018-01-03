"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gulp = require('gulp');
var staticServer = require('browser-sync').create();
const config_1 = require("../config");
const config = new config_1.Config();
//开启一个静态服务器
gulp.task('open-static-server', function () {
    staticServer.init({
        server: {
            baseDir: config.dirList().dist,
            middleware: [
                // 中间件。。。。。。可设置多个。
                function (req, res, next) {
                    // console.log("Hi from middleware");
                    next();
                }
            ]
        },
        ui: false,
        startPath: "/",
        //监听文件
        files: [
            config.dirList().dist,
        ],
        reloadOnRestart: true,
        // logPrefix: "super-qlow",//这里是log的前缀
        logLevel: "silent",
        // logFileChanges: false,//不记录文件更改
        open: true,
        notify: false,
        // codeSync:false,
        // injectChanges: true, //注入CSS改变  false - 不要尝试注入，只是做一个页面刷新
        // ghostMode: false, //不同步页面操作行为
        port: 10800,
    });
});
