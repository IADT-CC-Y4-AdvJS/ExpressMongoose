import dotenv from 'dotenv';
import mongoose from 'mongoose';

import app from "./server.js";

dotenv.config();

const port = process.env.PORT;
const dbUri = process.env.DB_URI;

try {
    await mongoose.connect(dbUri, {
        'dbName' : 'sample_mflix'
    });

    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    });
}
catch(err) {
    console.error(err.stack);
    process.exit(1);
}
