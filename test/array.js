const assert = require('assert')

const _ = require('..')

describe('Array', function () {
	describe('_.chunk()', function () {
		it('should chunk', function () {
			assert.deepStrictEqual(_.chunk(['a', 'b', 'c', 'd'], 2), [
				['a', 'b'],
				['c', 'd'],
			])
		})
		it('should chunk with missing values', function () {
			assert.deepStrictEqual(_.chunk(['a', 'b', 'c', 'd'], 3), [['a', 'b', 'c'], ['d']])
		})
		it('should chunk with default value', function () {
			assert.deepStrictEqual(_.chunk(['a', 'b', 'c', 'd']), [['a'], ['b'], ['c'], ['d']])
		})
	})
	describe('_.compact()', function () {
		it('should compact', function () {
			assert.deepStrictEqual(_.compact([0, 1, false, 2, '', 3]), [1, 2, 3])
		})
	})
	describe('_.concat()', function () {
		it('should concat', function () {
			const array = [1]
			const other = _.concat(array, 2, [3], [[4]])

			assert.deepStrictEqual(other, [1, 2, 3, [4]])
			assert.deepStrictEqual(array, [1])
		})
	})
	describe('_.difference()', function () {
		it('should difference', function () {
			assert.deepStrictEqual(_.difference([2, 1], [2, 3]), [1])
		})
	})
})
