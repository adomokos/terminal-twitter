var displaysTweets = require('./displays_tweets')
  , buildsTweets = require('./builds_tweets');

var getsMentions = {
  forUser: function(twitter) {
    twitter.getMentions(function(err, data) {
      if (err) throw err;

      buildsTweets.fromTwitterData(data, function(tweets){
        displaysTweets.forMentions(tweets);
      });
    });
  }
};

exports = module.exports = getsMentions;

exports.getsMentions = getsMentions;
