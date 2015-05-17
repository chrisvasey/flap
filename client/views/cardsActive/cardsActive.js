//Mongo Data
Template.cardList.helpers({
  users: function() {
  	return Users.find({ active: "true"});
  }
});