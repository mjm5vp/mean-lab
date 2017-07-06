var express = require("express");
var parser = require("body-parser");
var mongoose = require("./db/connection");

const app = express();

const Event = mongoose.EventModel;
const Donation = mongoose.DonationModel;

app.get('/*', function(req,res){
    res.sendFile(`/${__dirname}/public/app-root.html`);
});
app.get('/events', function(req,res){
    Event.find({}).then((events)=>{
        res.json(events);
    });
});
app.get('/events/:title', function(req,res){
    Event.findOne({title: req.params.title}).then((event)=>{
        res.json(event);
    });
});
app.post('/events', function(req,res){
    Event.create(req.body).then((event)=>{
        res.json(event);
    });
});
app.delete('/events/:title', function(req,res){
    Event.findOneAndRemove({title: req.params.title}).then(()=>{
        res.json({success: true});
    });
});
app.put('/events/:title', function(req,res){
    Event.findOneAndUpdate({title: req.params.title}, req.body, {new: true}).then((event)=>{
        res.json(event);
    });
});


app.set('port', process.env.PORT || 8082)
app.listen(app.get('port'), ()=> {
    console.log(['Listening on port 8082'])
})
