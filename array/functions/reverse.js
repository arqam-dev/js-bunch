/** Used for built-in method references. */
var arrayProto = Array.prototype;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeReverse = arrayProto.reverse;

function reverse(array) {
  return array == null ? array : nativeReverse.call(array);
}

module.exports = reverse;
