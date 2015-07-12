(function(window) {
  "use strict";

  var karma = window.__karma__;

  // Put Karma into an asynchronous waiting mode until we have loaded our
  // tests.
  karma.loaded = function() {};

  if (window.chai) {
    sinon.assert.expose(chai.assert, { prefix: "sinon" });


    chai.assert.sinonCalledOnceWithExactly = function() {
      var args =  Array.prototype.slice.call(arguments);
      chai.assert.sinonCalledWithExactly.apply(chai.assert, args);

      var spy = args.shift();
      var spyWithRestriction = spy.withArgs.apply(spy, args);
      args.unshift(spyWithRestriction);

      chai.assert.sinonCalledOnce.apply(chai.assert, args);
    };

    chai.assert.sinonAlwaysCalledOnceWithExactly = function() {
      var args =  Array.prototype.slice.call(arguments);
      chai.assert.sinonAlwaysCalledWithExactly.apply(chai.assert, args);

      var spy = args.shift();
      var spyWithRestriction = spy.withArgs.apply(spy, args);
      args.unshift(spyWithRestriction);

      chai.assert.sinonCalledOnce.apply(chai.assert, args);
    }
  }

  var DEST_PREFIX = "../../target/build/webapp/";

  var baseUrl = "/base/src/js";
  var libPath = "../../lib/";
  var staticPath = "../../src/static/";

  // Set the application endpoint and load the configuration.
  require.config({
    paths: {
      "helpers": libPath + "helpers",
      "backbone": libPath + "backbone/backbone",
      "polyglot": libPath + "polyglot/polyglot",
      "Squire": libPath + "squire/src/Squire",
      "jade": staticPath + "js/lib/runtime",
      "lodash": libPath + "lodash/dist/lodash",
      "underscore": libPath + "lodash/dist/lodash.underscore",
      "arkJS" : staticPath + "ark-style/js/ark-css",
      "autosize" : staticPath + "js/lib/autosize",
      "views": DEST_PREFIX + "tmp/templates",
      "d3": libPath + "d3/d3.v3"
    },

    map: {
      '*': {
        jquery: 'noconflict'
      },
      'noconflict': {
        jquery: libPath + "jquery/dist/jquery"
      }
    },

    shim: {
      lodash: {
        exports: '_'
      },
      jquery: {
        exports: '$'
      },
      arkJS: {
        deps: ['jquery']
      },
      polyglot: {
        exports: 'Polyglot'
      }
    },

    baseUrl: baseUrl
  });

  require([
  ], function() {

    var specs = Object.keys(karma.files).filter(function(file) {
      return /^\/base\/test\/.*\.spec\.js$/.test(file);
    });

    // Load all specs and start Karma.
    require(specs, karma.start);
  });



})(this);
