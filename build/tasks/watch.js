module.exports = function(grunt) {
    var path = require('path');

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.config('watch', {
        'less': {
            files: ['src/less/**/*.less'],
            tasks: ['less'],
            options: {livereload: true}
        },
        'templates': {
            files: ['src/templates/**/*.jade'],
            tasks: ['jade:templates', 'requirejs'],
            options: {livereload: true}
        },
        'html': {
            files: ['src/html/**/*.jade'],
            tasks: ['jade:html', 'requirejs'],
            options: {livereload: true}
        },
        'jst': {
            files: ['src/templates/**/*.html'],
            tasks: ['jst', 'requirejs'],
            options: {livereload: true}
        },
        'requirejs': {
            files: ['src/js/**/*.js'],
            tasks: ['requirejs'],
            options: {livereload: true}
        },
        'static': {
            files: ['src/static/*'],
            tasks: ['copy'],
            options: {livereload: true}
        }
    })

};
