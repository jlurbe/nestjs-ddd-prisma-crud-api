import { BaseError, HttpStatusCode } from './base.error'

export class UnexpectedError extends BaseError {
  constructor(className: string, method: string, data: string, cause?: Error) {
    super(
      HttpStatusCode.INTERNAL_SERVER_ERROR,
      `<${className}> had an unexpected internal error when performing the <${method}> and the following data <${data}>`,
      cause,
    )
  }
}
