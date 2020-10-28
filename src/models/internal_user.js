var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var InternalUserSchema = new mongoose.Schema({
   names: {
       type: String,
       required: true,
       trim: true
   },
   number: {
       type: String,
       required: true,
       trime: true
   },
   email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
}) 
InternalUserSchema.pre('save', function(next){
    var user = this;
   

    if(!user.isModified('password')) return next();

    bcrypt.genSalt(10, function(err, salt) {
        if(err) 
        return next(err);

        bcrypt.hash(user.password, salt, function(err, hash){
            if(err) return next(err);

            user.password = hash;
            next();
        });
    });
});

InternalUserSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) =>{
        if(err) return cb(err);
       
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('InternalUser', InternalUserSchema);