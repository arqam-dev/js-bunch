/**
 * _.drop([1, 2, 3], 3);
 * => [1, 2]
 */
function remove(array, element) {
  var return_array = [];
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }

  for (var i = 0; i < length; i++) {
    if (!(array[i] === element)) {
        return_array.push(array[i]);
    }
  }

  return return_array;
}

module.exports = remove;
