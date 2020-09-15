const array = require('./src/array')
const util = require('./src/util')

module.exports = [array, util].reduce((res, fun) => Object.assign(res, fun), {})
