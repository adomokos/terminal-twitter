var FormatsText = require('./formats_text');

var GetsMentions = {
  forUser: function(twitter) {
    twitter.getMentions(function(err, data) {
      if (err) throw err;

      var i = 0;
      console.log('\n*** Top 5 mentions ***');
      for(i; i<5; i++) {
        console.log(FormatsText.forTweet(data[i]));
      }

    });
  }
};

exports = module.exports = GetsMentions;

exports.GetsMentions = GetsMentions;
