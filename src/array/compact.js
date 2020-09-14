const compact = (array) => array.reduce((res, acc) => (acc ? [...res, acc] : res), [])

module.exports = (...args) => {
	const array = args.shift()
	return compact(array)
}
