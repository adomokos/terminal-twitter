var User = require(__dirname + '/models/user');

var BuildsUser = {
  fromTwitterData: function(twitterData) {
    var user = new User();
    user.id = twitterData.id;
    user.screenName = twitterData.screen_name;

    return user;
  }
}

exports = module.exports = BuildsUser;
