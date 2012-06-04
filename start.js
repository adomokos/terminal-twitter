var Twitter = require('ntwitter')
  , config = require('./config');

var twit = new Twitter({
  consumer_key: config.twitter.consumer_key,
  consumer_secret: config.twitter.consumer_secret,
  access_token_key: access_token_key,
  access_token_secret: access_token_secret
});

twit.verifyCredentials(function (err, data) {
  console.log("... authenticated");
});

twit.getMentions(function(err, data) {
  if (err) throw err;

  console.log(data[0].text);
});

/*
twit.getFollowersIds(function(err, data) {
  if (err) throw err;

  console.log(data);
});
*/

twit.rateLimitStatus(function(err, data) {
  console.log(data);
});

twit.getHomeTimeline(function(err, data) {
  var i;
  var message;
  for(i = 0; i < data.length; i++) {
    message = "@" + data[i].user.screen_name + ": ";
    console.log(message + data[i].text);
  }
});

/*
twit.updateStatus("Trying to ditch Twitter Client for ntwitter: https://github.com/avianflu/ntwitter", function(err, data) {
  if(err) throw err;
  console.log(data);
});
*/

//twit.stream('statuses/sample', function(stream) {
  //stream.on('data', function(data) {
    //console.log(data);
  //});
//});
