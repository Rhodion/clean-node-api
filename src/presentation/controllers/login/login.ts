import { Controller, HttpRequest, HttpResponse, EmailValidator } from '../../protocols'
import { badRequest, serverError } from '../../helpers/http-helper'
import { MissingParamError } from '../../errors'
import { InvalidParamError } from '../../errors/invalid-param-error'

export class LoginController implements Controller {
  private readonly emailValidator: EmailValidator

  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { email, password } = httpRequest.body

      if (!email) {
        return new Promise(resolve => resolve(badRequest(new MissingParamError('email'))))
      }

      if (!password) {
        return new Promise(resolve => resolve(badRequest(new MissingParamError('password'))))
      }

      const isValid = this.emailValidator.isValid(email)
      if (!isValid) {
        return new Promise(resolve => resolve(badRequest(new InvalidParamError('email'))))
      }
    } catch (error) {
      return serverError(error)
    }
  }
}
