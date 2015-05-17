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

Template.cardList.helpers({
  users: userData
});