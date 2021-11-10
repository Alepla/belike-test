import pool from '../dbConfig/dbConnector'
import template from './profile'
import EncyptionController from '../encryption/encryption.controller'

class UsersController {
  public async post (req: any, res: any) {
    const encryptionController = new EncyptionController()
    try {
      const id = new Date().valueOf()
      const { name, password } = req.body
      encryptionController.encrypt(password).then((data) => {
        pool.query('INSERT INTO users (id, name, password) VALUES ($1, $2, $3)', [id, name, data], (error, results) => {
          if (error) {
            throw error
          }
          res.send(template(name))
        })
      })
    } catch (error) {
      res.status(400).send(error)
    }
  }

  public async get (req: any, res: any) {
    const encryptionController = new EncyptionController()
    try {
      const { name, password } = req.body
      pool.query('SELECT * FROM users WHERE name = $1', [name], (error, results) => {
        if (error) {
          throw error
        }
        if (results.rows.length === 0) {
          this.post(req, res)
        } else {
          encryptionController.decrypt(password, results.rows[0].password).then((data) => {
            if (data) {
              res.send(template(name))
            } else {
              res.status(400).send('Contraseñas incorrectas')
            }
          })
        }
      })
    } catch (error) {
      res.status(400).send(error)
    }
  }
}

export default UsersController
