import { command } from "./command";
import { task } from '../../gulpTask/index';
export class Server extends command {
    constructor() {
        super();
        this.command = "serve [options]";
        this.describe = "开启静态服务器";
        this.example_1 = "$0 serve";
        this.example_2 = "开启一个静态服务";
        this.usage = "用法: $0 <command> [options]";
        this.init();
    }
    handler(argv: any) {
        task.run('open-static-server');
    }

}