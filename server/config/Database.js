const mongoose = require('mongoose');
require('dotenv').config({

    path:'./config.env'
})

/**
 * Handling database connection
 */
const Database = () => {

    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(() => {

         console.log('Mongodb database is connected');
    }).catch((err) => {

          console.log(err);
    });
}


module.exports = Database;