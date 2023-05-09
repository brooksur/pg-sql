const request = require('supertest')
const start = require('../../app')
const UserRepo = require('../../repos/user-repo')
const pool = require('../../pool')
const Context = require('../context')

let context

beforeAll(async () => {
  context = await Context.build()
})

beforeEach(async () => {
  await context.reset()
})

afterAll(async () => {
  await context.close()
})

it('creates a user', async () => {
  const startCount = await UserRepo.count()
  const app = start()
  const res = await request(app).post('/users').send({
    username: 'testuser',
    bio: 'test bio'
  })
  expect(res.status).toBe(200)
  const endCount = await UserRepo.count()
  expect(endCount - startCount).toBe(1)
})
