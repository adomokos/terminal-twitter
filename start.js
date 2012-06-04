var Twitter = require('ntwitter');

var twit = new Twitter({
  consumer_key: 'WiADWUzHNpngVnNQr18GoQ',
  consumer_secret: 'JRJFLlOfTUkIoExtYVUJpdYzmFZIkKI6iqe5xB3KF8',
  access_token_key: '20173708-FtTCv5XNKYlvJWMPlkfA6C6MMsO1We2dlF84PHFUM',
  access_token_secret: 'W9A5RHZUj3My4X6fHAoJZPOGNNMb6NWsN1QRYcEPc'
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
