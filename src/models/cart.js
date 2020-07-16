var mongoose = require('mongoose');

var CartSchema = new mongoose.Schema({
    // filename: {
    //     type: String,
    //    // required: true,
    //     trim: true
    // },
    // user_id: {
    //     type: mongoose.Schema.Types.ObjectId, ref: 'User '
    // },
    description: {
        type: String,
        // required: true
    },
    price: {
        type: Number,
        //required: true
    },
    item:{
        type: String,
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
    created_at: {
        type: Date,
        // required: true,
        default: Date.now 
    }
})
CartSchema.pre('save', function (next) {
    console.log('Your shopping cart has been added to the order list');
    next();
});
module.exports = mongoose.model('Cart', CartSchema);