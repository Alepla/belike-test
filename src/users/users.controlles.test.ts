import UsersController from './users.controller'

const usersController = new UsersController()

describe('users', () => {
  it('Should be defined', () => {
    expect(usersController).toBeDefined()
  })
})
