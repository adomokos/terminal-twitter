var FormatsText = {
  forTweet: function(tweetData) {
    return ('@' + tweetData.user.screen_name + ': ' + tweetData.text);
  }
};

exports = module.exports = FormatsText;

exports.FormatsText = FormatsText;
