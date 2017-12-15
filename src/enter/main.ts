#!/usr/bin/env node
import * as yargs from 'yargs';
import { initProject } from './command/initProject';
import { Server } from './command/server';
import { Less } from './command/less';
import { Start } from './command/start';
/**
 * 指令:qlow init --type=xxx     
 * 说明:创建项目
 * 参数说明:
 *         type=>创建的项目类型，默认为普通web项目
 */
regist(new Server());
regist(new initProject());
regist(new Less());
regist(new Start());
/**
 * 运行
 */
const argv = yargs.wrap(100).argv;
argv._[0] || yargs.showHelp();

function regist(obj){
    yargs.usage(obj.usage).command(obj.commandObj).example(obj.example_1,obj.example_2)
}