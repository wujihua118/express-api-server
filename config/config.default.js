/**
 * Config module
 * @file 全局配置
 * @module config.default
 */

const package = require('package')(module)

module.exports = {
  app: {
    port: process.env.PORT || 3000
  },

  mongodb: {
    uri: 'mongodb://127.0.0.1:27017/blog-api-express'
  },

  info: {
    name: package.name,
    description: package.description,
    version: package.version,
    author: package.author,
    keywords: package.keywords,
    github: 'https://github.com/wujihua118'
  }
}