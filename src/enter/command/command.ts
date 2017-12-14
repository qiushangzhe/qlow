
export abstract class command {
    // 指令用法
    usage: string;
    // 指令
    command: string;
    // 介绍
    describe: string;
    // 参数
    aliases: Array<string>;
    // 例子
    example_1: string;
    example_2: string;
    // 执行函数
    abstract handler(argv);
}