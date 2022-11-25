const TaskList = require('../models/task');

module.exports.addtask = function(request, response){
    TaskList.create({
        description:request.body.description,
        category:request.body.category,
        date:request.body.date,
        isComplete:false
    }, function(error,newTask){
        if(error){
            console.log(`Error in creating task ${error}`);
            return;
        }
    })

    return response.redirect('/');
}