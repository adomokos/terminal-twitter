var FormatsText = require('./formats_text');

var GetsHomeTimeline = {
  forUser: function(twitter) {
    twitter.getHomeTimeline(function(err, data) {
      if (err) throw err;
      console.log('\n***Home Timeline***\n');

      var i = 0;
      for(; i < data.length; i++) {
        console.log(FormatsText.forTweet(data[i]));
      }
    });
  }
};

exports = module.exports = GetsHomeTimeline;

exports.GetsMentions = GetsHomeTimeline;
