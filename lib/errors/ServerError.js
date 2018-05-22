const HTTPError = require('./HTTPError')

const defaultErrorCode = 'INTERNAL_SERVER_ERROR'

class ServerError extends HTTPError {
  constructor ({ errorCode = defaultErrorCode, message }, extra) {
    super({
      statusCode: 500,
      errorCode,
      message
    }, extra)
  }
}

module.exports = exports = ServerError
