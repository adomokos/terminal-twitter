var getsRateLimit = {
  forUser: function(twitter) {
    twitter.rateLimitStatus(function(err, data) {
      console.log(data);
    });
  }
};

exports = module.exports = getsRateLimit;

exports.getsRateLimit = getsRateLimit;
