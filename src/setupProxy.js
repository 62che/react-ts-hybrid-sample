// https://create-react-app.dev/docs/proxying-api-requests-in-development/
const proxy = require('http-proxy-middleware')

const { REACT_APP_GOOGLE_PREFIX, REACT_APP_GOOGLE_URL } = process.env

module.exports = function(app) {
  // app.use(REACT_APP_GOOGLE_PREFIX, proxy({ target: REACT_APP_GOOGLE_URL, changeOrigin: true }))
  app.use((req, res, next) => {
    console.log('before', req.url, req.originalUrl)
    next()
    console.log('after', req.url, req.originalUrl)
  })

  app.use(
    REACT_APP_GOOGLE_PREFIX,
    proxy({
      target: REACT_APP_GOOGLE_URL,
      pathRewrite: { [`^${REACT_APP_GOOGLE_PREFIX}`]: '' },
      changeOrigin: true,
      followRedirects: true
    })
  )
}
