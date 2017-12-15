import './initProject/init.task';
import './toolsInfo/bbd.task';
import './staticServer/staticServer.task'
import * as gulp from 'gulp';

export const task = {
    run : (command) =>{
        gulp.start(command);
    }
}