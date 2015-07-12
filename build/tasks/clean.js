module.exports = function(grunt) {
  var path = require('path');

  grunt.loadNpmTasks('grunt-contrib-clean');

  var dest = require('../buildDir')();

  grunt.config('clean', [dest, "test/reports"])
};
