Meteor.publish('beats', function() {
  return Beats.find();
})