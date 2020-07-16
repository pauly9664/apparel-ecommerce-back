var mongoose = require('mongoose');

var SaleSchema = new mongoose.Schema({
  
    user_id: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User '
    },
    // name: {
    //     type: String,
    //     required: false,
    //     trim: true
    // },
    // total_id: {
    //     type: String,
    //     required: true,
    //     trim: true
    // },
    description: {
        type: String,
        required: true,
    },
    amount: {
        type: String,
        required: true,
        trim: true
    },
    delivery_status: {
        type: String,
        required: true,
    },
    payment_status: {
        type: String,
        required: true
    },
    buying_date: {
        type: Date,
        required: true,
        default: Date.now 
    }
});
SaleSchema.pre('save', function (next) {
    //this.contact = this;
    console.log('Thank you for shopping with us..');
    next();
});
module.exports = mongoose.model('Sale', SaleSchema);