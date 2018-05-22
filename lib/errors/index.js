const BadRequestError = require('./BadRequestError')
const ForbiddenError = require('./ForbiddenError')
const HTTPError = require('./HTTPError')
const ServerError = require('./ServerError')
const UnauthorisedError = require('./UnauthorisedError')
const UnprocessableEntityError = require('./UnprocessableEntityError')

module.exports = exports = {
  BadRequestError: BadRequestError,
  ForbiddenError: ForbiddenError,
  HTTPError: HTTPError,
  ServerError: ServerError,
  UnauthorisedError: UnauthorisedError,
  UnprocessableEntityError: UnprocessableEntityError
}
