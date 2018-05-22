const HTTPError = require('./HTTPError')

const defaultErrorCode = 'UNAUTHORISED_ERROR'

class UnauthorisedError extends HTTPError {
  constructor ({ errorCode = defaultErrorCode, message }, extra) {
    super({
      statusCode: 401,
      errorCode,
      message
    }, extra)
  }
}

module.exports = exports = UnauthorisedError
