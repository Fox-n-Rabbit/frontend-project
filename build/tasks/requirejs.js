module.exports = function(grunt) {
  var path = require('path');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  var buildDir = require('../buildDir')();

  var baseUrl = "src/js";
  var libPath = "../../lib/";
  var staticPath = "../../src/static/";

  // This task uses James Burke's excellent r.js AMD builder to take all modules
  // and concatenate them into a single file.
  grunt.config('requirejs', {
    release: {
      options: {
        include: ["app"],
        out: path.join(buildDir, "app.js"),
        optimize: "none",
        baseUrl: baseUrl,
        paths: {
          "requirejs":libPath + "requirejs/require",
          "backbone":libPath + "backbone/backbone",
          "jade": staticPath + "js/lib/runtime",
          "lodash":libPath + "lodash/dist/lodash",
          "polyglot":libPath + "polyglot/polyglot",
          "template":libPath + "lodash-template-loader/loader",
          "underscore":libPath + "lodash/dist/lodash.underscore",
          "arkJS" : staticPath + "ark-style/js/ark-css",
          "views": path.join(buildDir, "tmp/templates"),
          "gridly": staticPath + "js/lib/jquery.gridly",
          "autosize": staticPath + "js/lib/autosize",
          "d3": libPath + "d3/d3.v3"
        },

        // http://stackoverflow.com/a/16975513
        map: {
          '*': {
            "jquery": "noconflict"
          },
          'noconflict': {
            "jquery":libPath + "jquery/dist/jquery"
          }
        },

        shim: {
          lodash: {exports: '_'},
          gridly: {deps: 'jquery'},
          polyglot: {exports: 'Polyglot'}
        },

        // Include a minimal AMD implementation shim.
        name: "requirejs",

        // Wrap everything in an IIFE.
        wrap: true,

        // Do not preserve any license comments when working with source maps.
        // These options are incompatible.
        preserveLicenseComments: false
      }
    }
  });
}
