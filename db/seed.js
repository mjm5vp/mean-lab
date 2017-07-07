var Schema = require("../db/connection.js");

var DonationModel = Schema.DonationModel
var EventModel = Schema.EventModel

DonationModel.remove({}).then(function(){
    // process.exit();
});

EventModel.remove({}).then(function(){
    // process.exit();
});

// var donation1 = new DonationModel({name: "Tim", amount: 100, body: "Good Luck1"});
// var donation2 = new DonationModel({name: "Tarik", amount: 200, body: "Good Luck2!"});
// var donation3 = new DonationModel({name: "Bao", amount: 3, body: "Good Luck3!!!!!"});
// var donation4 = new DonationModel({name: "Fitssum", amount: 1000, body: "Good Luck4!!!!!"});
// var donation5 = new DonationModel({name: "Mark", amount: 800, body: "Good Luck5!!!!"});
// var donation6 = new DonationModel({name: "Rob", amount: 800, body: "Good Luck6!!!!"});


var event1 = new EventModel({title: "Save Tarik", body: "Tarik is so great.  Lets save him!", goal: 400, currentAmount: 0, donations: []});
var event2 = new EventModel({title: "Save Tim", body: "Tim is so great.  Lets save him!", goal: 1000, currentAmount: 0, donations: []});
var event3 = new EventModel({title: "Destroy Bao", body: "Bao needs to be eliminated.  Donate to make our dreams come true", goal: 9000, currentAmount: 0, donations: []});
var event4 = new EventModel({title: "Shave James", body: "Enough is enough", goal: 3000, currentAmount: 0, donations: []});
var event5 = new EventModel({title: "Feed Mark", body: "He likes tacos", goal: 10000, currentAmount: 0, donations: []});
var event6 = new EventModel({title: "Feed Rob", body: "He likes pork belly tacos", goal: 1000000, currentAmount: 0, donations: []});

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
