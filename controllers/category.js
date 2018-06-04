var Category = require('../models/Category');
module.exports = {
    get: function (req, res) {
        Category.find({}).exec(function(err,result) {
            res.send(result);
        })
    },
    post: function(req,res) {   
        var category = new Category(req.body);
        category.save()
        .then(item => {
            res.send("item saved to database");
        })
        .catch(err => {
            res.status(400).send("unable to save to the database.");
        })
    }
}