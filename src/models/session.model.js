import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    jwt: {
        type: String,
        required: true
    }
});

const Session = mongoose.model('Session', schema);

export default Session;