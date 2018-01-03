import './initProject/init.task';
import './tools/bbd.task';
import './staticServer/staticServer.task';
import './style/style.task';
import './view/view.task';
import './script/packageJs.task';
import './script/watchJs.task';
import './image/image.task';
import './html/template.task';
import * as gulp from 'gulp';
gulp.task('dev', ['watch-less', 'watch-page', 'watch-script', 'watch-image', 'open-static-server']);
export const task = {
    run: (command) => {
        gulp.start(command);
    }
}