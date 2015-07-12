module.exports = function (grunt) {

  var buildDir = require('../buildDir.js')();
  var path = require('path');

  grunt.config('jsdoc', {
    all: {
      src: [
        'src/js/**/*.js',
      ],
      options: {
        destination: path.join('target', 'doc')
      }
    }
  });

  grunt.loadNpmTasks('grunt-jsdoc');

};
