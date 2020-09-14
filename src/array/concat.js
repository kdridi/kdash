const concat = (array) => (args) => Array.prototype.concat.apply(array, args)

module.exports = (...args) => {
	const array = args.shift()
	return concat(array)(args)
}
