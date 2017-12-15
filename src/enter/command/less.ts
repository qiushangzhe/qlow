import { command } from "./command";
import { task } from '../../gulpTask/index';
export class Less extends command {
    constructor() {
        super();
        this.command = "less [options]";
        this.describe = "编译less文件";
        this.example_1 = "$0 less";
        this.example_2 = "编译less文件";
        this.usage = "用法: $0 <command> [options]";
        this.init();
    }
    handler(argv: any) {
        if (argv.watch) {
            task.run('watch-less');
        }
        else {
            task.run('less');
        }
    }

}