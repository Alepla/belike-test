import bcrypt from 'bcryptjs'

class EncyptionController {
  public async encrypt (password: string) {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, 10, (err, passwd) => {
        if (err) {
          console.log('Error hasheando:', err)
          reject(err)
        } else {
          resolve(passwd)
        }
      })
    })
  }

  public async decrypt (password: string, newPassword: string) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, newPassword, (err, res) => {
        if (err) {
          console.log('Error comprobando:', err)
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  }
}

export default EncyptionController
