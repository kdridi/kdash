const { identity } = require('../util')

const differenceBy = (array) => (values) => (iteratee) => {
	return values.reduce((res, arr) => res.filter((x) => arr.map(iteratee).includes(iteratee(x)) === false), array)
}

module.exports = (array, ...values) => {
	const iteratee = values.pop()
	if (typeof iteratee === 'function') {
		return differenceBy(array)(values)(iteratee)
	} else if (typeof iteratee === 'string') {
		return differenceBy(array)(values)((x) => x[iteratee])
	} else if (Array.isArray(iteratee)) {
		return differenceBy(array)([...values, iteratee])((x) => identity(x))
	} else {
		throw new Error(typeof iteratee)
	}
}
