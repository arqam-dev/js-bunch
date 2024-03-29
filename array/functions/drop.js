var baseSlice = require('./_baseSlice'),
    toInteger = require('./toInteger');

/**
 * _.drop([1, 2, 3]);
 * // => [2, 3]
 */
function drop(array, n, guard) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  n = (guard || n === undefined) ? 1 : toInteger(n);
  return baseSlice(array, n < 0 ? 0 : n, length);
}

module.exports = drop;
