var FormatsText = require('./formats_text')
  , BuildsTweets = require('./builds_tweets');

var GetsMentions = {
  forUser: function(twitter) {
    twitter.getMentions(function(err, data) {
      if (err) throw err;

      var tweets = BuildsTweets.fromTwitterData(data);

      console.log(FormatsText.forTitle('Top 10 mentions'));
      tweets.forEach(function(tweet) {
        console.log(FormatsText.forTweet(tweet));
      });

    });
  }
};

exports = module.exports = GetsMentions;

exports.GetsMentions = GetsMentions;
