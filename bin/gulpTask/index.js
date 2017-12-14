"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./initProject/init.task");
const gulp = require("gulp");
exports.task = {
    run: (command) => {
        gulp.start(command);
    }
};
