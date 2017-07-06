var express = require("express");
var parser = require("body-parser");
var mongoose = require("./db/connection");

const app = express();

const Event = mongoose.EventModel;
const Donation = mongoose.DonationModel;




app.set('port', process.env.PORT || 8082)
app.use(parser.json({extended: true}));

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
app.get('/*', function(req,res){
<<<<<<< HEAD
    res.sendFile(__dirname + "/public/app-root.html");
});
=======
    res.sendFile(`${__dirname}/public/app-root.html`);
});

>>>>>>> d757b45663d512cad253ac6230c922a8a96a9d94

app.listen(app.get('port'), ()=> {
    console.log(['Listening on port 8082'])
})
