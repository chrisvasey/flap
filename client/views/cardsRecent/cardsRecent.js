// Mongo Data
Template.recentList.helpers({
  users: function() {
  	return Users.find({ active: false});
  }
});