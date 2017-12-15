import { command } from "./command";
import { task } from '../../gulpTask/index';
export class Start extends command {
    constructor() {
        super();
        this.command = "start [options]";
        this.describe = "开启静态服务器";
        this.example_1 = "$0 start";
        this.example_2 = "开启一个静态服务";
        this.usage = "用法: $0 <command> [options]";
        this.init();
    }
    handler(argv: any) {
        task.run('dev');
    }

}