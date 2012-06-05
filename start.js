var Twitter = require('ntwitter')
  , config = require('./config');

var twit = new Twitter({
  consumer_key: config.twitter.consumer_key,
  consumer_secret: config.twitter.consumer_secret,
  access_token_key: config.twitter.access_token_key,
  access_token_secret: config.twitter.access_token_secret
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
  console.log('\nHome Timeline\n');
  var i;
  var message;
  for(i = 0; i < data.length; i++) {
    message = "@" + data[i].user.screen_name + ": ";
    console.log(message + data[i].text);
  }
});

//twit.updateStatus("@veezus: Dude, I saw this on TV when it originally aired ;-). http://bit.ly/GWOlaI", function(err, data) {
  //if(err) throw err;
  //console.log(data);
//});

twit.stream('user', '', function(stream) {
  stream.on('data', function(data) {
    console.log(data);
  });
});
