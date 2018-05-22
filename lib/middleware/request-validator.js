const BadRequestError = require('../errors/BadRequestError')

class InvalidSyntaxError extends BadRequestError {
  constructor (message, errors) {
    super({ errorCode: 'INVALID_SYNTAX_ERROR', message }, { errors })
  }
}

module.exports = exports = ({ schema }) => {
  return async (req, res) => {
    if (schema.params) {
      let errors = schema.params.match(req.params)
      if (errors.length) {
        throw new InvalidSyntaxError('Invalid url path parameters', errors)
      }
    }
    if (schema.query) {
      let errors = schema.query.match(req.query)
      if (errors.length) {
        throw new InvalidSyntaxError('Invalid url query parameters', errors)
      }
    }
    if (schema.body) {
      let errors = schema.body.match(req.body)
      if (errors.length) {
        throw new InvalidSyntaxError('Invalid payload', errors)
      }
    }
  }
}
