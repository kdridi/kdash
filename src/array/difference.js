const difference = (array) => (values) => array.filter((x) => values.includes(x) === false)

module.exports = (array, values) => {
	return difference(array)(values)
}
