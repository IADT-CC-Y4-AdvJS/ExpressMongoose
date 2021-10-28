import mongoose from 'mongoose';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const { Schema } = mongoose;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    preferences: {
        type: Schema.Types.Mixed
    }
});

schema.statics.decoded = async function (userJwt) {
    return jwt.verify(userJwt, process.env.SECRET_KEY, (error, res) => {
        if (error) {
            return { error };
        }
        return res;
    });
};

schema.methods.encoded = function () {
    return jwt.sign(
        {
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 4,
            ...this.toJson(),
        },
        process.env.SECRET_KEY
    );
};

schema.methods.comparePassword = async function(plainText) {
    return await bcrypt.compare(plainText, this.password);
};

schema.methods.toJson = function() {
    return { name: this.name, email: this.email, preferences: this.preferences };
};

const User = mongoose.model('User', schema);

export default User;