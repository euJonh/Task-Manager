const listModel = require('../models/listModel')

module.exports = {
    // GET /list
    index: (req, res) => {
        const taskLists = listModel.getAllLists()
        res.render('app', { taskLists })
      },
    
    //GET /list/nova-lista
      create: (req, res) => {
        res.render('create')
      },
    //POST /list/noca-lista
      saveList: (req, res) => {
        const { title } = req.body
        
        const newList = listModel.createList(title)
        listModel.saveList(newList)

        res.redirect('/app')
      },
    //GET /list/:id
    show: (req, res) => {
      const { id } = req.params
      if (!id) throw new Error('Lista de tarefas não encontrada!')
      const taskList = listModel.getTaskListById(id)
      res.render('show', { taskList })
    },
    //POST /list/:id/delete
    delete: (req, res) => {
      const { id } = req.params
      listModel.deleteList(id)
      res.redirect('/app')
    },
    addTask: (req, res) => {
      const { id } = req.params
      const { title } = req.body
  
      listModel.addTask(id, title)
  
      res.redirect(`/app/${id}`)
    },
    //POST /list/:listId/completar/:taskId
    completeTask: (req, res) => {
      const { listId, taskId } = req.params
  
      listModel.completeTask(listId, taskId)
  
      res.redirect(`/app/${listId}`)
    },
    // POST /list/:listId/desfazer/:taskId
    undoTask: (req, res) => {
      const { listId, taskId } = req.params
  
      listModel.undoTask(listId, taskId)
  
      res.redirect(`/app/${listId}`)
    }
}