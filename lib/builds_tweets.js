var Tweet = require(__dirname + '/models/tweet')
  , buildsUser = require('./builds_user');

var buildsTweets = {
  fromTwitterData: function(twitterData, callback) {
    var self = this
      , tweet = null;

    self.result = [];

    twitterData.forEach(function(data) {
      tweet = new Tweet();
      tweet.text = data.text;

      buildsUser.fromTwitterData(data.user, function(user) {
        tweet.user = user;
      });

      self.result.push(tweet);
    });

    callback(this.result);
  }
}

exports = module.exports = buildsTweets;
