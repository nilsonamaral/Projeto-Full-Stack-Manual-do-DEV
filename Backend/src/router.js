const express = require('express')
const taskController = require('./controllers/taskControllers')
const taskMiddleware = require('../src/middlewares/taskMiddleware')

const router = express.Router()

router.get('/tasks', taskController.getAll)
router.post('/tasks',taskMiddleware.validateFieldTitle, taskController.createTask)
router.delete('/tasks/:id', taskController.deleteTask)
router.put('/tasks/:id', taskMiddleware.validateFieldTitle, taskMiddleware.validateFieldStatus, taskController.updateTask)

module.exports = router