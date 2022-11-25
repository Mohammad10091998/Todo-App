const TaskList = require('../models/task');

module.exports.deleteById = function(request,response){
   let taskId = request.query.taskId;
   TaskList.findByIdAndDelete(taskId,(error)=>{
        if(error){
            console.log(`Error while deleting task by id ${error}`);
            return;
        }
        
    });
    
    return response.redirect('back');
}
