const express = require('express');
const router = express.Router();

const complete_task_controller = require('../controllers/complete_task_controller');

router.get('/',complete_task_controller.completeTaskById);

module.exports = router;