"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notify = require("gulp-notify");
function error() {
    var args = Array.prototype.slice.call(arguments);
    notify.onError({
        title: 'compile error',
        message: '<%=error.message %>'
    }).apply(this, args); //替换为当前对象
    this.emit(); //提交
}
exports.error = error;
