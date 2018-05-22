const HTTPError = require('./HTTPError')

const defaultErrorCode = 'UNPROCESSABLE_ENTITY_ERROR'

class UnprocessableEntityError extends HTTPError {
  constructor ({ errorCode = defaultErrorCode, message }, extra) {
    super({
      statusCode: 422,
      errorCode,
      message
    }, extra)
  }
}

module.exports = exports = UnprocessableEntityError
