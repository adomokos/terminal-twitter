var Twitter = require('ntwitter')
  , config = require('./config');

var twitter = new Twitter({
  consumer_key: config.twitter.consumer_key,
  consumer_secret: config.twitter.consumer_secret,
  access_token_key: config.twitter.access_token_key,
  access_token_secret: config.twitter.access_token_secret
});

var GetsMentions = require('./lib/gets_mentions');

twitter.verifyCredentials(function (err, data) {
  console.log("... authenticated");
});

GetsMentions.forUser(twitter);

/*
twitter.getFollowersIds(function(err, data) {
  if (err) throw err;

  console.log(data);
});
*/

twitter.rateLimitStatus(function(err, data) {
  console.log(data);
});

twitter.getHomeTimeline(function(err, data) {
  console.log('\nHome Timeline\n');
  var i;
  var message;
  for(i = 0; i < data.length; i++) {
    message = "@" + data[i].user.screen_name + ": ";
    console.log(message + data[i].text);
  }
});

//twitter.updateStatus("Actually, that would be @tjholowaychuk. http://bit.ly/qhlKsi", function(err, data) {
  //if(err) throw err;
  //console.log(data);
//});

//twitter.stream('user', '', function(stream) {
  //stream.on('data', function(data) {
    //console.log(data);
  //});
//});
