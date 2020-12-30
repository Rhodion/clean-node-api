import { LoginController } from './login'
import { HttpRequest, HttpResponse } from '../../protocols/http'
import { badRequest } from '../../helpers/http-helper'
import { MissingParamError } from '../../errors/missing-param-error'

describe('Login Controller', () => {
  test('Should return 400 if email is provided', async () => {
    const sut = new LoginController()
    const httpRequest: HttpRequest = {
      body: {
        password: 'any_password'
      }
    }
    const httpResponse: HttpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(badRequest(new MissingParamError('email')))
  })
})
