
var http = require('http');
var httpProxy = require('http-proxy');

var argv = require('optimist').argv;

 
// 
// Create a proxy server with custom application logic 
// 
var proxy = httpProxy.createProxyServer({});

var express = require('express');
var app = express();


var addStaticPath = function(urlPath, pathToStatic) {
    console.log('%s => %s', urlPath, pathToStatic);
    app.use(urlPath, express.static(pathToStatic));
};

var createServer = function () {
  var server = http.createServer(app);
  server.protocol = 'http';
  return server;
};

var startApp = function() {
    console.log('===================');
    addStaticPath('/dev/coverage', 'target/reports/core/coverage/phantom/lcov-report/');
    addStaticPath('/dev/doc', 'target/doc');

    var buildDir = require('./build/buildDir')();
    addStaticPath('/', buildDir);

    var server = createServer();
    var port = argv.port || process.env.PORT || 8005;

    server.listen(port, function() {
        console.log('===================');
        console.log('%s://localhost:%s', server.protocol, port);
    });
};
 
startApp();
 
