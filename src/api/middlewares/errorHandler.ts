import { NextFunction, Request, Response } from 'express'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { CustomError } from '../../Contexts/shared/domain/errors/custom.error'
import {
  BaseError,
  HttpStatusCode,
} from '../../Contexts/shared/domain/errors/base.error'

export const errorHandler = (
  err: Error | PrismaClientKnownRequestError,
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof PrismaClientKnownRequestError) {
    // The .code property can be accessed in a type-safe manner
    if (err.code === 'P2002') {
      console.error(JSON.stringify(err, null, 2))
      res.status(500).json({
        error:
          'There is a unique constraint violation, a new user cannot be created with this email',
      })
    }
    if (err.code === 'P2025') {
      console.error(JSON.stringify(err, null, 2))
      res.status(404).json({ error: 'Record not found' })
    }
  } else if (err instanceof CustomError) {
    // console.error(JSON.stringify(err.originalError, null, 2))
    console.error(err.originalError || err)
    res.status(err.statusCode).json({
      status: err.statusCode,
      message: err.message,
    })
  } else if (err instanceof BaseError) {
    console.error(err)
    const status =
      err instanceof BaseError
        ? err.httpCode
        : HttpStatusCode.INTERNAL_SERVER_ERROR

    res.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: _req.url,
      message:
        err instanceof BaseError
          ? err.message
          : 'There was an unexpected internal error',
    })
  } else {
    console.error(JSON.stringify(err, null, 2))
    res.status(500).json({
      status: 500,
      message: 'Something went wrong',
    })
  }
  next()
}
