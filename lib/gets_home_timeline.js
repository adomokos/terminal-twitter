var FormatsText = require('./formats_text')
  , _ = require('underscore')._
  , config = require('./../config');

var GetsHomeTimeline = {
  forUser: function(twitter) {
    twitter.getHomeTimeline(function(err, data) {
      if (err) throw err;

      filtered = data.filter(function(c) { return !_.include(config.filteredIds, c.user.id) });

      console.log(FormatsText.forTitle('Home Timeline'));

      var i = 0;
      for(; i < filtered.length; i++) {
        console.log(FormatsText.forTweet(filtered[i]));
      }
    });
  }
};

exports = module.exports = GetsHomeTimeline;

exports.GetsMentions = GetsHomeTimeline;
