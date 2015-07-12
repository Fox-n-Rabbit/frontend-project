module.exports = function(grunt) {
    var path = require('path');


    grunt.loadNpmTasks('grunt-contrib-jade');

    var buildDir = require('../buildDir')();

    var src = path.join('src/html');
    var dest = buildDir;

    grunt.config('jade.html', {
            files: grunt.file.expandMapping(['**/*.jade'], dest, {
                cwd: src,
                rename: function(destBase, destPath) {
                  return path.join(destBase, destPath.replace(/\.jade$/, '.html'));
                }
            })
    });

}
