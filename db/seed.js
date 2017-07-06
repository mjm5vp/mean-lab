var Schema = require("../db/connection.js");

var DonationModel = Schema.DonationModel
var EventModel = Schema.EventModel

var donation1 = new DonationModel({name: "Tim", amount: 100, body: "Good Luck1"});
var donation2 = new DonationModel({name: "Tarik", amount: 200, body: "Good Luck2!"});
var donation3 = new DonationModel({name: "Bao", amount: 3, body: "Good Luck3!!!!!"});
var donation4 = new DonationModel({name: "Fitssum", amount: 1000, body: "Good Luck4!!!!!"});
var donation5 = new DonationModel({name: "Mark", amount: 800, body: "Good Luck5!!!!"});
var donation6 = new DonationModel({name: "Rob", amount: 800, body: "Good Luck6!!!!"});


var event1 = new EventModel({title: "reminder1!!", body: "reminder1!!", goal: 400, currentAmount: 0, donations: [donation1]});
var event2 = new EventModel({title: "reminder2!!", body: "reminder2!!", goal: 1000, currentAmount: 0, donations: [donation2]});
var event3 = new EventModel({title: "reminder3!!", body: "reminder3!!", goal: 9000, currentAmount: 0, donations: [donation3]});
var event4 = new EventModel({title: "reminder4!!", body: "reminder4!!", goal: 3000, currentAmount: 0, donations: [donation4]});
var event5 = new EventModel({title: "reminder5!!", body: "reminder5!!", goal: 10000, currentAmount: 0, donations: [donation5]});
var event6 = new EventModel({title: "reminder6!!", body: "reminder6!!", goal: 1000000, currentAmount: 0, donations: [donation6]});

var events = [event1, event2, event3, event4, event5, event6]


events.forEach(function(event, i){
  event.save(function(err){
    if (err){
      console.log(err)
    }else {
      console.log("An event was saved!");
    }
  })
});
