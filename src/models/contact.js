var mongoose = require('mongoose');

var ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
        trim: true
    },
    cell: {
        type: String,
        required: false,
        trim: true
    },
    feedback: {
        type: String,
        required: true,
        trim: true
    },
    buying_date: {
        type: Date,
        required: true,
        default: Date.now 
    }
})
//console.log(ContactSchema);
ContactSchema.pre('save', function (next) {
    //this.contact = this;
    console.log('Details saved successfully.');
    next();
});
//var Contact = mongoose.model('Contact', ContactSchema);
module.exports = mongoose.model('Contact', ContactSchema);