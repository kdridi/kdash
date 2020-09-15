const identity = (x) => x

module.exports = (...args) => {
	return args.length === 0 ? undefined : identity(args.shift())
}
