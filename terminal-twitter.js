var Program = require('commander')
  , Twitter = require('ntwitter')
  , config = require('./config');

var twitter = new Twitter({
  consumer_key: config.twitter.consumer_key,
  consumer_secret: config.twitter.consumer_secret,
  access_token_key: config.twitter.access_token_key,
  access_token_secret: config.twitter.access_token_secret
});

var GetsMentions = require('./lib/gets_mentions')
  , GetsHomeTimeline = require('./lib/gets_home_timeline')
  , UpdatesStatus = require('./lib/updates_status');

twitter.verifyCredentials(function (err, data) {
  console.log("... authenticated");
});

Program
  .version('0.0.1')
  .option('-m, --mentions', 'Pulls the latest 5 mentions')
  .option('-t, --timeline', 'The latest home timeline')
  .option('-u, --update_status [text]', 'Pushes a status update to Twitter')
  .parse(process.argv);

if (process.argv.length == 2) {
  GetsHomeTimeline.forUser(twitter);
}
else {
  if (Program.mentions) GetsMentions.forUser(twitter);
  if (Program.timeline) GetsHomeTimeline.forUser(twitter);
  if (Program.updateStatus) UpdatesStatus.withText(Program.updateStatus, twitter);
}

//UpdatesStatus.withText("I
//twitter.getFollowersIds(function(err, data) {
  //if (err) throw err;

  //console.log(data);
//});

//twitter.rateLimitStatus(function(err, data) {
  //console.log(data);
//});

//twitter.stream('user', '', function(stream) {
  //stream.on('data', function(data) {
    //console.log(data);
  //});
//});
