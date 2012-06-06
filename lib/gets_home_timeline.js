var DisplaysTweets = require('./displays_tweets')
  , BuildsTweets = require('./builds_tweets');

var GetsHomeTimeline = {
  forUser: function(twitter, filtered) {
    twitter.getHomeTimeline(function(err, data) {
      if (err) throw err;

      var tweets = BuildsTweets.fromTwitterData(data);
      DisplaysTweets.forHomeTimeLine(tweets, filtered);
    });
  },
};

exports = module.exports = GetsHomeTimeline;

exports.GetsMentions = GetsHomeTimeline;
