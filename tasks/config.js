var path = require('path');
module.exports = {
    baseDir : path.join(__dirname,'..'),
    srcDirName : 'src',
    scriptDirName : 'scripts',
    distDirName : 'dist',
    getSrcPath : function(){
        var srcPath = path.join(this.baseDir,this.srcDirName);
        return srcPath;
    },
    getScriptDirName:function(){
        var srcPath = path.join(this.baseDir,this.srcDirName,this.scriptDirName);
        return srcPath;
    },
    getDistPath:function(){
        var srcPath = path.join(this.baseDir,this.distDirName);
        return srcPath;
    }
}
