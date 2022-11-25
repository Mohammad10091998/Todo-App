const express = require('express');
const port = 8000;
const app = express();

//connect to static files
app.use(express.static('./assets'));
//to get form data
app.use(express.urlencoded());

//requiring routes
app.use('/',require('./routes'));

//requring TaskLists from Mongodb
const db = require('./config/mongoose');
const TaskList = require('./models/task');

//Setting view engine
app.set('view engine','ejs');
app.set('views','./views');






//listening on port
app.listen(port,(error)=>{
    if(error){
        console.log("Error while listening");
    }else{
        console.log(`Yayyy!!! app listen on port ${port}`);
    }
});
