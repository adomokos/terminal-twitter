var DisplaysTweets = require('./displays_tweets')
  , BuildsTweets = require('./builds_tweets');

var GetsMentions = {
  forUser: function(twitter) {
    twitter.getMentions(function(err, data) {
      if (err) throw err;

      BuildsTweets.fromTwitterData(data, function(tweets){
        DisplaysTweets.forMentions(tweets);
      });
    });
  }
};

exports = module.exports = GetsMentions;

exports.GetsMentions = GetsMentions;
