/**
 * @module 全局配置
 */

const package = require('package')(module)

module.exports = {
  APP: {
    port: process.env.APP_PORT || 8000,
    host: process.env.APP_HOST || 'localhost'
  },

  JWTSECRET: process.env.JWTSECRET || 'nodeserver',

  MONGODB: {
    uri: `mongodb://127.0.0.1:27017/node-app-server`
  },

  QINIU: {
    accessKey: process.env.ACCESSKEY,
    secretKey: process.env.SECRETKEY,
    scope: process.env.SCOPE,
    url: process.env.IMAGES_URL
  },

  INFO: {
    name: package.name,
    description: package.description,
    version: package.version,
    author: package.author,
    keywords: package.keywords,
    github: 'https://github.com/wujihua118'
  }
}
