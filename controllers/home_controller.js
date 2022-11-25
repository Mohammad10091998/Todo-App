const TaskList = require('../models/task');

module.exports.home = function(request, response){
    TaskList.find({},function(error,tasks){
        if(error){
            console.log("Error in fetching tasks");
            return;
        }

        return response.render('home',
        {
        title: "ToDo",
        task_list : tasks
        });
    });
}