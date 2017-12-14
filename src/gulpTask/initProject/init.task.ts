import * as fs from 'fs';
import * as gulp from 'gulp';
import { Config } from '../config';
const config = new Config();
gulp.task('init', function () {
    //创建文件夹
    const dirlist = config.dirList();
    for (var i in dirlist) {
        if (!fs.existsSync(dirlist[i])) {
            fs.mkdirSync(dirlist[i]);
        }
    }
    //创建相关文件
    const filelist = config.fileList();
    for (var i in filelist) {
        if (!fs.existsSync(filelist[i].path)) {
            var buffer: any = '';
            if (filelist[i].template) {
                buffer = fs.readFileSync(filelist[i].template);
            }
            fs.writeFileSync(filelist[i].path, buffer, 'utf8');
        }

    }
});