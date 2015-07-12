module.exports = function(grunt) {
    var path = require('path');

    grunt.loadNpmTasks('grunt-contrib-copy');

    var buildDir = require('../buildDir')();
    var dest = buildDir + "/";

    grunt.config('copy', {
        release: {
            files: [
                {src: 'bower_components/**', dest: dest},
                {src: 'src/js/config.js', dest: dest},
                {cwd: 'app/img', src: '**', dest: path.join(dest, 'images'), expand: true},
                {cwd: 'app/fonts', src: '**', dest: path.join(dest, 'fonts'), expand: true},
                {cwd: 'src/static', src: '**', dest: dest, expand: true}
            ]
        }
    })
}
