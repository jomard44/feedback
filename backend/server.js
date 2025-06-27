const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./routes')
const dotenv = require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());



app.use('/feedbacks', userRouter);

mongoose.connect(process.env.MONGODB_URI, {
}).then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}).catch(err => {
    console.error('Database connection error:', err);
    process.exit(1);
});