var mongoose = require('mongoose');

var BookingSchema = new mongoose.Schema({
    // filename: {
    //     type: String,
    //    // required: true,
    //     trim: true
    // },
    // user_id: {
    //     type: mongoose.Schema.Types.ObjectId, ref: 'User '
    // },
    customer_name:{
        type: String
    },
    customer_number:{
        type: String
    },
    customer_email:{
        type: String
    },
    items_description: {
        type: String,
        // required: true
    },
    total_balance: {
        type: Number,
        //required: true
    },
    count: {
        type: Number,
    },
    amount_paid: {
        type: Number,
    },
    clearance_status: {
        type: String
    },
    created_at: {
        type: Date,
        // required: true,
        default: Date.now 
    }
})
BookingSchema.pre('save', function (next) {
    console.log('Booking saved');
    next();
});
module.exports = mongoose.model('Booking', BookingSchema);