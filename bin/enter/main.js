#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yargs = require("yargs");
const initProject_1 = require("./command/initProject");
const server_1 = require("./command/server");
const less_1 = require("./command/less");
const start_1 = require("./command/start");
/**
 * 指令:qlow init --type=xxx
 * 说明:创建项目
 * 参数说明:
 *         type=>创建的项目类型，默认为普通web项目
 */
regist(new server_1.Server());
regist(new initProject_1.initProject());
regist(new less_1.Less());
regist(new start_1.Start());
/**
 * 运行
 */
const argv = yargs.wrap(100).argv;
argv._[0] || yargs.showHelp();
function regist(obj) {
    yargs.usage(obj.usage).command(obj.commandObj).example(obj.example_1, obj.example_2);
}
