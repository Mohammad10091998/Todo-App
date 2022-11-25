const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    description : {
        type:String,
    
    },
    category : {
        type:String,
    },
    date : {
        type : Date,
        default: Date.now
    }
});

const TaskList = mongoose.model('TaskList',taskSchema);

module.exports = TaskList;