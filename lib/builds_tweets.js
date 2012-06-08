var Tweet = require(__dirname + '/models/tweet')
  , BuildsUser = require('./builds_user');

var BuildsTweets = {
  fromTwitterData: function(twitterData, callback) {
    var self = this
      , tweet = null;

    self.result = [];

    twitterData.forEach(function(data) {
      tweet = new Tweet();
      tweet.text = data.text;

      tweet.user = BuildsUser.fromTwitterData(data.user);

      self.result.push(tweet);
    });

    callback(this.result);
  }
}

exports = module.exports = BuildsTweets;
