/**
 * Imports
 */

var asArray = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.deepEqual(asArray(1), [1])
  t.deepEqual(asArray([1]), [1])
  t.end()
})
