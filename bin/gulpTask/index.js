"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./initProject/init.task");
require("./tools/bbd.task");
require("./staticServer/staticServer.task");
require("./style/style.task");
require("./view/view.task");
const gulp = require("gulp");
gulp.task('dev', ['watch-less', 'watch-page', 'open-static-server']);
exports.task = {
    run: (command) => {
        gulp.start(command);
    }
};
