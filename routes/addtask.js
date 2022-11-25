const express = require('express');
const router = express.Router();

const add_task_controller = require('../controllers/add_task_controller');

router.post('/',add_task_controller.addtask);

module.exports = router;