var path = require('path');
module.exports = {
    //当前项目路径
    baseDir : path.join(__dirname,'..'),
    srcDirName : 'src',
    scriptDirName : 'scripts',
    distDirName : 'dist',
    styleDirName : 'style',
    libDirName : 'libs',
    pictureDirName : 'images',
    viewsDirName : 'views',
    //src
    getSrcPath : function(){
        var srcPath = path.join(this.baseDir,this.srcDirName);
        return srcPath;
    },
    //script
    getScriptDirName:function(){
        var srcPath = path.join(this.baseDir,this.srcDirName,this.scriptDirName);
        return srcPath;
    },
    //views
    getViewsDirName:function(){
        var srcPath = path.join(this.baseDir,this.srcDirName,this.viewsDirName);
        return srcPath;
    },
    //style
    getStylePath:function(){
        var srcPath = path.join(this.baseDir,this.srcDirName,this.styleDirName);
        return srcPath;
    },
    //lib
    getLibPath:function(){
        var srcPath = path.join(this.baseDir,this.srcDirName,this.libDirName);
        return srcPath;
    },
    //lib
    getPicturePath:function(){
        var srcPath = path.join(this.baseDir,this.srcDirName,this.pictureDirName);
        return srcPath;
    },
    //dist
    getDistPath:function(){
        var srcPath = path.join(this.baseDir,this.distDirName);
        return srcPath;
    }
}
