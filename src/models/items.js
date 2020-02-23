var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
    // product_id: {
    //     type: String,
    //     required: false,
    //     trim: true
    // },
    name: {
        type: String,
        required: false,
        trim: true
    },
    count: {
        type: Number,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    posting_date: {
        type: Date,
        required: true,
        default: Date.now 
    }
    // color: {
    //     type: String,
    //     required: true,
    //     trim: true
    // },
    // sizes: {
    //     type: String,
    //     required: true,
    //     trim: true
    // },
    // count: {
    //     type: String,
    //     required: true,
    //     trim: true
    // },
    // color: {
    //     type: String,
    //     required: true,
    //     trim: true
    // },
    // Date: {
    //     type: String,
    //     required: true,
    //     trim: true
    // }
})
ItemSchema.pre('save', function (next) {
    //this.contact = this;
    console.log('Details saved successfully saved.');
    next();
});
//var Contact = mongoose.model('Contact', ContactSchema);
module.exports = mongoose.model('Items', ItemSchema);