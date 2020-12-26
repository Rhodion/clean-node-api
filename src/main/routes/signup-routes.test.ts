import request from 'supertest'
import app from '../config/app'

describe('Signup Routes', () => {
  test('Should return an account on succe4ss', async () => {
    await request(app)
      .post('/signup')
      .send({
        name: 'Rhodion',
        email: 'rhodions@gmail.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
