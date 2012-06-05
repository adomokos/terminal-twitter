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
  , UpdatesStatus = require('./lib/updates_status')
  , GetsRateLimit = require('./lib/gets_rate_limit');

twitter.verifyCredentials(function (err, data) {
  console.log("... authenticated");
});

Program
  .version('0.0.1')
  .option('-m, --mentions', 'Pulls the latest 5 mentions')
  .option('-t, --timeline', 'The latest home timeline')
  .option('-u, --update_status [text]', 'Pushes a status update to Twitter')
  .option('-r, --rate_limit', 'Twitter\'s rate limit status')
  .parse(process.argv);

if (process.argv.length === 2) {
  GetsHomeTimeline.forUser(twitter);
}
else {
  if (Program.mentions) GetsMentions.forUser(twitter);
  if (Program.timeline) GetsHomeTimeline.forUser(twitter);
  if (Program.update_status) UpdatesStatus.withText(Program.update_status, twitter);
  if (Program.rate_limit) GetsRateLimit.forUser(twitter);
}

//twitter.stream('user', '', function(stream) {
  //stream.on('data', function(data) {
    //console.log(data);
  //});
//});
