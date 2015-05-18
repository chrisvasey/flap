//Mongo Data
Template.cardList.helpers({
  users: function() {
  	var list = Users.find({ active: true});

  	this.list = list;

  	return list
  }
});

//Last Seen
Template.cardItem.helpers({
	activeTime: function() {
		timeSinceActive = moment(this.createdAt).fromNow();
		return timeSinceActive;
	}
});
