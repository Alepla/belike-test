import EncyptionController from './encryption.controller'

const encryptionController = new EncyptionController()
const password = 'password'
const passwdHashed = '$2a$10$NAy5/TeMhjmu8fKM18d4XuaVOzqV0n9fzusBVQd7cOMshh5djIX1O'

describe('encryption', () => {
  it('Should be defined', () => {
    expect(encryptionController).toBeDefined()
  })

  it('Should return a hashed passwd', async () => {
    expect(encryptionController.encrypt(password)).toEqual(expect.anything())
  })

  it('Should return true after compare', async () => {
    encryptionController.decrypt(password, passwdHashed).then((res) => {
      expect(res).toEqual(true)
    })
  })
})
