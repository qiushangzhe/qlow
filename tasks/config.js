var path = require('path');
module.exports = function() {
    //当前项目路径
    var baseDir = path.join(__dirname, '..');
    var srcDirName = 'src';
    var scriptDirName = 'scripts';
    var distDirName = 'dist';
    var styleDirName = 'style';
    var libDirName = 'libs';
    var pictureDirName = 'images';
    var viewsDirName = 'views';
    return {
        getName: function(name) {
            switch (name) {
                case 'srcDirName':
                    return srcDirName;
                case 'scriptDirName':
                    return scriptDirName;
                case 'distDirName':
                    return distDirName;
                case 'styleDirName':
                    return styleDirName;
                case 'libDirName':
                    return libDirName;
                case 'pictureDirName':
                    return pictureDirName;
                case 'viewsDirName':
                    return viewsDirName;
            };
        },

        fileList: {
            indexFile: function() {
                return {
                    path : path.join(baseDir, srcDirName,viewsDirName, "index.html"),
                    template : path.join(__dirname,'initProject/template','index.template.html'),
                }
            },
            appFile: function() {
                return {
                    path:path.join(baseDir, srcDirName, "app.js"),
                    template : path.join(__dirname,'initProject/template','app.template.js'),
                }
            },
            styleFile:function(){
                return {
                    path:path.join(baseDir, srcDirName,styleDirName, "main.scss"),
                    template : ''
                }
            },
            scriptFile:function(){
                return {
                    path:path.join(baseDir, srcDirName,scriptDirName, "main.js"),
                    template : ''
                }
            }

        },
        dirList: {
            //src
            getSrcPath: function() {
                var srcPath = path.join(baseDir, srcDirName);
                return srcPath;
            },
            //script
            getScriptDirName: function() {
                var srcPath = path.join(baseDir, srcDirName, scriptDirName);
                return srcPath;
            },
            //views
            getViewsDirName: function() {
                var srcPath = path.join(baseDir, srcDirName, viewsDirName);
                return srcPath;
            },
            //style
            getStylePath: function() {
                var srcPath = path.join(baseDir, srcDirName, styleDirName);
                return srcPath;
            },
            //lib
            getLibPath: function() {
                var srcPath = path.join(baseDir, srcDirName, libDirName);
                return srcPath;
            },
            //lib
            getPicturePath: function() {
                var srcPath = path.join(baseDir, srcDirName, pictureDirName);
                return srcPath;
            },
            //dist
            getDistPath: function() {
                var srcPath = path.join(baseDir, distDirName);
                return srcPath;
            }
        }
    }
}
