#!/usr/bin/env node

var requireDir = require('require-dir');
var dir = requireDir('./tasks', { recurse: true });
const gulp = require('gulp');
import * as yargs from 'yargs';
/**
 * 说明:创建项目
 * 指令:qlow init --t=xxx         
 * 参数说明:
 * - t : 类型，默认为null 普通web项目
 */



var argv = yargs.usage('用法: $0 <command> [options]')
    // 创建一个普通web项目
    .command({
        command: 'init [options]',
        aliases: ['t'],
        desc: '初始化项目',
        handler: (argv) => {
            console.log(argv);
            // gulp.start("init");
        }
    }).example('$0 init', '初始化一个项目')
    .wrap(100)
    .argv;

const command = argv._[0];

if (!command) {
    yargs.showHelp();
}