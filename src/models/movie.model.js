import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
    plot: {
        type: String
    },
    genres: [
        {
            type: String
        }
    ],
    runtime: {
        type: Number
    },
    cast: [
        {
            type: String
        }
    ],
    num_mflix_comments: {
        type: Number,
        required: true
    },
    poster: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    fullplot: {
        type: String
    },
    languages: [
        {
            type: String
        }
    ],
    released: {
        type: Date
    },
    directors: [
        {
            type: String
        }
    ],
    writers: [
        {
            type: String
        }
    ],
    awards: new Schema({
        wins: {
            type: Number
        },
        nominations: {
            type: Number
        },
        text: {
            type: String
        }
    }),
    lastupdated: {
        type: Date,
        required: true
    },
    year: {
        type: Schema.Types.Mixed
    },
    imdb: new Schema({
        rating: {
            type: Schema.Types.Mixed
        },
        votes: {
            type: Schema.Types.Mixed
        },
        id: {
            type: Number
        }
    }),
    countries: [
        {
            type: String
        }
    ],
    type: {
        type: String,
        required: true
    },
    tomatoes: new Schema({
        viewer: new Schema({
            rating: {
                type: Number
            },
            numReviews: {
                type: Number
            },
            meter: {
                type: Number
            }
        }),
        lastUpdated: {
            type: Date,
            required: true
        },
        boxOffice: {
            type: String
        },
        consensus: {
            type: String
        },
        critic: new Schema({
            meter: {
                type: Number
            },
            numReviews: {
                type: Number,
                required: true
            },
            rating: {
                type: Number
            }
        }),
        dvd: {
            type: Date
        },
        fresh: {
            type: Number
        },
        production: {
            type: String
        },
        rotten: {
            type: Number
        },
        website: {
            type: String
        }
    }),
    metacritic: {
        type: Number
    },
    random_review: {
        type: String
    },
    rated: {
        type: String
    }
});

const Movie = mongoose.model('Movie', schema);

export default Movie;