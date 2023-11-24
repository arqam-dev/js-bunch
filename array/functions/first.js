/**
 * _.drop([1, 2, 3]);
 * => 1
 */
function first(array) {
    var length = array == null ? 0 : array.length;
    if (!length) {
      return null;
    } else {
        return array[0];
    }
  }
  
  module.exports = first;
  