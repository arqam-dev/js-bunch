/**
 * _.drop([1, 2, 3], [5, 6, 7]);
 * => [1, 2. 3, 5, 6, 7]
 */

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  
  function unionUniq(array1, array2) {
    const merged = [...array1, ...array2];
    var unique = merged.filter(onlyUnique);
    return unique;
  }
  
  module.exports = unionUniq;
  