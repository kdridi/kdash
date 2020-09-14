const array = require('./src/array')

module.exports = [array].reduce((res, fun) => Object.assign(res, fun), {})
