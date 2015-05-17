//Fixture
if (Users.find().count() === 0) {
  Users.insert({
    firstName: "Chris",
    lastName: "Vasey",
    lastVisit: "15/05/2015",
    timesVisited: "13",
    active: "true",
    createdAt: new Date(),
    createdAt: new Date()
  });

  Users.insert({
    firstName: "Grace",
    lastName: "Booyd",
    lastVisit: "16/05/2015",
    timesVisited: "6",
    active: "false"
  });

  Users.insert({
    firstName: "Dan",
    lastName: "Vasey",
    lastVisit: "17/05/2015",
    timesVisited: "34",
    active: "true",
    createdAt: new Date()
  });

  Users.insert({
    firstName: "Jade",
    lastName: "Tang",
    lastVisit: "17/05/2015",
    timesVisited: "9",
    active: "false"
  });

  Users.insert({
    firstName: "Peter",
    lastName: "Sedgewick",
    lastVisit: "15/05/2015",
    timesVisited: "15",
    active: "true",
    createdAt: new Date()
  });

  Users.insert({
    firstName: "Lucie",
    lastName: "Moss",
    lastVisit: "20/04/2015",
    timesVisited: "13",
    active: "false"
  });
}