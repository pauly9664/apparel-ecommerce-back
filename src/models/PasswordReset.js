var mongoose = require('mongoose');

var ResetSchema = new mongoose.Schema({
   request_id: {
       type: String,
       required: true,
    //    trim: true
   },

   email: {
        type: String,
        // unique: true,
        required: true,
        lowercase: true,
        trim: true
    },
}) 
ResetSchema.pre('save', function(next){
   
    console.log('Request saved successfully.'); 
    next();
});

module.exports = mongoose.model('Reset', ResetSchema);