var Schema = require("../db/connection.js");

var DonationModel = Schema.DonationModel
var EventModel = Schema.EventModel

var donation1 = new DonationModel({name: "bob"});
var donation2 = new DonationModel({name: "susy"});
var donation3 = new DonationModel({name: "tom"});


var event1 = new EventModel({body: "reminder1!!"});
var event2 = new EventModel({body: "reminder2!!"});
var event3 = new EventModel({body: "reminder3!!"});
var event4 = new EventModel({body: "reminder4!!"});
var event5 = new EventModel({body: "reminder5!!"});
var event6 = new EventModel({body: "reminder6!!"});

var authors = [bob, susy, tom];
var reminders = [reminder1, reminder2, reminder3, reminder4, reminder5, reminder6];
