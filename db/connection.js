var mongoose  = require("mongoose");


var DonationSchema = new mongoose.Schema(
  {
    name: String,
    amount: Number,
    body: String
  }
)

var EventSchema = new mongoose.Schema(
  {
    title: String,
    body: String,
    goal: Number,
    currentAmount: Number,
    donations: [DonationSchema]
  }
)

var DonationModel = mongoose.model("Donation", DonationSchema);
var EventModel = mongoose.model("Event", EventSchema);

module.exports = {
  DonationModel: DonationModel,
  EventModel: EventModel
}

mongoose.connect("mongodb://localhost/crowdfund");
