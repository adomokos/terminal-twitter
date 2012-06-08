var displaysTweets = require('./displays_tweets')
  , buildsTweets = require('./builds_tweets');

var getsHomeTimeline = {
  forUser: function(twitter, filtered) {
    twitter.getHomeTimeline(function(err, data) {
      if (err) throw err;

      buildsTweets.fromTwitterData(data, function(tweets) {
        displaysTweets.forHomeTimeLine(tweets, filtered);
      });
    });
  }
};

exports = module.exports = getsHomeTimeline;

exports.getsMentions = getsHomeTimeline;
