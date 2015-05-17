//Mongo Data
Template.cardList.helpers({
  users: function() {
  	return Users.find({ active: "true"});
  }
});

// Template.cardItem.helpers({
// 	activeTime: function() {
// 		current = Users.find({ active: "true"});
// 		return current.firstName();
// 	}
// });

timeSinceActive = moment("2015-05-17T17:49:28.022Z").fromNow();
console.log(timeSinceActive);
