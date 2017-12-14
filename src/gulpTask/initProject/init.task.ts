import * as fs from 'fs';
import * as gulp from 'gulp';
import { Config } from '../config';
const config = Config();
gulp.task('init', function() {
    // //创建文件夹
    for (var i in config.dirList) {
        if (typeof config.dirList[i] == 'function') {
            if (!fs.existsSync(config.dirList[i]())) {
                fs.mkdirSync(config.dirList[i]());
            }
        }
    }
    //创建相关文件
    for (var i in config.fileList) {
        if (typeof config.fileList[i] == 'function') {
            if (!fs.existsSync(config.fileList[i]().path)) {
                var buffer:any = '';
                if (config.fileList[i]().template) {
                    buffer = fs.readFileSync(config.fileList[i]().template);
                }
                fs.writeFileSync(config.fileList[i]().path, buffer, 'utf8');
            }
        }
    }
});