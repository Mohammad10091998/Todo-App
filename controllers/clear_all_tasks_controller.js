const TaskList = require('../models/task');

module.exports.clearAll = function(request,response){
    TaskList.deleteMany({},(error)=>{
        if(error){
            console.log(`Error while deleting all tasks ${error}`);
            return;
        }
        
        return response.redirect('/');

    });
}