//Mongo Data
Template.cardList.helpers({
  users: function() {
  	var list = Users.find({ active: true});

  	this.list = list;

  	return list
  }
});

// Template.cardItem.helpers({
//   activeTime: function() {
//   	list = this.list.fetch()

//     return time[0].createdAt;
//   }
// });



//example
timeSinceActive = moment("2015-05-17T13:49:28.022Z").fromNow();
console.log(timeSinceActive);
