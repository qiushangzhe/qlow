var exec = require('child_process').exec,
    child;

child = exec('rm -rf dist', function(err, out) {
    console.log(out);
    err && console.log(err);
});

child = exec('rm -rf src', function(err, out) {
    console.log(out);
    err && console.log(err);
});
