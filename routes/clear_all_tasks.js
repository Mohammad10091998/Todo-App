const express = require('express');
const router = express.Router();

const clear_all_tasks_controller = require('../controllers/clear_all_tasks_controller');

router.get('/',clear_all_tasks_controller.clearAll);

module.exports = router;