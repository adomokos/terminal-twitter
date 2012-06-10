var program = require('commander')
  , Twitter = require('ntwitter')
  , config = require('./config');

if (config.twitter.consumer_key === 'your consumer key') {
  console.error('*** Please set up your Twitter credentials first in the config.js file! ***');
  return 1;
} else {
  var twitter = new Twitter({
    consumer_key: config.twitter.consumer_key,
    consumer_secret: config.twitter.consumer_secret,
    access_token_key: config.twitter.access_token_key,
    access_token_secret: config.twitter.access_token_secret
  });
};

var getsMentions = require('./lib/gets_mentions')
  , getsHomeTimeline = require('./lib/gets_home_timeline')
  , updatesStatus = require('./lib/updates_status')
  , getsRateLimit = require('./lib/gets_rate_limit')
  , addsUserToIgnoreList = require('./lib/adds_user_to_ignore_list');

twitter.verifyCredentials(function (err, data) {
  console.log("... authenticated");
});

program
  .version('0.0.1')
  .option('-i, --ignore [userId]', 'Adds the Twitter user ID to the list to be ignored')
  .option('-m, --mentions', 'Pulls the latest 5 mentions')
  .option('-r, --rate_limit', 'Twitter\'s rate limit status')
  .option('-t, --timeline', 'The latest home timeline, filtered')
  .option('-x, --timeline_unfiltered', 'The latest home timeline, unfiltered')
  .option('-u, --update_status [text]', 'Pushes a status update to Twitter')
  .parse(process.argv);

if (process.argv.length === 2) {
  getsHomeTimeline.forUser(twitter, true);
}
else {
  if (program.ignore) addsUserToIgnoreList.withId(program.ignore);
  if (program.mentions) getsMentions.forUser(twitter);
  if (program.rate_limit) getsRateLimit.forUser(twitter);
  if (program.timeline) getsHomeTimeline.forUser(twitter, true);
  if (program.timeline_unfiltered) getsHomeTimeline.forUser(twitter, false);
  if (program.update_status) updatesStatus.withText(program.update_status, twitter);
}

// TODO: Add the streaming option
//twitter.stream('user', '', function(stream) {
  //stream.on('data', function(data) {
    //console.log(data);
  //});
//});
