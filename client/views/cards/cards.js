
//static test
var userData = [
	{
		firstName: "Chris",
		lastName: "Vasey"
	},
	{
		firstName: "Grace",
		lastName: "Boyd"
	},
	{
		firstName: "Dan",
		lastName: "Vasey"
	},
	{
		firstName: "Pete",
		lastName: "Sedgewick"
	}
];

// Template.cardList.helpers({
//   users: userData
//   }
// });


//Mongo Data
Template.cardList.helpers({
  users: function() {
  	return Users.find();
  }
});