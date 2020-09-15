const difference = (array) => (values) => values.reduce((a, v) => a.filter((x) => v.includes(x) === false), array)

module.exports = (array, ...values) => {
	return difference(array)(values)
}
