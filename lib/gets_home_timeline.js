var displaysTweets = require('./displays_tweets')
  , BuildsTweets = require('./builds_tweets');

var GetsHomeTimeline = {
  forUser: function(twitter, filtered) {
    twitter.getHomeTimeline(function(err, data) {
      if (err) throw err;

      BuildsTweets.fromTwitterData(data, function(tweets) {
        displaysTweets.forHomeTimeLine(tweets, filtered);
      });
    });
  }
};

exports = module.exports = GetsHomeTimeline;

exports.GetsMentions = GetsHomeTimeline;
