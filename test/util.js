const assert = require('assert')

const _ = require('..')

describe('Util', function () {
	describe('_.identity()', function () {
		it('should return first argument when one argument', function () {
			assert.deepStrictEqual(_.identity({ a: 1 }), { a: 1 })
		})
		it('should return first argument when many arguments', function () {
			assert.deepStrictEqual(_.identity({ a: 1 }, { a: 2 }), { a: 1 })
		})
		it('should return undefined with no argument', function () {
			assert.deepStrictEqual(_.identity(), undefined)
		})
	})
})
