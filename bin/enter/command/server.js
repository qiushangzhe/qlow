"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("./command");
const index_1 = require("../../gulpTask/index");
class Server extends command_1.command {
    constructor() {
        super();
        this.command = "serve [options]";
        this.describe = "开启静态服务器";
        this.example_1 = "$0 serve";
        this.example_2 = "开启一个静态服务";
        this.usage = "用法: $0 <command> [options]";
        this.init();
    }
    handler(argv) {
        index_1.task.run('open-static-server');
    }
}
exports.Server = Server;
