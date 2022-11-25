//requre library
const mongoose = require('mongoose');

//connect to database
mongoose.connect('mongodb://localhost/Todo_List_db');

//acquire connection (to check if it is successful)
const db = mongoose.connection;


//error
db.on('error', console.error.bind(console,'error connecting to db'));


//up and running
db.once('open', function(){
    console.log("Successfully connected to database");
});