/* eslint-env node */

const compression = require('compression')
const cors = require('cors')
const dotenv = require('dotenv')
const express = require('express')
// const { createProxyMiddleware } = require('http-proxy-middleware')
// const { camelCase } = require('lodash/fp')
// const mapKeysDeep = require('map-keys-deep-lodash')
const next = require('next')
const routes = require('next-routes')
// const modifyResponse = require('node-http-proxy-json')
const cookiesMiddleware = require('universal-cookie-express')

dotenv.config({
  ...process.env.NODE_ENV === 'production' && { path: '.env.production' },
  ...process.env.NODE_ENV === 'staging' && { path: '.env.staging' },
})

const app = next({
  dev: (process.env.NODE_ENV !== 'production')
    && (process.env.NODE_ENV !== 'staging'),
})
const handler = routes().getRequestHandler(app)

app.prepare()
  .then(() => {
    express()
      .use(cors())
      // .use(
      //   '/api',
      //   createProxyMiddleware({
      //     changeOrigin: true,
      //     secure: false,
      //     target: process.env.REACT_APP_PROXY_TARGET,
      //     onProxyRes(proxyRes, req, res) {
      //       // TODO: Move formatting to services/api
      //       modifyResponse(res, proxyRes, body => {
      //         let data = body
      //         if (data) {
      //           data = mapKeysDeep(data, (value, key) => camelCase(key))
      //         }
      //         return data
      //       })
      //     },
      //   }),
      // )
      .use(cookiesMiddleware())
      .use(compression())
      .use(handler)
      .listen(process.env.PORT || 3000)
  })
