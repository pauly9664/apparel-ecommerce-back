var mongoose = require('mongoose');

var Categoryschema = new mongoose.Schema({
    // product_id: {
    //     type: String,
    //     required: false,
    //     trim: true
    // },
    
    description: {
        type: String,
        trim: true
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now 
    }
    
})
Categoryschema.pre('save', function (next) {
    //this.contact = this;
    console.log('Details saved successfully saved.');
    next();
});
//var Contact = mongoose.model('Contact', ContactSchema);
module.exports = mongoose.model('Categories', Categoryschema);