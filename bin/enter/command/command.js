"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class command {
    init() {
        this.commandObj = {
            command: this.command,
            aliases: this.aliases,
            describe: this.describe,
            handler: this.handler
        };
    }
}
exports.command = command;
