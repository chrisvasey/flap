//Fixture
if (Users.find().count() === 0) {
  Users.insert({
    firstName: "Chris",
    lastName: "Vasey",
    lastVisit: "15/05/2015",
    timesVisted: "13"
  });

  Users.insert({
    firstName: "Grace",
    lastName: "Booyd",
    lastVisit: "16/05/2015",
    timesVisted: "6"
  });

  Users.insert({
    firstName: "Dan",
    lastName: "Vasey",
    lastVisit: "17/05/2015",
    timesVisted: "34"
  });

  Users.insert({
    firstName: "Jade",
    lastName: "Tang",
    lastVisit: "17/05/2015",
    timesVisted: "9"
  });

  Users.insert({
    firstName: "Peter",
    lastName: "Sedgewick",
    lastVisit: "15/05/2015",
    timesVisted: "15"
  });

  Users.insert({
    firstName: "Lucie",
    lastName: "Moss",
    lastVisit: "20/04/2015",
    timesVisted: "13"
  });
}