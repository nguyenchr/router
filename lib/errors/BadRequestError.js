const HTTPError = require('./HTTPError')

const defaultErrorCode = 'BAD_REQUEST_ERROR'

class BadRequestError extends HTTPError {
  constructor ({ errorCode = defaultErrorCode, message }, extra) {
    super({
      statusCode: 400,
      errorCode,
      message
    }, extra)
  }
}

module.exports = exports = BadRequestError
