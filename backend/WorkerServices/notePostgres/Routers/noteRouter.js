const { Router } = require('express')
const noteController = require('../Controller/noteController')
const noteRouter = new Router()

noteRouter.post('/', noteController.createNote)
noteRouter.delete('/:id', noteController.deleteNote)
noteRouter.get('/:hash', noteController.getAllByHash)

module.exports = noteRouter
