import express from 'express'
import bodyParser from 'body-parser'
import userRouter from './users/users.router'
import pool from './dbConfig/dbConnector'

class Server {
  private app: any

  constructor () {
    this.app = express()
    this.config()
    this.routerConfig()
    this.dbConnect()
  }

  private config () {
    this.app.use(bodyParser.urlencoded({ extended: true }))
    this.app.use(bodyParser.json({ limit: '1mb' })) // 100kb default
  }

  private dbConnect () {
    pool.connect((err: any, client: any, done: any) => {
      if (err) console.log(err)
      else console.log('Connected')
    })
  }

  private routerConfig () {
    this.app.use('/user', userRouter)
  }

  public start = (port: number) => {
    return new Promise((resolve, reject) => {
      this.app.listen(port, () => {
        resolve(port)
      }).on('error', (err: Object) => reject(err))
    })
  }
}

export default Server
