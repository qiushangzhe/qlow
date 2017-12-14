"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("./command");
const index_1 = require("../../gulpTask/index");
class initProject extends command_1.command {
    constructor() {
        super();
        this.aliases = ['type'];
        this.command = "init [options]";
        this.describe = "初始化一个项目";
        this.example_1 = "$0 init";
        this.example_2 = "初始化一个项目";
        this.usage = "用法: $0 <command> [options]";
        this.init();
    }
    handler(argv) {
        index_1.task.run('init');
    }
    init() {
        this.commandObj = {
            command: this.command,
            aliases: this.aliases,
            describe: this.describe,
            handler: this.handler
        };
    }
}
exports.initProject = initProject;
