module.exports = function(grunt, pathToTask) {
    var path = require('path');
    var ROOT = path.resolve(__dirname);
    var pathToPackage = path.resolve(path.join(ROOT, '../../node_package'));

    var fullPathToTask = path.resolve(pathToPackage, pathToTask);
    require(fullPathToTask)(grunt);
}

