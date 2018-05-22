const ServerError = require('../errors/ServerError')

module.exports = exports = ({ schema }) => {
  return async (req, res) => {
    const originalFunc = res.json
    res.json = (responseBody) => {
      if (schema[res.statusCode]) {
        let errors = schema[res.statusCode].match(responseBody)
        if (errors.length) {
          throw new ServerError({
            errorCode: 'INVALID_RESPONSE_BODY',
            message: 'Response body does not match the specified schema'
          }, { errors })
        }
      }
      return originalFunc.call(res, responseBody)
    }
  }
}
