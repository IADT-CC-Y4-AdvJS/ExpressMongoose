import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
    theaterId: {
        type: Number
    },
    location: new Schema({
        address: new Schema({
            street1: {
                type: String,
                required: true
            },
            city: {
                type: String,
                required: true
            },
            state: {
                type: String,
                required: true
            },
            zipcode: {
                type: String,
                required: true
            },
            street2: {
                type: Schema.Types.Mixed
            }
        }),
        geo: new Schema({
            type: {
                type: String,
                required: true
            },
            coordinates: [
                {
                    type: Number
                }
            ]
        })
    })
});

const Theater = mongoose.model('Theater', schema);

export default Theater;