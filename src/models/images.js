var mongoose = require('mongoose');

var ImageSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true,
        trim: true
    },
    created: {
        type: Date,
        required: true,
        default: Date.now 
    }
})
ImageSchema.pre('save', function (next) {
    console.log('Your Image has been uploaded');
    next();
});
module.exports = mongoose.model('Image', ImageSchema);