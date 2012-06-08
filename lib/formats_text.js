var formatsText = {
  forTweet: function(tweet) {
    return this.replace("@{screen_name} - id({id}): {text}", {screen_name: tweet.user.screenName, id: tweet.user.id, text: tweet.text});
  },

  forTitle: function(title) {
    return this.replace("\n***{sectionTitle}***", {sectionTitle: title});
  },

  replace: function(text, params) {
    return text.replace(/{([^{}]*)}/g,
      function (a, b) {
        var r = params[b];
        return typeof r === 'string' || typeof r === 'number' ? r : a;
      }
    );
  }
};

exports = module.exports = formatsText;

exports.formatsText = formatsText;
