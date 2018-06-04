var mongoose = require('mongoose');

module.exports = mongoose.model('Message', {
    resourceType: String,
    locationName: String,
    address: {
        address: String, 
        city: String, 
        state: String, 
        zip: String
    },
    phone: String,
    website: String,
    msg: String,
    created: Date,
    user: {type: mongoose.Schema.ObjectId, ref: 'User'}
});