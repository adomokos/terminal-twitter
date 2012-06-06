var FormatsText = require('./formats_text')
  , BuildsTweets = require('./builds_tweets')
  , _ = require('underscore')._
  , config = require('./../config');

var GetsHomeTimeline = {
  withFilter: function(twitter) {
    var self = this;
    twitter.getHomeTimeline(function(err, data) {
      if (err) throw err;

      var tweets = BuildsTweets.fromTwitterData(data);
      filteredTweets = tweets.filter(function(t) { return !_.include(config.filteredIds, t.user.id) });

      self.printTweets(filteredTweets);
    });
  },

  withoutFilter: function(twitter) {
    var self = this;
    twitter.getHomeTimeline(function(err, data) {
      if (err) throw err;

      var tweets = BuildsTweets.fromTwitterData(data);
      self.printTweets(tweets);
    });
  },

  printTweets: function(tweets) {
    console.log(FormatsText.forTitle('Home Timeline'));

    tweets.forEach(function(tweet) {
      console.log(FormatsText.forTweet(tweet));
    });
  }
};

exports = module.exports = GetsHomeTimeline;

exports.GetsMentions = GetsHomeTimeline;
