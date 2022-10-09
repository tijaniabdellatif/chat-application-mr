require('dotenv').config({

    path:'./config/config.env'
})
const express = require('express');
const app = express();
const Database = require('./config/Database');
const PORT = process.env.PORT || 5000;
const authRouter = require('./routes/authRoute');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');





app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api/chat',authRouter);


Database();
app.listen(PORT,() => {

      console.log(`the server is running on ${PORT}`);
})