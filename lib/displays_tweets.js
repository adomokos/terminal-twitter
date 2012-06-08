var FormatsText = require('./formats_text')
  , _ = require('underscore')._
  , config = require('./../config');

var displaysTweets = {
  forHomeTimeLine: function(tweets, filtered) {
    if (filtered) {
      filteredTweets = tweets.filter(function(t) { return !_.include(config.filteredIds, t.user.id) });
    } else {
      filteredTweets = tweets;
    }

    this.printTweets('Home Timeline', filteredTweets);
  },

  forMentions: function(tweets) {
    this.printTweets('Top 10 Mentions', tweets);

  },

  printTweets: function(title, tweets) {
    console.log(FormatsText.forTitle(title));

    tweets.forEach(function(tweet) {
      console.log(FormatsText.forTweet(tweet));
    });
  }
}
exports = module.exports = displaysTweets;

exports.GetsMentions = displaysTweets;
