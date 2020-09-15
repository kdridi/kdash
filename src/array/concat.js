const concat = (array) => (args) => Array.prototype.concat.apply(array, args)

module.exports = (array, ...values) => {
	return concat(array)(values)
}
