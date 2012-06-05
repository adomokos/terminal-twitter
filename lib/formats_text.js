var FormatsText = {
  forTweet: function(tweetData) {
    return this.replace("@{screen_name} - id({id}): {text}", {screen_name: tweetData.user.screen_name, id: tweetData.user.id, text: tweetData.text});
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

exports = module.exports = FormatsText;

exports.FormatsText = FormatsText;
