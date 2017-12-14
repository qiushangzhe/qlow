var path = require('path');
export class Config {
    // 当前执行qlow工具的目录
    private baseDir: string = path.join(process.cwd());
    // src的文件夹名
    private srcDirName: string = 'src';
    private scriptDirName: string = 'scripts';
    private distDirName: string = 'dist';
    private styleDirName: string = 'style';
    private libDirName: string = 'libs';
    private pictureDirName: string = 'images';
    private viewsDirName: string = 'views';

    public getName(name): string {
        switch (name) {
            case 'srcDirName':
                return this.srcDirName;
            case 'scriptDirName':
                return this.scriptDirName;
            case 'distDirName':
                return this.distDirName;
            case 'styleDirName':
                return this.styleDirName;
            case 'libDirName':
                return this.libDirName;
            case 'pictureDirName':
                return this.pictureDirName;
            case 'viewsDirName':
                return this.viewsDirName;
        };
    };

    public fileList():object{
        const list = {
            indexFile: {
                path: path.join(this.baseDir, this.srcDirName, this.viewsDirName, "index.html"),
                template: path.join(__dirname, '../../src/template', 'index.template.html'),
            },
            styleFile: {
                path: path.join(this.baseDir, this.srcDirName, this.styleDirName, "main.scss"),
                template: ''
            },
            scriptFile: {
                path: path.join(this.baseDir, this.srcDirName,this.scriptDirName, "main.js"),
                template: ''
            }
        } 
        return list;
    }

    public dirList():object{
        const list = {
            src : path.join(this.baseDir, this.srcDirName),
            script : path.join(this.baseDir, this.srcDirName, this.scriptDirName),
            view : path.join(this.baseDir, this.srcDirName, this.viewsDirName),
            style : path.join(this.baseDir, this.srcDirName, this.styleDirName),
            lib : path.join(this.baseDir, this.srcDirName, this.libDirName),
            pic : path.join(this.baseDir, this.srcDirName, this.pictureDirName),
            dist : path.join(this.baseDir, this.distDirName)
        };
        return list;
    }
}