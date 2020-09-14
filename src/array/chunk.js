const chunk = (array) => (size) =>
	array
		.map((_, idx) => ({ idx, res: array.slice(idx, idx + size) }))
		.filter(({ idx }) => idx % size === 0)
		.map(({ res }) => res)

module.exports = (...args) => {
	const array = args.shift()
	const size = args.shift() || 1
	return chunk(array)(size)
}
