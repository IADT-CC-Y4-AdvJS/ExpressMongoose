import mongoose from 'mongoose';

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
    movie_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

const Comment = mongoose.model('Comment', schema);

export default Comment;