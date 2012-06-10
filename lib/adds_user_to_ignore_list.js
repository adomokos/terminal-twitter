var fs = require('fs')
  , config = require('./../config')
  , getsIgnoredUserIds = require('./gets_ignored_user_ids');

var addsUserToIgnoreList = {
  withId: function(userId) {
    var userIdInt = parseInt(userId);
    var dataFile = config.dataFiles.ignoreList;

    getsIgnoredUserIds.fromDataFile(function(userIds) {

      // Add the new userId to the list
      userIds.users.push(userIdInt);

      fs.writeFile(__dirname + '/../' + dataFile, JSON.stringify(userIds), function(err) {
        if (err) throw err;

        console.log('wrote the file');
      });

    });
  }
};

exports = module.exports = addsUserToIgnoreList;
