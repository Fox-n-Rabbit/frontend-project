module.exports = function(grunt) {
    var path = require('path');

    grunt.loadNpmTasks('grunt-contrib-jade');

    var buildDir = require('../buildDir')();

    var src = path.join('src/templates');
    var dest = path.join(buildDir, 'tmp/templates');

    grunt.config('jade.templates', {
            options: {
                amd: true,
                client: true,
                compileDebug: false,
                namespace: 'TEMPLATES',
                processName: function(filename) {
                    var name = 'views/' + filename
                                .replace(/.jade$/, '')
                                .replace(/src\/templates\//,'');
                    return name;
                }
            },
            files: grunt.file.expandMapping(['**/*.jade'], dest, {
                cwd: src,
                rename: function(destBase, destPath) {
                  return path.join(destBase, destPath.replace(/\.jade$/, '.js'));
                }
            })
    });

}
