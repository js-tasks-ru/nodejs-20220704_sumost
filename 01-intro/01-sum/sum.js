function sum(a, b) {
  if (typeof a === 'number') {
    if (typeof b === 'number') {
      return a + b;
    } 
  } else {
    throw new TypeError('must be numbers');  
  }
  throw new TypeError('must be numbers');
}

module.exports = sum; 