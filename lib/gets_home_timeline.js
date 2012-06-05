var FormatsText = require('./formats_text');

var GetsHomeTimeline = {
  forUser: function(twitter) {
    twitter.getHomeTimeline(function(err, data) {
      if (err) throw err;
      console.log(FormatsText.forTitle('Home Timeline'));

      var i = 0;
      for(; i < data.length; i++) {
        console.log(FormatsText.forTweet(data[i]));
      }
    });
  }
};

exports = module.exports = GetsHomeTimeline;

exports.GetsMentions = GetsHomeTimeline;
