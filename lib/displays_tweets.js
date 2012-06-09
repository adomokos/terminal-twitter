var formatsText = require('./formats_text')
  , _ = require('underscore')._
  , getsIgnoredUserIds = require('./gets_ignored_user_ids');

var displaysTweets = {
  forHomeTimeLine: function(tweets, filtered) {
    var userIdsObject = getsIgnoredUserIds.fromDataFile();

    if (filtered) {
      filteredTweets = tweets.filter(function(t) { return !_.include(userIdsObject.users, t.user.id) });
    } else {
      filteredTweets = tweets;
    }

    this.printTweets('Home Timeline', filteredTweets);
  },

  forMentions: function(tweets) {
    this.printTweets('Top 10 Mentions', tweets);
  },

  printTweets: function(title, tweets) {
    console.log(formatsText.forTitle(title));

    tweets.forEach(function(tweet) {
      console.log(formatsText.forTweet(tweet));
    });
  }
}
exports = module.exports = displaysTweets;
