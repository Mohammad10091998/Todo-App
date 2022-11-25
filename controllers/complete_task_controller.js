const TaskList = require('../models/task');

module.exports.completeTaskById = function(request,response){
    let taskId = request.query.taskId;
    TaskList.findByIdAndUpdate(taskId,{ isComplete:true},(error)=>{
        if(error){
            console.log(`Error while updating task by id ${error}`);
            return;
        }
        console.log("complete task")
        return response.redirect('/');
    })
}