var mongoose = require('mongoose');

var ImageSchema = new mongoose.Schema({
    filename: {
        type: String,
       // required: true,
        trim: true
    },
    description: {
        type: String,
        // required: true
    },
    price: {
        type: Number,
        //required: true
    },
    category: {
        type: String,

    },
    count: {
        type: Number,
    },
    amount: {
        type: Number,
    },
    sizes: {
        type: String
    },
    created_at: {
        type: Date,
        // required: true,
        default: Date.now 
    }
})
ImageSchema.pre('save', function (next) {
    console.log('Your Image has been uploaded');
    next();
});
module.exports = mongoose.model('Image', ImageSchema);