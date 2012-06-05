var GetsMentions = {
  forUser: function(twitter) {
    twitter.getMentions(function(err, data) {
      if (err) throw err;

      var i = 0;
      console.log('\n*** Top 5 mentions ***');
      for(i; i<5; i++) {
        console.log('@' + data[i].user.screen_name + ': ' + data[i].text);
      }

    });
  }
};

exports = module.exports = GetsMentions;

exports.GetsMentions = GetsMentions;
