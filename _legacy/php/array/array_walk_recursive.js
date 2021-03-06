module.exports = function array_walk_recursive (array, funcname, userdata) { // eslint-disable-line camelcase
  //  discuss at: https://locutus.io/php/array_walk_recursive/
  // original by: Johnny Mast (https://www.phpvrouwen.nl)
  //   example 1: array_walk_recursive ({'a': 'b', 'c': {'d': 'e'}}, 'void', 'userdata')
  //   returns 1: true
  //   example 2: array_walk_recursive ('a', 'void', 'userdata')
  //   returns 2: false

  var key

  if (typeof array !== 'object') {
    return false
  }

  for (key in array) {
    if (typeof array[key] === 'object') {
      return array_walk_recursive(array[key], funcname, userdata)
    }

    if (typeof userdata !== 'undefined') {
      eval(funcname + '( array [key] , key , userdata  )')
    } else {
      eval(funcname + '(  userdata ) ')
    }
  }

  return true
}
