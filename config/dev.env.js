'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
	NODE_ENV: '"development"',
	BASE_API: '"http://47.106.171.37:3100/api-h5"',  // 线上
	// BASE_API: '"http://localhost:3100/api-h5"',  // 测试
	IMG_API: '"http://47.106.171.37:3030"',
})
