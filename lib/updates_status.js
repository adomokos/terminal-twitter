var UpdatesStatus = {
  withText: function(text, twitter) {
    //console.log(text);
    //return;
    twitter.updateStatus(text, function(err, data) {
      if(err) throw err;

      console.log('Status updated!');
    });
  }
};

exports = module.exports = UpdatesStatus;

exports.GetsMentions = UpdatesStatus;
