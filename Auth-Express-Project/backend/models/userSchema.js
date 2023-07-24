const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('dotenv').config();
const JWT = require('jsonwebtoken');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'user name is Required'],
        minLength: [5, 'Name is short'],
        maxLength: [50, 'Name is too long'],
        trim: true
    },
    username:{
        type: String,
        required: [true,'username is required'],
        unique: true,
        unique: [true, 'already taken']
    },
    bio:{
        type: String,
        minLength: [16, 'Bio is short'],
        maxLength: [100, 'Bio is too long']
    },
    email:{
        type: String,
        required: [true,'user email is required'],
        unique: true,
        lowercase: true,
        unique: [true, 'already registered']
    },
    password: {
        type: String,
        select: false
    }
},{
    timestamp: true
});

userSchema.pre("save", async function(next) {
    if(!this.isModified('password')){
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    return next();
})

userSchema.methods = {
    JWTtoken() {
        return JWT.sign(
            {id: this._id,email: this.email},
            process.env.SECRET,
            {expiresIn: '24h'}
        )
    }
}

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;