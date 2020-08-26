const express = require('express')
const bodyParser = require('body-parser')

const asyncMiddleware = require('./middleware/async')
const requestValidator = require('./middleware/request-validator')
const responseValidator = require('./middleware/response-validator')

const handle = (app, method, authenticator, validateResponses, { url, handlers, isPublic, requestSchema, responseSchema }) => {
  let _handlers = []

  if (!isPublic && authenticator) {
    _handlers.push(authenticator)
  }

  if (requestSchema) {
    _handlers.push(requestValidator({ schema: requestSchema }))
  }

  if (validateResponses && responseSchema) {
    _handlers.push(responseValidator({ schema: responseSchema }))
  }

  _handlers = [..._handlers, ...handlers].map(handler => asyncMiddleware(handler))
  app[method](url, _handlers)
}

exports.create = ({ authenticator, validateResponses }) => {
  const app = express()

  app.use(bodyParser.json())

  return {
    server: app,
    static: (path, dir) => app.use(path, express.static(dir)),
    use: (middleware) => app.use(asyncMiddleware(middleware)),
    get: (config) => handle(app, 'get', authenticator, validateResponses, config),
    post: (config) => handle(app, 'post', authenticator, validateResponses, config),
    put: (config) => handle(app, 'put', authenticator, validateResponses, config),
    patch: (config) => handle(app, 'patch', authenticator, validateResponses, config),
    delete: (config) => handle(app, 'delete', authenticator, validateResponses, config)
  }
}

exports.errors = require('./errors')
