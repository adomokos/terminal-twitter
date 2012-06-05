var Program = require('commander')
  , Twitter = require('ntwitter')
  , Config = require('./config');

var twitter = new Twitter({
  consumer_key: Config.twitter.consumer_key,
  consumer_secret: Config.twitter.consumer_secret,
  access_token_key: Config.twitter.access_token_key,
  access_token_secret: Config.twitter.access_token_secret
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

if (Program.args.length === 0) GetsHomeTimeline.forUser(twitter);

if (Program.mentions) GetsMentions.forUser(twitter);
if (Program.timeline) GetsHomeTimeline.forUser(twitter);
if (Program.update_status) UpdatesStatus.withText(Program.update_status, twitter);

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
