//import models
var Message = require('../models/Message');
module.exports = {
    get: function (req, res) {
        Message.find({}).populate('user', '-pass').exec(function(err,result) {
            res.send(result);
        })
    },
    post: function(req,res) {
        console.log(req.body, req.user);
        req.body.user = req.user;
        var message = new Message(req.body);
        message.save()
        .then(item => {
            res.status(200).send("item saved to database");
           // console.log(req.body);
        })
        .catch(err => {
            res.status(400).send("unable to save to the database.");
        })
        // no longer needed with mongoose
       // database.collection('messages').insertOne(req.body);
      //  res.status(200);
    }
}