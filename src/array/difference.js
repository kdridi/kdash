const difference = (array) => (values) => values.reduce((r, a) => r.filter((x) => a.includes(x) === false), array)

module.exports = (...values) => {
	const array = values.shift()
	return difference(array)(values)
}
