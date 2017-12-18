"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("./command");
const index_1 = require("../../gulpTask/index");
class Less extends command_1.command {
    constructor() {
        super();
        this.command = "less [options]";
        this.describe = "编译less文件";
        this.example_1 = "$0 less";
        this.example_2 = "编译less文件";
        this.usage = "用法: $0 <command> [options]";
        this.init();
    }
    handler(argv) {
        if (argv.watch) {
            index_1.task.run('watch-less');
        }
        else {
            index_1.task.run('less');
        }
    }
}
exports.Less = Less;
