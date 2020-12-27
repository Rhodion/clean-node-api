import { HttpRequest, HttpResponse } from '../../presentation/protocols/http'
import { Controller } from '../../presentation/protocols/controller'

export class LogControllerDecorator implements Controller {
  private readonly controller: Controller

  constructor (controller: Controller) {
    this.controller = controller
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    await this.controller.handle(httpRequest)
    return null
    // if (httpResponse.statusCode === 500) {
    //   // log
    // }
    // return httpResponse
  }
}
