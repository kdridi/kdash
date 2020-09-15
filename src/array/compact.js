const compact = (array) => array.reduce((res, acc) => (acc ? [...res, acc] : res), [])

module.exports = (array) => {
	return compact(array)
}
