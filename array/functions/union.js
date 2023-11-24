/**
 * _.drop([1, 2, 3], [5, 6, 7]);
 * => [1, 2. 3, 5, 6, 7]
 */
function union(array1, array2) {
    const combined = [...array1, ...array2]
    return combined;
  }
  
  module.exports = union;
  