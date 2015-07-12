module.exports = function(grunt) {
    var path = require('path');

    grunt.loadNpmTasks('grunt-contrib-less');

    var buildDir = require('../buildDir')();

    grunt.config('less', {
        compile: {
            options: {
                compress: false,
                paths: ['src/lib/lesshat.less'],
                modifyVars: { }
            },
            expand: true,
            cwd: path.resolve('src/less/out'),
            src: '*.less',
            ext: '.css',
            dest: path.join(buildDir, 'css')
        }
    });

}
