//Fixture
if (Users.find().count() === 0) {
  Users.insert({
    firstName: "Chris",
    lastName: "Vasey",
    lastActive: new Date(),
    timesVisited: "13",
    active: true,
    createdAt: new Date()
  });

  Users.insert({
    firstName: "Grace",
    lastName: "Boyd",
    lastActive: new Date("2015-05-17T15:35:59.301Z"),
    timesVisited: "6",
    active: false,
    createdAt: new Date()
  });

  Users.insert({
    firstName: "Dan",
    lastName: "Vasey",
    lastActive: new Date("2015-05-18T08:35:59.301Z"),
    timesVisited: "34",
    active: true,
    createdAt: new Date()
  });

  Users.insert({
    firstName: "Jade",
    lastName: "Tang",
    lastActive: new Date("2015-04-15T14:56:59.301Z"),
    timesVisited: "9",
    active: false,
    createdAt: new Date()
  });

  Users.insert({
    firstName: "Peter",
    lastName: "Sedgewick",
    lastActive: new Date("2015-05-06T14:56:59.301Z"),
    timesVisited: "15",
    active: true,
    createdAt: new Date()
  });

  Users.insert({
    firstName: "Lucie",
    lastName: "Moss",
    lastActive: new Date("2015-03-22T14:56:59.301Z"),
    timesVisited: "13",
    active: false,
    createdAt: new Date()
  });
}