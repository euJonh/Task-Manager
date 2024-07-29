const express = require('express')
const listController = require('./controllers/listController')

const router = express.Router()

router.get('/', (req, res) => res.render('index'))

router.get('/app', listController.index)
router.get('/app/nova-lista', listController.create)
router.post('/app/nova-lista', listController.saveList)

router.get('/app/:id', listController.show)
router.post('/app/:id/nova-tarefa', listController.addTask)
router.post('/app/:id/excluir', listController.delete)

router.post('/app/:listId/completar/:taskId', listController.completeTask)
router.post('/app/:listId/desfazer/:taskId', listController.undoTask)


module.exports = router