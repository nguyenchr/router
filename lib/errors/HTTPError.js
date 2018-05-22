
class HTTPError extends Error {
  constructor ({
    statusCode,
    errorCode,
    message
  }, extra = {}) {
    super(message)
    Error.captureStackTrace(this, HTTPError)
    this.statusCode = statusCode
    this.errorCode = errorCode
    this.message = message
    this.extra = extra
  }
  toJSON () {
    return {
      status: this.statusCode,
      error: {
        code: this.errorCode,
        message: this.message,
        ...this.extra
      }
    }
  }
}

module.exports = exports = HTTPError
