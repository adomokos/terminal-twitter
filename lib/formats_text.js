var FormatsText = {
  forTweet: function(tweetData) {
    return this.replace("@{screen_name}: {text}", {screen_name: tweetData.user.screen_name, text: tweetData.text});
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

exports = module.exports = FormatsText;

exports.FormatsText = FormatsText;
