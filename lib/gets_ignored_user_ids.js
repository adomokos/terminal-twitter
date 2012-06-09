var fs = require('fs')
  , config = require('./../config');

var getsIgnoredUserIds = {
  fromDataFile: function() {
    var dataFile = config.dataFiles.ignoreList;
    var content = fs.readFileSync(dataFile, 'utf8');

    return JSON.parse(content);
  }
};

exports = module.exports = getsIgnoredUserIds;
