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
    }
})
//console.log(ContactSchema);
ContactSchema.pre('save', function (next) {
    //this.contact = this;
    console.log('Details saved successfully saved.');
    next();
});
//var Contact = mongoose.model('Contact', ContactSchema);
module.exports = mongoose.model('Contact', ContactSchema);