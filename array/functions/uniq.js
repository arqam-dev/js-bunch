/**
 * This method is like `_.uniq` except that it's designed and optimized
 * for sorted arrays.
 * 
 * _.uniq([1, 1, 2]);
 * // => [1, 2]
 */

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  
  function uniq(array) {
    var unique = array.filter(onlyUnique);
    return unique;
  }
  
  module.exports = uniq;
  