import { Router } from 'express'
import path from 'path'
import UsersController from './users.controller'

const router = Router()
const userController = new UsersController()

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../views/userForm.html'))
})

router.post('/register', (req, res) => {
  if (req.body.name) {
    userController.get(req, res)
  } else {
    res.status(400).send('Acceso denegado')
  }
})

export default router
