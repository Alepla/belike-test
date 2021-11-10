import { Router } from 'express'
import path from 'path'
import UsersController from './users.controller'

const router = Router()
const userController = new UsersController()

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../views/userForm.html'))
})

router.post('/register', (req, res) => {
  userController.get(req, res)
})

export default router
