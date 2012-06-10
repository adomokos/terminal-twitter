var fs = require('fs')
  , config = require('./../config');

var getsIgnoredUserIds = {
  fromDataFile: function(callback) {
    var dataFile = config.dataFiles.ignoreList;
    var content = fs.readFileSync(__dirname + '/../' + dataFile, 'utf8');

    callback(JSON.parse(content));
    //return JSON.parse(content);
  }
};

exports = module.exports = getsIgnoredUserIds;
