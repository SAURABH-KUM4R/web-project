const express = require('express');
const userRouter = require('./route/userRoute');
const connectDatabase = require('./config/dbConfig');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors({
    origin: [process.env.CLIENT_URL],
    methods: ["GET","POST"],
    credentials: true
}));
app.use(cookieParser());

connectDatabase();

app.use('/', userRouter);

module.exports = app;