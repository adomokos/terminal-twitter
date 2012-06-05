var GetsRateLimit = {
  forUser: function(twitter) {
    twitter.rateLimitStatus(function(err, data) {
      console.log(data);
    });
  }
};

exports = module.exports = GetsRateLimit;

exports.GetsRateLimit = GetsRateLimit;
