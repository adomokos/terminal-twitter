var User = require(__dirname + '/models/user');

var buildsUser = {
  fromTwitterData: function(twitterData, callback) {
    var user = new User();
    user.id = twitterData.id;
    user.screenName = twitterData.screen_name;

    callback(user);
  }
}

exports = module.exports = buildsUser;
