const { Router } = require('express')
const noteController = require('../Controller/Notes')
const notesRouter = new Router()
const AuthMiddelware = require('../middleware/AuthMiddelware')
notesRouter.post('/', AuthMiddelware, noteController.createNote)
notesRouter.delete('/:userId/:id', AuthMiddelware, noteController.deleteNote)
notesRouter.get('/:userId', AuthMiddelware, noteController.fetchNoteByUser)

module.exports = notesRouter
