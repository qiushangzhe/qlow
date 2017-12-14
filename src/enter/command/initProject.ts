import { command } from "./command";
import * as yargs from 'yargs';
import { task } from '../../gulpTask/index';


export class initProject extends command{
    public commandObj:yargs.CommandModule;
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

    handler(argv: any) {
        task.run('init');
    }

    init(){
        this.commandObj = {
            command:this.command,
            aliases:this.aliases,
            describe:this.describe,
            handler:this.handler
        }
    }
}