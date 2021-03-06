var express = require("express");
var parser = require("body-parser");
var hbs     = require("express-handlebars");
var mongoose = require("./db/connection");

const app = express();

const Event = mongoose.EventModel;
const Donation = mongoose.DonationModel;

app.set('port', process.env.PORT || 8082)
app.use(parser.json({extended: true}));

app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));
app.use("/assets", express.static("public"));

app.get("/", function(req, res){
  res.render("welcome");
});

app.get('/api/events', function(req,res){
    Event.find({}).then((events)=>{
        res.json(events);
    });
});
app.get('/api/events/:title', function(req,res){
    Event.findOne({title: req.params.title}).then((event)=>{
        res.json(event);
    });
});
app.post('/api/events', function(req,res){
    Event.create(req.body).then((event)=>{
        res.json(event);
    });
});
app.delete('/api/events/:title', function(req,res){
    Event.findOneAndRemove({title: req.params.title}).then(()=>{
        res.json({success: true});
    });
});
app.put('/api/events/:title', function(req,res){
    Event.findOneAndUpdate({title: req.params.title}, req.body, {new: true}).then((event)=>{
        res.json(event);
    });
});


//Donation Model testing
app.get('/api/events/:title/donations', function(req,res){
    Event.findOne({title: req.params.title}).then((event)=>{
        console.log("id: " + event.donations[0].id)
        res.json(event.donations);
    });
});
app.get('/api/events/:title/donations/:id', function(req,res){
    Event.findOne({title: req.params.title}).then((event)=>{
      console.log("hello")
      var don = event.donations.filter(function(e) {
        return e.id == req.params.id;
      });
      console.log(don)
      res.json(don)
    });
});
app.post('/api/events', function(req,res){
    Event.create(req.body).then((event)=>{
        res.json(event);
    });
});


app.listen(app.get('port'), ()=> {
    console.log(['Listening on port 8082'])
})
