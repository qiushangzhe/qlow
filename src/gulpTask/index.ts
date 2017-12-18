import './initProject/init.task';
import './tools/bbd.task';
import './staticServer/staticServer.task';
import './style/style.task';
import './view/view.task';
import * as gulp from 'gulp';
gulp.task('dev',['watch-less','watch-page','open-static-server']);
export const task = {
    run : (command) =>{
        gulp.start(command);
    }
}