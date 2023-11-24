/**
 * This method is like `_.uniq` except that it's designed and optimized
 * for sorted arrays.
 * 
 * _.sortedUniq([1, 1, 2]);
 * // => [1, 2]
 */

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function sortedUniq(array) {
  var sorted_array = array.sort();
  var unique = sorted_array.filter(onlyUnique);
  return unique;
}

module.exports = sortedUniq;
