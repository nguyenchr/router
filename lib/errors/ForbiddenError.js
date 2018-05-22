const HTTPError = require('./HTTPError')

const defaultErrorCode = 'FORBIDDEN_ERROR'

class ForbiddenError extends HTTPError {
  constructor ({ errorCode = defaultErrorCode, message }, extra) {
    super({
      statusCode: 403,
      errorCode,
      message
    }, extra)
  }
}

module.exports = exports = ForbiddenError
