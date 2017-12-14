import './initProject/init.task';
import * as gulp from 'gulp';

export const task = {
    run : (command) =>{
        gulp.start(command);
    }
}