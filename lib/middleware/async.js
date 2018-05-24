const HTTPError = require('../errors/HTTPError')
const ServerError = require('../errors/ServerError')

module.exports = exports = fn => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res))
      .then(() => {
        next()
      })
      .catch(err => {
        if (!(err instanceof HTTPError)) {
          console.error('Unexpected error', err)
          err = new ServerError(err.message || 'Something went wrong')
        }

        res.status(err.statusCode).json(err.toJSON())
      })
  }
}
