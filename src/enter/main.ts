#!/usr/bin/env node
import * as yargs from 'yargs';
import { initProject } from './command/initProject';

/**
 * 指令:qlow init --type=xxx     
 * 说明:创建项目
 * 参数说明:
 *         type=>创建的项目类型，默认为普通web项目
 */
const yarg_init = new initProject();
yargs.usage(yarg_init.usage).command(yarg_init.commandObj).example(yarg_init.example_1,yarg_init.example_2)

/**
 * 运行
 */
const argv = yargs.wrap(100).argv;
argv._[0] || yargs.showHelp();

