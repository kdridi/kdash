const chunk = (array) => (size) =>
	array
		.map((_, idx) => ({ idx, res: array.slice(idx, idx + size) }))
		.filter(({ idx }) => idx % size === 0)
		.map(({ res }) => res)

module.exports = (array, size = 1) => {
	return chunk(array)(size)
}
