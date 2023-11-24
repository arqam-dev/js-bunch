/**
 * _.drop([1, 2, 3], 2);
 * => 1
 */
function findIndex(array, n) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }

  for(var i = 0; i < length; i++) {
      if(array[i] === n) {
          return i;
      }
  }
  return -1;
}

module.exports = findIndex;
