//getting router
const express = require('express');
const router = express.Router();

console.log("Yayyy!! router loaded");

const homeControlller = require('../controllers/home_controller');

//if request comes for home page--> call homecontroller-->home action(method)
router.get('/',homeControlller.home);


router.use('/create-task', require('./addtask'));

router.use('/clear-all-task', require('./clear_all_tasks'));

router.use('/delete-task-by-id',require('./deletetask'));

router.use('/complete-task-by-id',require('./complete_task'));

module.exports = router;