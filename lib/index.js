/**
 * Convert a possibly scalar value to an array
 */

function asArray (value) {
  return Array.isArray(value)
    ? value
    : [value]
}

/**
 * Exports
 */

module.exports = asArray
